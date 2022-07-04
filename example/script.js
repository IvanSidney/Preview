"use strict";


label: for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(j);
        if (j == 2) break label;
    }
}