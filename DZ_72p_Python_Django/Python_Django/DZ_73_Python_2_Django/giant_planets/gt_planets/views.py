from django.shortcuts import render
from .models import GtPlanets


def index(request):
    projects = GtPlanets.objects.all()
    return render(request, 'gt_planets/index.html', {'projects': projects})

