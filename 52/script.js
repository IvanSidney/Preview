// Дескрипторы свойств и полезные методы объектов
// Атрибуты! их еще называют флагами( их всего три).
// writable         если этот параметр будет стоять в позиции true, то с-во в объекте можно изменить
//                  если false то только чтение.
// enumerable       если true, то с-во будет перечислятса в циклах, если нет то циклы будут его игнорить.
// configurable     если true, то с-во можно будет удалить, а атрибуты можно будет изменить,
//                  иначе делать этого нельзя. 

"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'name', {writable: false});
user.name = 'asfdas';