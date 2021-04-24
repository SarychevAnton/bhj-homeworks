'use strict'

const timer = document.getElementById('timer');

const timerCallback = () => {
    if (timer.textContent > 0) {
        timer.textContent -= 1;
    } else {
        //alert('Вы победили в конкурсе!');
        document.location.assign('https://yandex.ru/images/search?from=tabbar&nomisspell=1&text=%D1%83%D1%80%D0%B0%D0%B0%D0%B0%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0&source=related-0&pos=2&rpt=simage&img_url=https%3A%2F%2Fsun9-62.userapi.com%2Fimpf%2Fc630917%2Fv630917960%2F411da%2Fr1bZNcpUoOw.jpg%3Fsize%3D333x128%26quality%3D90%26proxy%3D1%26sign%3D11228ea6f0062fd8a8877dd25332607b');
        clearInterval(timerId);
    }
};

const timerId = setInterval(timerCallback,1000);