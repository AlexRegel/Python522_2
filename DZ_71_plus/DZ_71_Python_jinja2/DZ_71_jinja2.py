# -- coding: utf8 --.
from jinja2 import Template

"""DZ_71. Задание:
1. Выведите список из пунктов меню. Представьте, 
что активный пункт - Главная (добавить к нему class="active"):

<ul>
<li><a href="/index" class="active">Главная</a></li>
<li><a href="/news">Новости</a></li>
<li><a href="/about">О компании</a></li>
<li><a href="/shop">Магазин</a></li>
<li><a href="/contacts">Контакты</a></li>
</ul>

2. Создайте макроопределение для шаблона полей 
ввода input в шаблоне html-документа по образцу:

<p><input type="text" name="firstname" placeholder="Имя" ></p>
<p><input type="text" name="lastname" placeholder="Фамилия" ></p>
<p><input type="text" name="address" placeholder="Адрес" ></p>
<p><input type="tel" name="phone" placeholder="Телефон" ></p>
<p><input type="email" name="email" placeholder="Почта" ></p>
"""
# ******************************
# 1.
lstMenuItems = [
    {"href": "/index", "mItems": "Главная"},
    {"href": "/news", "mItems": "Новости"},
    {"href": "/about", "mItems": "О компании"},
    {"href": "/shop", "mItems": "Магазин"},
    {"href": "/contacts", "mItems": "Контакты"}
]
# d - diction (словарь из списка словарей)
html = """
1.
<ul>
{% for d in lstMI: %}
    {% if d['mItems'] == "Главная": %}
        <li><a href="{{ d.href }}" class="active">{{ d["mItems"] }}</a></li>
        {% else: %}
        <li><a href="{{ d.href }}">{{ d["mItems"] }}</a></li>
    {% endif %}
{% endfor %}
</ul>
"""

tm = Template(html)
htm = tm.render(lstMI=lstMenuItems)

print(htm)

# ******************************
# 2.
mcr = """
{% macro input_func(name, placeholder, type='text') %}
    <input type="{{ type }}" name="{{ name }}" placeholder="{{ placeholder }}">
{% endmacro %}
2.
<p>{{ input_func(name='firstname', placeholder='Имя') }}</p>
<p>{{ input_func(name='lastname', placeholder='Фамилия') }}</p>
<p>{{ input_func(name='address', placeholder='Адрес') }}</p>
<p>{{ input_func('phone', 'Телефон', 'tel') }}</p>
<p>{{ input_func('email', 'Почта', 'email') }}</p>
# Вывод с явным указанием всех аргументов функции макроопределения:
<p>{{ input_func(type='tel', name='phone', placeholder='Телефон') }}</p>
"""

tm = Template(mcr)
m_htm = tm.render()

print(m_htm)
