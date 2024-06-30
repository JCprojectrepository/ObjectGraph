from django.views.generic import TemplateView,FormView
import logging

logger = logging.getLogger(__name__)


class ReserveHandler(TemplateView):
    template_name = 'atomCore/reserve.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "予約方法"
        return context