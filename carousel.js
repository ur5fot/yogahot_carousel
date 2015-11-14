/**
 * Created by ur5fot on 13.11.15.
 */

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');
    var width = carousel.querySelector('li').offsetWidth; // ширина, смотрим по первому li

    var position = 0; // текущая картинка

// сдвиг влево
    carousel.querySelector('.prev').onclick = function () {
        if (position === 0) {
            position = -width * (listElems.length - 1);
            list.style.marginLeft = position + 'px';
        }else {
            position = position + width;
            list.style.marginLeft = position + 'px';
        }

    };

    // сдвиг вправо
    carousel.querySelector('.next').onclick = function () {
        if (position <= -width * (listElems.length - 1)) {
            position = 0;
            list.style.marginLeft = position + 'px';
        }else {
            position = position - width;
            list.style.marginLeft = position + 'px';
        }
    };
});

