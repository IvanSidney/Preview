// Дескрипторы свойств и полезные методы объектов
// Атрибуты! их еще называют флагами( их всего три).
// writable         если этот параметр будет стоять в позиции true, то с-во в объекте можно изменить
//                  если false то только чтение.
// enumerable       если true, то с-во будет перечислятса в циклах, если нет то циклы будут его игнорить.
// configurable     если true, то с-во можно будет удалить, а атрибуты можно будет изменить,
//                  иначе делать этого нельзя. 

"use strict";

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    // birthday: '20/04/1993',
    [birthday]: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});



// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
