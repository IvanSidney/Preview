//Типы данных Symbol

"use strict";

// const obj = {
//     'name': 'Test',
//     [Symbol("id")]: 1,
//     getId: function() {
//         return this[id];
//     }
// };

// // let id = Symbol("id");
// // // let id2 = Symbol("id");

// // // console.log(id == id2);

// // obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// // for (let value in obj) console.log(value);

const myAvesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
};

// Сторонний код библиотеки

myAvesomeDB.id = '32323323';

console.log(myAvesomeDB[Symbol.for("id")]);
console.log(myAvesomeDB);