from django.urls import path
from . import views

urlpatterns = [
    path('', views.studygtplanets, name='studygtplanets'),
    path('<int:studygtplanets_id>', views.idtion, name='idtion'),
]
