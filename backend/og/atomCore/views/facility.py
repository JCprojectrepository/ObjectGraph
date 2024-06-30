from django.views.generic import TemplateView,FormView
import logging

logger = logging.getLogger(__name__)


class FacilityHandler(TemplateView):
    template_name = 'atomCore/facility.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "Facility"
        context["subtitle"] = "施設概要"
        return context