'use strict';
// Основы ООП(обьектно ориентированое програмирование), прототипно - ориентированое наследие

// let str = "some";
// let strObj = new String(str);

// // console.log(str);
// // console.log(strObj);

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;

Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
jonh.sayHello();