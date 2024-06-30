from atomProject.common.conf.base import AtomConfig

# setup config
config = AtomConfig()

ENVIRONMENT = config.ENVIRONMENT
SERVICE_NAME = config.SERVICE_NAME
HOST_EMAIL  = config.HOST_EMAIL
HOST_EMAIL_PASSWORD  = config.HOST_EMAIL_PASSWORD
SECRET_KEY = config.DJANGO_SECRET_KEY
DEBUG = config.DEBUG
ALLOWED_ADMIN = config.ALLOWED_ADMIN
STATIC_URL = config.STATIC_URL
MEDIA_URL = config.MEDIA_URL
STATIC_ROOT = config.STATIC_ROOT
MEDIA_ROOT = config.MEDIA_ROOT

# mail
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
DEFAULT_FROM_EMAIL = HOST_EMAIL
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = HOST_EMAIL
EMAIL_HOST_PASSWORD = HOST_EMAIL_PASSWORD
EMAIL_USE_TLS = True