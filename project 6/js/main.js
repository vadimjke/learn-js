'use strict';


// Домашнее задание №7




// Получить кнопку "Начать расчет" через id
let calcButton = document.querySelector('#start');

// Получить все блоки в правой части программы через классы 
// (которые имеют класс название-value, начиная с  и заканчивая 
let budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('yearsavings-value'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let dataArea = document.getElementsByClassName('expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let button = document.getElementsByTagName('button'),
    confirmExpenses = button[0],
    confirmOptionalExpenses = button[1],
    calcDailyBudget = button[2],
    calcSavings = button[3];
console.log(confirmExpenses);

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let inputOptionalExpenses = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('input[type=checkbox]'),
    // console.log(checkSavings);
    chooseSum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');