'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);



// 1) Обичная функция: this = window, но если use strict - undefined!

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();

// 2) Контекст у методов объекта - сам объект!

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello' + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);
// 3) this в конструкторах и классах - это новый экземпляр объекта

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

//4) Ручная привязка This: call? apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});


const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;
console.log(double(4));