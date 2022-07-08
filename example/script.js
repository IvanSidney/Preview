"use strict";
// let user = {};
// user["8:30"] = "Вставай";
// user.surname = "Smit";
// // user.name = "Petro";
// // delete user.name;

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;


// for (let key in salaries) {

//     sum += salaries[key];
// }

// console.log(sum);

// // function  salariesSum(salaries) {
//     for (let key in salaries) {
//         // console.log(key);
//         console.log(salaries[key]);
//     }
// // }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
// };

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);


// let user = {
//     name: "Іван"
// };
// let admin = {
//     name: "Адмін"
// };

// function sayHi() {
//     alert(this.name);
// }

// // використовуємо одну і ту ж функцію у двох об’єктах
// user.f = sayHi;
// admin.f = sayHi;

// // виклики функцій, приведені нижче, мають різні this
// // "this" всередині функції являється посиланням на об’єкт "перед крапкою"
// user.f(); // Іван  (this == user)
// admin.f(); // Адмін  (this == admin)

// admin['f']();
// Створіть об’ єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості
// об’ єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
//     mul() множить збережені значення і повертає результат.

// let calculator = {
//     read() {
//         this.a = +prompt(`Enter number 1`);
//         this.b = +prompt(`Enter number 2`);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }

// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Ланцюг викликів
// важливість: 2
// Існує об’ єкт ladder, що дозволяє підійматися вгору - вниз:

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // показує поточний крок
        alert(this.step);
        return this;
    },
};
// Тепер, якщо нам потрібно зробити кілька викликів послідовно,
//     можна зробити це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Змініть код up, down і showStep так,
// щоб зробити доступним ланцюг викликів, наприклад:

ladder.up().up().up().up().up().down().showStep().down().showStep(); // shows 1 then 0