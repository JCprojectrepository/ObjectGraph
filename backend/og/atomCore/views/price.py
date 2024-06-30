from django.views.generic import TemplateView
import logging

logger = logging.getLogger(__name__)

class PriceHandler(TemplateView):
    template_name = 'atomCore/price.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "Price"
        context["subtitle"] = "ご利用料金"
        return context