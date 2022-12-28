'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Enter your number!');

// const reg = /\d/;
// console.log(ans.match(reg));

// \d цифры    \D нецифры
// \w слова    \W  не слова
// \s пробелы  \S не пробелы

// i - вне зависимости от регистра
// g - global несколько вхождений
// m - многострочный режим

// console.log(ans.search(reg));

// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

const str = "My name is R2D2";
console.log(str.match(/\S/g));

