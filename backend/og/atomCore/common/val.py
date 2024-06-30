from django.conf import settings
from atomCore.models import SiteMaster

"""base.html内で使用する変数を定義"""

def common(request):
    return {
        "service_name":settings.SERVICE_NAME,
        "site_master":SiteMaster.objects.first(),}