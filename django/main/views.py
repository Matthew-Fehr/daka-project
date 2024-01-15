import datetime
import os
from django.conf import settings
from django.core.mail import send_mail
from django.middleware.csrf import get_token
from django.template import loader
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.shortcuts import render, redirect, get_object_or_404
from django.views import View

from .forms import PropertyForm, PropertyImageFormSet
from .models import Property, PropertyImage


def homepage(request):
    template = loader.get_template('homepage.html')
    return HttpResponse(template.render())


def property_list(request):
    properties = Property.objects.all()
    return render(request, 'property_list.html', {'properties': properties})


def delete_property(request, id):
    property_item = get_object_or_404(Property, id=id)
    if request.method == 'POST':
        # Delete associated images
        images = property_item.images.all()
        for image in images:
            image.delete()
            # Delete image file from storage
            image_path = os.path.join(settings.MEDIA_ROOT, str(image.image_url))
            if os.path.exists(image_path):
                os.remove(image_path)

        # Delete the property
        property_item.delete()
        return redirect('property-list')

    return render(request, 'delete_property.html', {'property': property_item})


def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


@api_view(['POST'])
@permission_classes([AllowAny])
def send_email(request):
    if request.method == 'POST':
        category = request.POST.get('category')
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')

        if category and name and email and message:
            # subject = f"Nuevo {category.capitalize()} de {name}"
            subject = f"Nueva Oferta de Inmobiliaria de {name}"
            message = f"Nombre: {name}\nEmail: {email}\nTelefono: {phone}\n\nMensaje:\n{message}"
            recipient_list = ['mattfehr47@gmail.com']  # Change this to the actual recipient's email

            try:
                send_mail(subject, message, 'matthew.fehr@upa.edu.py', recipient_list)
                return JsonResponse({'success': True})
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': 'Incomplete data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


class PropertiesView(APIView):

    def get(self, request):
        properties = Property.objects.all()
        property_images = PropertyImage.objects.all()

        property_images_by_property = {}
        for property_image in property_images:
            property_id = property_image.property_id
            if property_id not in property_images_by_property:
                property_images_by_property[property_id] = []

            property_images_by_property[property_id].append(property_image)

        properties_with_images = []
        for property in properties:
            images = property_images_by_property.get(property.id, ["/manage/media/images/DAKA_Icon.jpg"])
            if (images == ["/manage/media/images/DAKA_Icon.jpg"]):
                placeholder = images[0]
            else:
                placeholder = images[0].to_dict()

            if (property.status == "available"):
                properties_with_images.append({
                    "id": property.id,
                    "title_de": property.title_de,
                    "title_en": property.title_en,
                    "title_es": property.title_es,
                    "description_de": property.description_de,
                    "description_en": property.description_en,
                    "description_es": property.description_es,
                    "images": placeholder,
                    "location": property.location,
                    "type": property.type,
                    "price": int(property.price),
                    "currency": property.currency,
                    "price_unit": property.price_unit,
                    "publish_date": property.published_date,
                })

        return JsonResponse(properties_with_images, safe=False)


class PropertyView(APIView):
    def get(self, request, property_id):
        property = get_object_or_404(Property, pk=property_id)
        images = PropertyImage.objects.filter(property=property)
        if (images):
            placeholder = [image.to_dict() for image in images]
        else:
            placeholder = ["/manage/media/images/DAKA_Icon.jpg"]

        if (property.status != "available"):
            print("Unavailable")
            return HttpResponseNotFound(FileNotFoundError)
        property_with_images = {
            "id": property.id,
            "title_de": property.title_de,
            "title_en": property.title_en,
            "title_es": property.title_es,
            "description_de": property.description_de,
            "description_en": property.description_en,
            "description_es": property.description_es,
            "images": placeholder,
            "location": property.location,
            "google_maps": property.google_maps,
            "type": property.type,
            "price": int(property.price),
            "currency": property.currency,
            "price_unit": property.price_unit,
            "area": int(property.area),
            "area_unit": property.area_unit,
            "status": property.status,
            "publish_date": property.published_date,
        }

        return JsonResponse(property_with_images, safe=False)


class PropertyFormView(View):
    def get(self, request):
        form = PropertyForm()
        return render(request, 'add_property.html', {'form': form})
        
    @csrf_exempt
    def post(self, request):
        form = PropertyForm(request.POST)
        if form.is_valid():
            property_item = form.save()

            # Process uploaded images
            files = request.FILES.getlist('image_url')
            for file in files:
                image = PropertyImage(property=property_item, image_url=file)
                image.save()

            return redirect('homepage')

        return render(request, 'add_property.html', {'form': form})


class EditPropertyView(View):
    def get(self, request, id):
        property = get_object_or_404(Property, pk=id)
        form = PropertyForm(instance=property)
        initial_data = [{'image_url': image.image_url} for image in property.images.all()]
        formset = PropertyImageFormSet(initial=initial_data)
        return render(request, 'edit_property.html', {'form': form, 'formset': formset})
    @csrf_exempt
    def post(self, request, id):
        property = get_object_or_404(Property, pk=id)
        form = PropertyForm(request.POST, instance=property)
        initial_data = [{'image_url': image.image_url} for image in property.images.all()]
        formset = PropertyImageFormSet(request.POST, request.FILES)
        if form.is_valid():
            property_item = form.save()

            # Get uploaded images
            files = request.FILES.getlist('image_url')

            # Check if the image field has changed
            if files != [] and files != initial_data:
                # Delete previous existing images
                PropertyImage.objects.filter(property=property_item).delete()

                # Image field has changed, update the image(s)
                for file in files:
                    image = PropertyImage(property=property_item, image_url=file)
                    image.save()

            return redirect('property-list')  # Redirect to property listing view
        print("Invalid form")
        return render(request, 'edit_property.html', {'form': form, 'formset': formset})
