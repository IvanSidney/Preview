"use strict";
const myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2][`number`]);

const score = {
    ivan: 0,
    kolya: 0,
    tom: 0
};
score.ivan = 2;
console.log(score);