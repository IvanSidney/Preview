// //Оператор опциональной цепочки (?.) ES11.
// Проверяет выражение слева от себя, и останавливает операцию если оно имеет занчение null или undefined.
// И при этом возвращает undefined как результат, происходит єто без ошибки

"use strict";

const box = document.querySelector('.box');
const bloc = document.querySelector('.bloc');

console.log(bloc);

// if (bloc) {
//     console.log(bloc.textContent);
// }

// console.log(bloc?.textContent);
// bloc?.textContent = '123';

// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
    console.log('Hello');
    }
};

userData.say();
userData.hey?.();
// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData?.skills?.js);