from rest_framework import authentication
from rest_framework import exceptions
from logging import getLogger
logger = getLogger(__name__)

class NoAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        logger.info("skip authentication")
        return None
