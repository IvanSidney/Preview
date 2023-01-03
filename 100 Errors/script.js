'use strict';

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('Click!!!');
    });
} catch (e) {
    console.log(e);
}

console.log('Normal');