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
} while (userInput !== null);

if (numbers.length > 0) {
  for (const value of numbers) {
    total = total + value;
  }
}
alert(`Общая сумма чисел равна ${total}`);
