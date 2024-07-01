from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.sitemaps.views import sitemap
#from .sitemaps import PostSitemap
from django.http import HttpResponse

#sitemaps = {
#    'static': PostSitemap,
#}

urlpatterns = [
    path('v1/', include('atomAPIv1.urls')),
    path('admin/', admin.site.urls),
    #path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
    #url(r'^robots.txt$', lambda r: HttpResponse("User-agent: *\nDisallow: \nSitemap:https://bookwatch.jp/sitemap.xml", content_type="text/plain")),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)