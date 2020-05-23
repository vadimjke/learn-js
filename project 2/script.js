'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}


start();


let appData = {
    budget : money,
    timeData: time,
    income: [],
    savings: true,
    expenses: {},
    optionalExpenses: {}
};


let budgetOneDay = money/30;

// console.log(budgetOneDay + " - Бюджет на день");
// console.log(appData);


// 1st example of cycle

function chooseExpenses() {

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
    
    if ( (typeof(a)) === "string" && (typeof(a) != null) && (typeof(b) != null) && 
            a != "" && b != "" && a.length < 50) {
        console.log("All good");
        appData.expenses[a] = b;
    }
    else {
        i = 0;
    }
}

}

// chooseExpenses();





// 2nd example of cycle

// let ic=0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//     if ( (typeof(a)) === "string" && (typeof(a) != null) && (typeof(b) != null)
//     && a != "" && b != "" && a.length < 50) {
//         console.log("All good");
//         appData.expenses[a] = b;
//         ic++;
//     }
// }
// while (ic<2);



// 3rd example of cycle

// let ic=0;
// while (ic<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//     if ( (typeof(a)) === "string" && (typeof(a) != null) && (typeof(b) != null)
//     && a != "" && b != "" && a.length < 50) {
//         console.log("All good");
//         appData.expenses[a] = b;
//         ic++;
//     }    
// }



function calcBudget (income) {
    let dailyBudget = income / 30;
    console.log("Ваш бюджет на день - " + dailyBudget);
    return dailyBudget;

}

// передаем в функцию введенные данные по доходу за месяц
appData.moneyPerDay = calcBudget(appData.budget).toFixed(); 


function calcLevel (income) {
    if (income < 100) {
        console.log("Бомж");
    }
    else if (income > 100 && appData.moneyPerDay < 2000 ) {
        console.log("Среднячок");
    }
    else if (income > 2000) {
        console.log("Богач");
    }
    else {
        console.log("Ошибка");
    }    
}

calcLevel(appData.moneyPerDay);




console.log(appData);



function askOptionalExpenses() {

    let optionalExpenses = {};


for (let i = 0; i < 3; i++) {
    let askOptional = prompt("Статья необязательных расходов?");
    
    if ( (typeof(askOptional)) === "string" && (typeof(askOptional) != null) && 
        askOptional != "" && askOptional.length < 50) {
        console.log("Необязательные расходы записаны");
        optionalExpenses[i] = askOptional;
    }
    else {
        i = 0;
    }
}

return optionalExpenses;

}




function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();