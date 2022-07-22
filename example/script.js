// let input = prompt("Enter a sentence:");

// let wordsCounter = 0;
// let longWord = "";
// for (let i = 0, code, flag; i < input.length; i++) {
//     code = input.charCodeAt(i);
//     flag = false;

//     while (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
//         code = input.charCodeAt(++i)
//         flag = true;
//         if (flag) {
//             longWord += `${input[i]}`;
//             console.log(longWord);
//         }
//     }

//     if (flag) {
//         wordsCounter++;
//     }
// }

// console.log(wordsCounter);



// function wow(a) {
//     a = a + 1;

//     return a;
// }

// let a = 10;

// console.log(wow(a));


// let min = function () {
//     for (let i = 0; i < list.length; i++) {
//         for (let j = 1; j < list.length; j++) {
//             if (list[j] < list[i]) {
//                 list[0] = list[j];
//             }
//         }
//     }

//     return list[0];
// };

// console.log(min(list));
// let list = [-52, 56, 30, 29, -54, 0, -110];


// var min = function (list) {
//     let minArr = [];
//     for (let i = 0; i < list.length; i++) {
//         for (let j = 1; j < list.length; j++) {
//             if (list.length == 1) {
//                 minArr[0] = list[0]
//             }
//             if (list[i] < list[j] && list[i] < minArr[0]) {
//                 minArr[0] = list[i]
//             } else {
//                 minArr[0] = list[j]
//             }
//         }
//     }
//     return minArr[0];
// }

// var max = function (list) {
//     let maxArr = [];
//     for (let i = 0; i < list.length; i++) {
//         for (let j = 1; j < list.length; j++) {
//             if (list.length == 1) {
//                 maxArr[0] = list[0];
//             }
//             if (list[i] > list[j]) {
//                 maxArr[0] = list[i]
//             } else {
//                 maxArr[0] = list[j]
//             }
//         }
//     }

//     return maxArr[0];
// }
// console.log(min(list));
// console.log(max(list));

// function strRand() {
//     let result = [];
//     let words = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//     let maxPosition = words.length - 1;
//     let maxI = Math.floor(Math.random() * 10);
//     for (let i = 0; i < maxI; ++i) {
//         let position = Math.floor(Math.random() * maxPosition);
//         let abc = words.substring(position, position + Math.floor(Math.random() * 5));
//         let num123 = Math.floor(Math.random() * 1000);
//         let item = Math.floor(Math.random() * 2);
//         result[i] = item == 1 ? abc : num123;
//     }

//     return result;
// }

// // console.log(strRand());
// // console.log(Math.floor(Math.random() * 10));

// let l = strRand();


// function filter_list(l) {

//     let arr = l.flatMap(x => Number.isFinite(x));
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (!arr[i]) {
//             l.splice(i, 1);
//         }
//     }

//     return l;
// }

// filter_list(l);


// console.log(l);
let arr1 = [12, 33, 34, 15, 98];
let arr2 = [152, 353, 354, 155, 958];

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

console.log(arrayPlusArray(arr1, arr2));