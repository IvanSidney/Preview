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

// const hamburge = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburge === 3 && (cola === 2 || fries === 3) && nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим!!!');
// }

// console.log(hamburge === 3 && cola === 2 || fries === 3 && nuggets);

// let jonReport, alexReport, samReport, mariaReport = 'done';

// console.log(jonReport || alexReport || samReport || mariaReport);

// console.log(!0);
// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log(hamburger || cola || fries === 3 || nuggets);
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log(fries === 3);
// }

// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;  
// // }
// // while (num < 55);
 
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i =0; i < 3; i++) {
//     console.log(i);
//     for (let j =0; j < 3; j++) {
//         console.log(j);
        
//     }
// }

// let results = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
   
//     for ( let j =0; j < i; j++) {
//         results += "*";
//     }
    
//     results += '\n';
// } 

// console.log(results);

//  first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if(k === 2) break first;
//             console.log(`Third level: ${k}`);
            
//         }
//     }
// }

let num = 20;

function showFirstMessege(text) {
    console.log(text);
    let num = 10;
}

showFirstMessege("Hello World!!!");
console.log(num);