from django.views.generic import TemplateView,FormView
import logging

logger = logging.getLogger(__name__)


class GuideHandler(TemplateView):
    template_name = 'atomCore/guide.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "UserGuide"
        context["subtitle"] = "ご利用案内"
        return context