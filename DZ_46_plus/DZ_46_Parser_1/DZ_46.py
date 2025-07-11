# DZ_46 (html_9_JS_1). Задание:
# Реализовать парсинг данных из любого интернет ресурса (сайта на выбор)
# с однотипными данными и сохранить их в формате csv.
# https://www.santech.ru/catalog/259/261/
# https://azbyka.ru/otechnik/
from bs4 import BeautifulSoup
import requests
import csv


# r = requests.get("https://www.santech.ru/catalog/259/")
# print(r.headers['Set-Cookie'])  # r.headers['Set-Cookie'] - обращение, как к словарю по ключу.
# print(r.content)  # Получаем байтовую строку b' \n<!DOCTYPE html>\n<html lang="ru" data-temp_param_url="1751902242">..
# print(type(r.text))

# Предварителная проверка после импорта и инсталляции пакетов ----------------------------
# def get_html(url):
#     r = requests.get(url)
#     return r.text
#
#
# def get_data(html):
#     soup = BeautifulSoup(html, "lxml")  # "html.parser" - встроенный парсер
#     g1 = soup.find("h1", class_="ss-category-title").text
#     return g1
#
#
# def main():
#     url = "https://www.santech.ru/catalog/259/"
#     print(get_data(get_html(url)))
#
#
# if __name__ == '__main__':
#     main()
# Предварителная проверка (окончание) --------------------------------------------------------

def get_html(url):
    r = requests.get(url)
    return r.text


def write_csv(dict_data):
    with open("otechnik.csv", "a") as file:  # encoding="utf-8"
        wt = csv.writer(file, delimiter=";", lineterminator="\r")
        wt.writerow([dict_data["№"], dict_data["name"], dict_data["url"]])


def get_data(html):
    soup = BeautifulSoup(html, "lxml")  # "html.parser" - встроенный парсер, вместо "lxml"
    tem_kat = soup.find_all("ul", id="index_grops_top")[0]  # class_="widget-item"
    points = tem_kat.find_all("li")
    i = 1
    for point in points:
        name = point.find("a").text.strip()
        url = point.find("a").get("href")
        url_all = "https://azbyka.ru" + url
        # print(i, ".", f"{name}: ", sep="", end="\n")
        dict_data = {"№": i, "name": name, "url": url_all}
        i += 1
        write_csv(dict_data)  # print(dict_data)


def main():
    url = "https://azbyka.ru/otechnik/"
    get_data(get_html(url))


if __name__ == '__main__':
    main()
