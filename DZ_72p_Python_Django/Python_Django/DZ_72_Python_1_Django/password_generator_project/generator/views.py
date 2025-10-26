from django.shortcuts import render
from django.http import HttpResponse
import random


def home(request):
    lst = list(range(6, 15))
    print(lst)
    return render(request, "generator/home.html",
                  {"lst": lst})


def password(request):
    char = [chr(i) for i in range(97, 123)]

    if request.GET.get('uppercase'):
        char.extend([chr(i) for i in range(65, 91)])

    if request.GET.get('number'):
        char.extend([chr(i) for i in range(48, 57)])

    if request.GET.get('special'):
        char.extend([chr(i) for i in range(33, 47)])

    print(char)
    length = int(request.GET.get('length'))
    psw = ""
    for i in range(length):
        psw += random.choice(char)
    return render(request,
                  "generator/password.html",
                  {'password': psw})


def info(request):
    ptext = """Для генерации пароля выберите количество символов
    в выпадающем списке. Затем отметьте галочки,
    соответствующие изменению сложности пароля:
    Верхний регистр, цифры и/или спецсимволы. 
    После установки опций кликните по клавише 
    "Сгенерировать пароль"."""
    footertext = "Автор: Сергей Хромов"
    copyright = "Copyright"
    charcop = chr(169)

    return render(request,
                  "generator/info.html",
                  { 'info': ptext,
                            'infofoot': footertext,
                            'copyright': copyright,
                            'charcop': charcop})
