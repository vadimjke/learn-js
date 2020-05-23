'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
let secondAnswer = prompt("Во сколько обойдется?");

let appData = {
    budget : money,
    timeData: time,
    income: [],
    savings: false,
    expenses: {
        firstAnswer : secondAnswer
    }
};

let budgetOneDay = money/30;

console.log(budgetOneDay + " - Бюджет на день");
console.log(appData);

alert("Ваш бюджет на день - " + budgetOneDay);