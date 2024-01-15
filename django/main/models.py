from django.db import models


class Property(models.Model):
    class Meta:
        db_table = 'main_property'

    PROPERTY_TYPES = [
        ('house', 'Casa'),
        ('commercial', 'Negocio'),
        ('ranch', 'Estancia'),
        ('lot', 'Lote'),
    ]
    CURRENCY_TYPES = [
        ('grs', 'Grs'),
        ('usd', 'USD'),
    ]
    AREA_UNITS = [
        ('sqmeter', 'Metro cuadrado'),
        ('hectar', 'Hectarea'),
    ]
    PRICE_UNITS = [
        ('total', 'Total'),
        ('sqmeter', 'Metro cuadrado'),
        ('hectar', 'Hectarea'),
    ]
    STATUS_OPTIONS = [
        ('available', 'Disponible'),
        ('sold', 'Vendido'),
        ('unavailable', 'No disponible'),
    ]

    id = models.BigAutoField(primary_key=True)
    title_de = models.CharField(max_length=255, default="Titel", blank=True)
    title_es = models.CharField(max_length=255, default="Titulo", blank=True)
    title_en = models.CharField(max_length=255, default="Title", blank=True)
    description_de = models.TextField(default="Beschreibung", blank=True)
    description_es = models.TextField(default="Descripcion", blank=True)
    description_en = models.TextField(default="Description", blank=True)
    location = models.CharField(max_length=255, default="LOMA PLATA", blank=True)
    google_maps = models.CharField(max_length=255, default="LOMA PLATA", blank=True)
    type = models.CharField(max_length=20, choices=PROPERTY_TYPES, default=PROPERTY_TYPES[0])
    area = models.DecimalField(max_digits=20, decimal_places=2, default=0, blank=True)
    area_unit = models.CharField(max_length=20, choices=AREA_UNITS, default=AREA_UNITS[0], blank=True)
    price = models.DecimalField(max_digits=20, decimal_places=0, default=0, blank=True)
    currency = models.CharField(max_length=20, choices=CURRENCY_TYPES, default=CURRENCY_TYPES[0])
    price_unit = models.CharField(max_length=20, choices=PRICE_UNITS, default=PRICE_UNITS[0])
    status = models.CharField(max_length=20, choices=STATUS_OPTIONS, default=STATUS_OPTIONS[0])
    expiration = models.DateField(blank=True)
    published_date = models.DateTimeField(auto_now_add=True)


class PropertyImage(models.Model):
    class Meta:
        db_table = 'main_propertyimage'

    id = models.BigAutoField(primary_key=True)
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='images')
    image_url = models.FileField(upload_to='property_images/', blank=True)

    def to_dict(self):
        return self.image_url.url
