'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let password;

do {
  password = prompt('Введите Ваш пароль');

  if (passwords.includes(password)) {
    alert('Добро пожаловать!');
    break;
  } else {
    if (password === null) break;
    else {
      attempts = attempts - 1;
      if (attempts === 0) {
        alert('У вас закончились попытки, аккаунт заблокирован!');
      } else {
        alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
      }
    }
  }
} while (attempts > 0);
