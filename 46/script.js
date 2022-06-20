//События на мобильных устройствах

"use strict";
//  touchstart   при возникновении касания к этому элементу
//  touchmove    если палец при касании к элементу начинает двигатся по нему, то при каждом смещении пальца будет
//               срабатывать
//  touchend     как только палец оторвался от элемента, команда выполнилась
//  touchenter   срабатывает когда ведеш пальцем по экрану и попадаеш на какой-то элемент, на который повешено это
//               событие
//  touchleave   когда палец ушол за пределы этого элемента
//  touchcancel  точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        // console.log(e.touches);
        // console.log(e.targetTouches);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });
});

//Дополнительные свойства у обьекта события (е) - (event) (3 саміх распространенных)
//touches           выдает список всех пальцев которые сейчас взаимодействуют с экраном
//targetTouches     все пальци, которые взаимодействуют конкретно с этим элементом
//changedTouches    попростому это список паальцев которые учавствуют в этом событии,
//                  например если это событие touchend, то список будет содержать палец
//                  который был убран, даже если остальные пальцы у нас на экране
