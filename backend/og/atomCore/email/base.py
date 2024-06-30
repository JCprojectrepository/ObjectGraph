# templated_mailはDjango標準
from templated_mail.mail import BaseEmailMessage
from django.conf import settings

class EmailManager(BaseEmailMessage):

    def send(self, to, *args, **kwargs):
        self.render()
        self.to = to
        self.cc = kwargs.pop('cc', [])
        self.bcc = kwargs.pop('bcc', [])
        self.reply_to = kwargs.pop("reply_to", [])
        self.from_email =kwargs.pop(
            'from_email', 
            "Code College <" + settings.HOST_EMAIL + ">"
        )
        super(BaseEmailMessage, self).send(*args, **kwargs)