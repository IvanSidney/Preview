"use strict";

// if (4 == 4) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = '50';

// // if (num < 49) {
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log('Много');
// // } else {
// //     console.log('Ok');
// // }

// // (num === 50) ? console.log('Ok') : console.log('Error');

// switch (num) {
//     case '49':
//         console.log('Error');
//         break;
//     case '100':
//         console.log('Error');
//         break;
//     case '50':
//         console.log('Ok!!');
//         break;
//     default:
//         console.log('Не в этот раз!');
//         break;        
// }

// const hamburge = true;
// const fries = true;

// if (hamburge && fries) {
//     console.log('Я сыт!');
// } else {
//     console.log('Я голоден!!!');
// }

// const hamburge = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburge === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(1 && 'dfff');

// if (hamburge === 3 && cola ===1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!!!');
// }


// console.log((hamburge && fries));

const hamburge = 3;
const fries = 0;
const cola = 0;

if (hamburge || cola || fries) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!!!');
}
