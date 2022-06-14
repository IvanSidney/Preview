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

// let num = 20;

// function showFirstMessege(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessege("Hello World!!!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();

// console.log(anotherNum);

// const logger = function () {
//     console.log('Hello!!!');
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// convert(500, usdCurr);
// convert(500, eurCurr);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// const str = "text";
// // const arr = [1, 2, 3];

// console.log(str.toLocaleUpperCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// // console.log(logg.slice(6, 11));
// // console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));
// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));
// function first() {
//     setTimeout(function() {
//     // Do somethin
//     console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!!!');
// }

// learnJS('JavaSkript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
        
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);

// const arr = [11, 32, 3, 61, 8, 10];
// arr.sort(campareNum);
// console.log(arr);

// function campareNum(a, b) {
//     return a - b;
// }

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // // arr.pop();
// // arr.push(10);

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// let a = 5,
//     b = a;

//     b = b +5;
//     console.log(b);
//     console.log(a);

    // const obj = {
    //     a: 5,
    //     b: 1
    // };
//     const copy = obj;  // ССЫЛКА!!!!!!!
//     copy.a = 10;
//     console.log(copy);
//     console.log(obj);

    function copy(mainObj) {
        let objCopy = {};

        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }
        return objCopy;
    }

    const numbers = {
        a: 2,
        b: 5,
        c: {
            x: 7,
            y: 4
        }
    };
    const newNumbers = copy(numbers);

    newNumbers.a = 10;
    newNumbers.c.x = 10;

    // console.log(newNumbers);
    // console.log(numbers);

    const add = {
        d: 17,
        e: 20
    };

    const clone = Object.assign({}, add);
    clone.d = 20;
    // console.log(add);
    // console.log(clone);

    const oldArray = ['a', 'b', 'c'];
    const newArray = oldArray.slice();
    newArray[1] = 'sadaf';
    console.log(newArray);
    console.log(oldArray);

    const video = ['youtube', 'vimeo', 'rutube'],
          blogs = ['worldpress', 'livejournal', 'blogger'],
          internet = [...video, ...blogs, 'vk', 'facebook'];
          console.log(internet);

    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    const num = [2, 3, 7];

    log(...num);

    const array = ["a", "b"];

    const newAarey = [...array];
    console.log(newAarey);

    const q = {
        one: 1,
        two: 2
    };

    const newObj = {...q};
    console.log(newObj);