from django.db import IntegrityError
from django.shortcuts import render, redirect
from .models import GtPlanets
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate


# Главная страница
def index(request):
    projects = GtPlanets.objects.all()
    return render(request, 'gt_planets/index.html', {'projects': projects})


# Регистрация пользователя
def register_user(request):
    if request.method == 'GET':
        return render(request, 'gt_planets/registeruser.html', {'form_reg': UserCreationForm()})
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('index')
            except IntegrityError:
                return render(request, 'gt_planets/registeruser.html',
                              {'form_reg': UserCreationForm(),
                               'error': 'Такое имя пользоватедя уже существует. Задайте пароль.'})
        else:
            return render(request, 'gt_planets/registeruser.html',
                          {'form_reg': UserCreationForm(), 'error': 'Пароли не совпадают'})


# Выход
def exitapp_user(request):
    if request.method == "POST":
        logout(request)
        return redirect('index')


# Авторизация пользователя
def login_user(request):
    if request.method == "GET":
        return render(request, 'gt_planets/loginuser.html', {'form_auth': AuthenticationForm()})
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'gt_planets/loginuser.html',
                          {'form_auth': AuthenticationForm(), 'error': 'Неверные данные для входа'})
        else:
            login(request, user)
            return redirect('index')
