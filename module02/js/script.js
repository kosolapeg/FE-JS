'use strict';

let userInput = 0;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число');
  console.log(userInput);
  if (userInput === null) {
    break;
  } else {
    let validNumber = Number(userInput);

    if (Number.isNaN(validNumber)) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      numbers.push(validNumber);
    }
  }
} while (true); // <---- ты уже сделала выход из цыкла в 10-11 строке, можно оставить while (true)

if (numbers.length > 0) { 
  for (const number of numbers) { // <---- массив называй в множетсвенном числе, а его элементы - в единственном, так удобней читать/понимать код
     total = total + number;
  }
}
alert(`Общая сумма чисел равна ${total}`);
