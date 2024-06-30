##from common.views.contact import *
from rest_framework.generics import CreateAPIView
from atomCore.serializers.contact import ContactSerializer
from atomCore.email.contact import ContactEmail
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from atomCore.models import ContactMaster
from rest_framework import authentication

from logging import getLogger

logger = getLogger(__name__)

class NoAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        logger.info("skip authentication")
        return None


class ContactHandler(CreateAPIView):

    model = ContactMaster
    serializer_class = ContactSerializer

    authentication_classes = [NoAuthentication]

    def post(self, request, *args, **kwargs):
        try:
            response = self.create(request, *args, **kwargs)

            if response.status_code == status.HTTP_201_CREATED:
                # 新しく作成されたレコードを取得
                new_contact = response.data
                ContactEmail(context={'contact_master': new_contact}).send(to=[settings.HOST_EMAIL])
            return response
        except Exception as e:
            logger.error("ContactHandler.post: %s" % e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)