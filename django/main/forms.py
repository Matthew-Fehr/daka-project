from django import forms
from django.forms import formset_factory
from .models import Property, PropertyImage


class PropertyForm(forms.ModelForm):
    class Meta:
        model = Property
        fields = ['title_de', 'description_de', 'title_es', 'description_es', 'title_en', 'description_en', 'location',
                  'google_maps', 'type', 'area', 'area_unit', 'price', 'currency', 'price_unit', 'status', 'expiration']


class PropertyImageForm(forms.ModelForm):
    class Meta:
        model = PropertyImage
        fields = ['image_url']


PropertyImageFormSet = formset_factory(PropertyImageForm, extra=1)
