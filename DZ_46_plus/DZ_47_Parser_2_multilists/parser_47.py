from bs4 import BeautifulSoup
import requests


class Parser:
    html = ""
    res = []

    def __init__(self, url, path):
        self.url = url
        self.path = path

    def get_html(self):
        req = requests.get(self.url).text
        self.html = BeautifulSoup(req, 'lxml')

    def parsing(self):
        ss_mt_20 = self.html.find_all("div", class_="ss-mt-20")
        for ss_catalog_product in ss_mt_20:  # ss-catalog-product
            catalog_product = ss_catalog_product.find_all('div', class_="ss-catalog-product")
            if len(catalog_product) != 0:
                for ss__product_title in catalog_product:
                    a_product_title = ss__product_title.find("a").find("img").get("alt")  # .get_text()
                    url_product_title = ss__product_title.find("a")["href"]  # .get("href")
                    url_all = "https://www.santech.ru" + url_product_title
                    razmer = ss__product_title.find('div', class_='ss-catalog-product__variants').find('div',
                        class_='ss-catalog-product-item js-order__card').find('div',
                        class_='ss-catalog-product-item__left').find('div',
                        class_='ss-catalog-product-item__info').find('div',
                        class_='ss-catalog-product-item__title').find('a').text
                    price = ss__product_title.find('div', class_='ss-catalog-product__variants').find('div',
                        class_='ss-catalog-product-item js-order__card').find('div',
                        class_='ss-catalog-product-item__left').find('div',
                        class_='ss-catalog-product-item__info').find('div',
                        class_='ss-catalog-product-item__block ss-js-price').find('meta',
                        {"itemprop": "price"})['content']
                    price_text = price + ' руб.'
                    # print('Название/сплав:', a_product_title)  # title
                    # print('Типоразмер:', razmer)
                    # print('Цена:', price_text)
                    # print('url:', url_all)
                    # print()
                    self.res.append({
                        'title_alloy': a_product_title,
                        'standard_size': razmer,
                        'price': price_text,
                        'href': url_all
                    })
                # print(self.res)

    def save(self):
        with open(self.path, 'w') as f:
            i = 1
            for item in self.res:
                f.write(f"Изделие № {i}\n\nНазвание/сплав: {item['title_alloy']}\n"
                        f"Типоразмер: {item['standard_size']}\nЦена: {item['price']}\nСсылка: "
                        f"{item['href']}\n\n{'*' * 40}\n")
                i += 1

    def run(self):
        self.get_html()
        self.parsing()
        self.save()
