import typing
from pydantic import BaseSettings


class AtomConfig(BaseSettings):
    class Config:
        allow_mutation:False
    ENVIRONMENT:str
    SERVICE_NAME:str
    HOST_EMAIL :str
    HOST_EMAIL_PASSWORD :str
    DJANGO_SECRET_KEY:str
    DEBUG:bool
    ALLOWED_HOSTS :str
    ALLOWED_ADMIN:str
    STATIC_URL: str
    MEDIA_URL: str
    STATIC_ROOT: str
    MEDIA_ROOT: str

