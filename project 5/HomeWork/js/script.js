'use strict';

// Определяем переменные
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    menuNumbers = [],
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    columns = document.querySelectorAll('.column'),
    promptApple = document.querySelector('#prompt'),
    answer;

    // console.log(menuItem[0]);

// Задание №1
// Замена местами в меню
menuItem.forEach(function (item, i, itemz) {
    menuNumbers[i] = item;
});
menu.replaceChild(menuItem[1], menuItem[3]);
menu.appendChild(menuNumbers[3]);

    // console.log(menuNumbers[2]);

// Задание №2
// Замена фоновой картинки
document.body.style.backgroundImage = "url(img/apple_true.jpg)";


// Задание №3
// Поменять заголовок
title.textContent = 'Мы продаем только подлинную технику Apple';


// Задание №4
// Удалить рекламу со страницы
columns[1].removeChild(adv);


// Задание №5
// Спросить у пользователя отношение к технике apple и записать ответ в блок
let delayedAnswer = function() {
    setTimeout(function(){
        let answer = prompt("Какое у вас отношение к технике Apple?", "");
        promptApple.textContent = answer;
    }, 1000)
};
delayedAnswer();