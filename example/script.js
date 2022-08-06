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
// let arr1 = [12, 33, 34, 15, 98];
// let arr2 = [152, 353, 354, 155, 958];

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

// console.log(arrayPlusArray(arr1, arr2));
// let n = 123456789;

// function descendingOrder(n) {
//     let arr = Array.from(n.toString());
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
//     arr.sort(function (a, b) {
//         return b - a
//     });
//     let sortNum = parseInt(arr.join(''));
//     return sortNum;
// }

// descendingOrder(n);
// console.log(sortNum);
// let arr = [0, 4, 0, 8];
// let arrSize = 4;


// function max(arr, arrSize) {
//     for (let i = 0, j = 2; j < arrSize; i++, j++) {
//         if (arr[i] == 0 && arr[j] == 0) {
//             return arr[i + 1];
//         }
//     }
//     return -1;
// }

// let res = max(arr, arrSize);
// console.log(res);

// let n;
// let a = [];
// let i = 0;
// let y;
// let u;

// do {
//     n = +prompt("введи число");

//     if (n % 2 !== 0) {
//         console.log(i);
//         a[i] = n;
//         i++;
//         console.log(a[i]);
//     }
// } while (n !== 0);

// function isIsogram(str) {
//     if ("") {
//         return true;
//     }
//     let lowerCase = str.toLowerCase().slice();
//     for (let i = 0; i < lowerCase.length; i++) {
//         for (let j = i + 1; j < lowerCase.length; j++) {
//             if (lowerCase[i] == lowerCase[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// let str = "Der";
// console.log(isIsogram(str));
// function SeriesSum(n) {
//     if (n == 0) {
//         return "0.00";
//     }
//     if (n == 1) {
//         return "1.00";
//     }
//     let result = 1;
//     for (let k = 1, i = 0; k < n; k++, i += 3) {
//         let j = 1 / (4 + i);
//         result += j;
//     }
//     return result.toFixed(2);
// }
// console.log(SeriesSum(4));


// function tr(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a) {
//         return true;
//     }
//     return false;
// }
// let a = 10,
//     b = 3,
//     c = 10;

// console.log(tr(a, b, c));
// let s = "mgalkjsdfglkjbaskdmxyz";

// function printerError(s) {
//     let arr = s.split('');
//     let printerColorsUsed = arr.length;
//     let arr2 = arr.filter(erors);
//     let printerErrors = arr2.length;

//     function erors(s) {
//         for (let i = 0; i < 1; i++) {
//             if (s.charCodeAt() >= 110 && s.charCodeAt() <= 122) {
//                 return true;
//             }
//         }
//         return false;

//     }
//     return printerErrors + "/" + printerColorsUsed;
// }
// console.log(printerError(s));
// let a = [1, 2, 2];
// let b = [2];

// function arrayDiff(a, b) {
//     if (a.length == 0) {
//         return [];
//     }
//     if (b.length == 0) {
//         return a;
//     }
//     for (let j = 0; j < b.length; j++) {
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] == b[j]) {
//                 a.splice(i, 1);
//                 i--;
//             }
//         }

//     }
//     return a;
// }


// console.log(arrayDiff(a, b));

// let data = [
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20]
// ];
// let out = [];
// for (let i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] >= 7) {
//         out.push('Senior');
//         continue;
//     }
//     out.push('Open');
// }
// console.log(out);
// // console.log(arr1);

let arr = [1, 1, 1, 2, 1, 1];

function findUniq(arr) {
    const arrSort = arr.sort();
    return (arrSort[0] == arrSort[1]) ?
        arrSort[arrSort.length - 1] : (arrSort[0] == arrSort[arrSort.length - 1]) ?
        arrSort[1] : arrSort[0];

}
console.log(findUniq(arr));