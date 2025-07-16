"use strict";

let cost = prompt("Введите стоимость покупки");
let discount;
let cost_all;
let print_discount;
if (cost > 500 & cost <= 1000) {
    discount = 0.03;
    cost_all = cost - cost * discount;
}
else if (cost > 1000) {
    discount = 0.05;
    cost_all = cost - cost * discount;
}
else {
    discount = 0;
    cost_all = cost;
}

print_discount = discount * 100;
console.log("Стоимость покупки без скидки: ", cost, "руб");
console.log("Скидка: ", print_discount, '%');
console.log("Итоговая стоимость: ", cost_all, "руб");

