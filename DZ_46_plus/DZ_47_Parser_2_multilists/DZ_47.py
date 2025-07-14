# DZ_47 (html_10_JS_2). Задание:
# Реализовать парсинг данных с нескольких страниц любого интернет ресурса (сайта на выбор)
# с использованием объектно-ориентированного подхода.
# https://www.santech.ru/catalog/259/261/
# https://azbyka.ru/otechnik/
from bs4 import BeautifulSoup
import requests
import csv

# # Функциональный подход
# def get_html(url):
#     r = requests.get(url)
#     return r.text
#
#
# def write_csv(dict_data):
#     with open('catalig_list.csv', 'a') as f:
#         writer = csv.writer(f, delimiter=";", lineterminator="\r")
#         writer.writerow([dict_data['name_title'],
#                          dict_data['url'],
#                          ])
#
#
# def get_data(html):
#     soup = BeautifulSoup(html, "lxml")
#     ss_mt_20 = soup.find_all("div", class_="ss-mt-20")
#     for ss_catalog_product in ss_mt_20:  # ss-catalog-product
#         catalog_product = ss_catalog_product.find_all('div', class_="ss-catalog-product")
#         if len(catalog_product) != 0:
#             for ss__product_title in catalog_product:  # ss-catalog-product__title
#                 # div_product_title = ss__product_title.find_all("div", class_="ss-catalog-product__title")
#                 a_product_title = ss__product_title.find("a").find("img").get("alt")  # .get_text()
#                 url_product_title = ss__product_title.find("a")["href"]  # .get("href")
#                 # img_title = a_product_title.find("img")
#                 # title = img_title.get("alt")
#                 print(a_product_title)  # title
#                 print(url_product_title)
#                 dict_data = {
#                     "name_title": a_product_title,
#                     "url": url_product_title
#                 }
#                 write_csv(dict_data)
#
#
# # "https://www.santech.ru/catalog/259/261/?page=2"
# def main():
#     for i in range(1, 5):
#         url = f"https://www.santech.ru/catalog/259/261/?page={1}"
#         get_data(get_html(url))
#
#
# if __name__ == '__main__':
#     main()
# # Функциональный подход

from parser_47 import Parser


def main():
    for i in range(1, 5):
        url = f"https://www.santech.ru/catalog/259/261/?page={i}"
        pars = Parser(url, "pipes.txt")  #
        pars.run()


if __name__ == '__main__':
    main()
