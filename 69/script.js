'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecord => {
    console.log(mutationRecord);
});

observer.observe(box, {
    childList: true
});