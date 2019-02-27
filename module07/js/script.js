'use strict';

/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/

const order = {
  bread: 10,
  apples: 25,
  chicken: 60,
  milk: 15,
  cheese: 40,
};

console.log(Object.values(order).reduce((acc, item) => acc + item, 0)); // 150
