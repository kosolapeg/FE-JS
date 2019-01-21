'use strict';
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message; 

let getUsername=prompt("Введите логин");
if (getUsername===null) {
    message="Отменено пользователем";
} 
else if (getUsername!==ADMIN_LOGIN) {
    message="Доступ запрещен, неверный логин!";
} else {
 let getPassword=prompt("Введите пароль");
 if (getPassword===null) {
     message="Отменено пользователем!";
 } else if (getPassword!==ADMIN_PASSWORD) {
     message="Доступ запрещен, неверный пароль!";
 }
 else{
     message="Добро пожаловать!";
 }   
}
alert(message);

 