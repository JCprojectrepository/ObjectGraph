from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse
from django.views.generic import TemplateView,FormView,CreateView
import mimetypes
import shutil
import uuid
from django.http import HttpResponseBadRequest
import logging

logger = logging.getLogger(__name__)


class IndexHandler(TemplateView):
    template_name = 'atomCore/index.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["is_top"] = True
        #context["trial_form"] = TrialForm
        #context["private_document_download_form"] = DocumentDownloadForm
        return context