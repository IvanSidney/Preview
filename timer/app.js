window.addEventListener('DOMContentLoaded', () => {
    let startButton = document.querySelector('.start'),
        stopButton,
        setButton = document.querySelector('.settings'),
        setButtonImg = document.querySelector('.settings').childNodes[1],
        resetButton = document.querySelector('.settings, .set'),
        ring = document.querySelector('.ring'),
        secondInterval;

    // function toggleBilling() {
    //     var billingItems = document.querySelectorAll('input[type="text"]');
    //     for (var i = 0; i < billingItems.length; i++) {
    //         billingItems[i].disabled = !billingItems[i].disabled;
    //     }
    // }
    // toggleBilling();


    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;

        } else {
            return num;
        }
    }

    function promptTime() {
        let promptMinutes,
            promptSeconds;
        do {
            promptMinutes = prompt('Enter minutes, max 98');
        }
        while (promptMinutes >= 99 || promptMinutes === null || promptMinutes === '');
        do {
            promptSeconds = prompt('Enter seconds, max 99');
        }
        while (promptSeconds >= 100 || promptSeconds === null || promptSeconds === '');
        if (promptSeconds > 59) {
            promptMinutes++;
            promptSeconds -= 60;
        }

        setMinutes(promptMinutes);
        setSeconds(promptSeconds);
        setButtonImg.src = 'images/check.svg';
        setButton.classList.add('set');
        setButton.removeEventListener('click', promptTime);
        resetButton.addEventListener('click', resetTimer);
        if (startButton.classList.contains('stop')) {
            startButton.classList.toggle('stop');
        }
        startButton.innerHTML = 'start';
        if (ring.classList.contains('ending')) {
            ring.classList.remove('ending');
        }
        startButton.addEventListener('click', startTimer);
        cler();

    }

    function resetTimer() {
        setMinutes(0);
        setSeconds(0);
        setButtonImg.src = 'images/gear.svg';
        setButton.classList.remove('set');
        resetButton.removeEventListener('click', resetTimer);
        setButton.addEventListener('click', promptTime);
        if (startButton.classList.contains('stop')) {
            startButton.classList.toggle('stop');
        }
        if (ring.classList.contains('ending')) {
            ring.classList.remove('ending');
        }
        startButton.innerHTML = 'start';
        cler();
        startButton.addEventListener('click', startTimer);
    }
    setButton.addEventListener('click', promptTime);

    startButton.addEventListener('click', startTimer);

    function startTimer() {
        if (getMinutes() == 0 && getSeconds() == 0) {
            return;
        }
        startButton.innerHTML = 'stop';
        startButton.classList.add('stop');
        startButton.removeEventListener('click', startTimer);
        secondInterval = setInterval(updateSeconds, 1000);
        updateSeconds();
        stopButton = document.querySelector('.stop');
        stopButton.addEventListener('click', stopTimer);
    }

    function cler() {
        clearInterval(secondInterval);
    }

    function updateSeconds() {

        let t = getSeconds();
        let a = getMinutes();
        t--;
        if (t < 0) {
            t = 59;
            a -= 1;
            setMinutes(a);
        }
        if (t <= 0 && a <= 0) {
            cler();
            ring.classList.add('ending');
            let al = () => {
                alert('End!!! Rocket launch!!!!!');
            };
            setTimeout(al, 500);
        }
        setSeconds(t);
    }

    function stopTimer() {
        cler();
        stopButton.removeEventListener('click', stopTimer);
        if (startButton.classList.contains('stop')) {
            startButton.classList.toggle('stop');
        }
        if (ring.classList.contains('ending')) {
            ring.classList.remove('ending');
        }
        startButton.innerHTML = 'start';
        startButton.addEventListener('click', startTimer);

    }

    function setMinutes(a) {
        let minutes = document.querySelector('.minutes').childNodes[1];
        minutes.value = getZero(a);
    }

    function setSeconds(a) {
        let seconds = document.querySelector('.seconds').childNodes[1];
        seconds.value = getZero(a);
    }

    function getMinutes() {
        let minutes = document.querySelector('.minutes').childNodes[1];
        return minutes.value;
    }

    function getSeconds() {
        let seconds = document.querySelector('.seconds').childNodes[1];
        return seconds.value;
    }
});