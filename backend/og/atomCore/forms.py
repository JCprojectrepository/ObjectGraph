from atomCore.models import ContactMaster
from django import forms

class ContactForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control form-control-sm tazugane-light'
    class Meta:
        model = ContactMaster
        fields = ('name',"furigana",'email',"tel",'text')
