'use strict';

const inputUa = document.querySelector('#ua');
const inputUsd = document.querySelector('#usd');

inputUa.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUa.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "ERROR!!!!";
        }
    });

    // status
    // status Text
    // response
    // readyState


});