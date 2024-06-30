from django.contrib import admin
from .models import User,SiteMaster,ContactMaster

# Register your models here.

admin.site.register(User)
admin.site.register(SiteMaster)
admin.site.register(ContactMaster)

