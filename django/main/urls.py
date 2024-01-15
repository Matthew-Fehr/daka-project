from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
                  path('manage/', views.homepage, name='homepage'),
                  # path('manage/', views.homepage, name='edit-property'),
                  path('api/send-email', views.send_email),
                  path('api/csrf-token/', views.get_csrf_token, name='get_csrf_token'),
                  path('manage/property-form/', views.PropertyFormView.as_view(), name='property-form-view'),
                  path('manage/properties/', views.property_list, name='property-list'),
                  path('manage/properties/<int:id>/delete/', views.delete_property, name='delete-property'),
                  path('manage/properties/edit/<int:id>/', views.EditPropertyView.as_view(), name='edit-property'),
                  path('api/properties', views.PropertiesView.as_view()),
                  path('api/properties/<property_id>', views.PropertyView.as_view()),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
