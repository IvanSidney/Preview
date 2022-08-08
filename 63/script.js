const now = new Date();

console.log(now.setHours(18, 40));
console.log(now);


// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 10000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл відпрацював за ${end - start} милисекунд`);