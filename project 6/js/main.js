'use strict';



// from project 2
let money, time, updatedMoneyPerDay;

let appData = {
    budget : money,
    timeData: time,
    income: [],
    savings: false,
    expenses: {},
    optionalExpenses: {},
    calcIsStarted: false,

    toggleDisabled: function() {
        // Сделать все кнопки не рабочими, пока главный расчет не сделан
        if (appData.calcIsStarted == false) {
        button[0].disabled = true;
        button[1].disabled = true;
        button[2].disabled = true;
        // button[3].disabled = "disabled"; // главная кнопка
        }
        else {
            button[0].disabled = false;
            button[1].disabled = false;
            button[2].disabled = false;
        }
        }
};



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
    yearsavings = document.querySelector('.yearsavings-value'),
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
    checkSavings = document.querySelector('#savings'),
    // console.log(checkSavings);
    chooseSum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




// Домашнее задание №8

calcButton.addEventListener('click', function(){
    
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value =  new Date(Date.parse(time)).getDate()  ;

    appData.calcIsStarted = true;
    appData.toggleDisabled();
    
});

confirmExpenses.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < dataArea.length; i++) {
        let a = dataArea[i].value,
        b = dataArea[++i].value;
        
        // if ( (typeof(a)) === "string" && (typeof(a) != null) && (typeof(b) != null) && 
        //         a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        // }
        // else {
        //     i = i - 1;
        // }
        


    }
    expenses.textContent = sum;
            // Учет обязательных расходов
            if (appData.moneyPerDay != undefined){
            // console.log(parseInt(appData.moneyPerDay) - parseInt(sum)/30);
            updatedMoneyPerDay = parseInt(appData.moneyPerDay) - parseInt(sum)/30;
            daybudget.textContent = updatedMoneyPerDay;
            }
            else {
            console.log("Ошибка");
                    // console.log("All good");
            }

});

confirmOptionalExpenses.addEventListener('click', function() {
    for (let i = 0; i < inputOptionalExpenses.length; i++) {
        let askOptional = inputOptionalExpenses[i].value;
        appData.optionalExpenses[i] = askOptional;
        optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
        
        // if ( (typeof(askOptional)) === "string" && (typeof(askOptional) != null) && 
        //     askOptional != "" && askOptional.length < 50) {
        //     console.log("Необязательные расходы записаны");
        //     appData.optionalExpenses[i] = askOptional;
        // }
        // else {
        //     i--;
        // }
    }
});

calcDailyBudget.addEventListener('click', function() {
    //

    if(appData.budget != undefined)
    {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        daybudget.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            level.textContent = "Бомж";
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            level.textContent = "Среднячок";
        }
        else if (appData.moneyPerDay == 2000 || appData.moneyPerDay > 2000) {
            level.textContent = "Богач";
        }
        else {
            level.textContent = "Ошибка";
        }
    
    }
    else {
        daybudget.textContent = "Ошибка";
    }


});

chooseIncome.addEventListener('input', function(){
    //
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    income.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    //
    if (appData.savings == true) {
        //
        appData.savings = false;
    }
    else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    // 
    if (appData.savings == true) {
        //
        let sumTemp = +chooseSum.value,
            percentTemp = +percent.value;
            appData.monthIncome = sumTemp/100/12*percentTemp;
            appData.yearsavings = sumTemp/100*percentTemp;

            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearsavings.toFixed(1);
    }
});

percent.addEventListener('input', function(){
    // 
    if (appData.savings == true) {
        //
        let sumTemp = +chooseSum.value,
            percentTemp = +percent.value;
            appData.monthIncome = sumTemp/100/12*percentTemp;
            appData.yearsavings = sumTemp/100*percentTemp;

            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearsavings.toFixed(1);
    }
});

// Отключить все кнопки после загрузки
appData.toggleDisabled();