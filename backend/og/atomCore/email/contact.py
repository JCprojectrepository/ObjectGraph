from django.contrib.auth.tokens import default_token_generator
from templated_mail.mail import BaseEmailMessage
from django.conf import settings
from atomCore.email.base import EmailManager
from logging import getLogger

logger = getLogger(__name__)


class ContactEmail(EmailManager):
    template_name = 'email/contact.html'

    def get_context_data(self):
        context = super().get_context_data()
        contact_master = context.get('contact_master')
        context['contact_master'] = contact_master
        return context
