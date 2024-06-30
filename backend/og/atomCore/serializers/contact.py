from atomCore.models import ContactMaster
from rest_framework import serializers
from logging import getLogger

logger = getLogger(__name__)

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactMaster
        fields = (
            'last_name',
            'first_name',
            'last_name_furigana',
            'first_name_furigana',
            'email',
            "message",
            "tel",
        )

