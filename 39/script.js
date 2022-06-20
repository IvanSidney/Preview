"use strict";
const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // e.target.remove();
    // console.log('Click');
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btn.addEventListener('click', ()=> {
//     alert('2222Click');
// });
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});   
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {     // Отмена стандартного поведения события!!!
    event.preventDefault();

    console.log(event.target);
});