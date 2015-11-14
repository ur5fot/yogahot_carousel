/**
 * Created by ur5fot on 13.11.15.
 */

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carousel'); // id ID карусели
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');
    var width = carousel.querySelector('li').offsetWidth; // ширина, смотрим по первому li
    var containerControl = carousel.querySelector('.containerControl');
    var control = [];
    control[0] = carousel.querySelector('.control');

    var position = 0; // текужий отступ

    for (var i = 1; i < listElems.length; i++) {
        control[i] = containerControl.appendChild(control[0].cloneNode(true));
    }
    var mark = 0 ;
    control[Math.abs(position / width)].classList.add('active-corousel');

// сдвиг влево
    carousel.querySelector('.prev').onclick = function () {
        control[mark].classList.remove('active-corousel');
        if (position === 0) {
            position = -width * (listElems.length - 1);
            list.style.marginLeft = position + 'px';
        } else {
            position = position + width;
            list.style.marginLeft = position + 'px';
        }
        control[Math.abs(position / width)].classList.add('active-corousel');
        mark = Math.abs(position / width);
    };

    // сдвиг вправо
    carousel.querySelector('.next').onclick = function () {
        control[mark].classList.remove('active-corousel');
        if (position <= -width * (listElems.length - 1)) {
            position = 0;
            list.style.marginLeft = position + 'px';
        } else {
            position = position - width;
            list.style.marginLeft = position + 'px';
        }
        control[Math.abs(position / width)].classList.add('active-corousel');
        mark = Math.abs(position / width);

    };


});

