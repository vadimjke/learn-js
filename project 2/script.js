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
    optionalExpenses: {},
    chooseExpenses: function() {

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
        
        },
    detectDayBudget: function(){
        appData.moneyPerDay = appData.budget / 30;
        console.log("Ваш бюджет на день - " + appData.moneyPerDay);
    },
    detectLevel: function (){
        if (appData.moneyPerDay < 100) {
            console.log("Бомж");
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log("Среднячок");
        }
        else if (appData.moneyPerDay > 2000) {
            console.log("Богач");
        }
        else {
            console.log("Ошибка");
        }    
    },
    checkSavings: function(){
        
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
},

    chooseOptionalExpenses: function(){
        for (let i = 1; i < 3; i++) {
            let askOptional = prompt("Статья необязательных расходов?");
            
            if ( (typeof(askOptional)) === "string" && (typeof(askOptional) != null) && 
                askOptional != "" && askOptional.length < 50) {
                console.log("Необязательные расходы записаны");
                appData.optionalExpenses[i] = askOptional;
            }
            else {
                i = 0;
            }
        }
    },

    chooseIncome: function(){
        let items = prompt("Что принесет дополнительных доход? (Перечислите через запятую)", "");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }
};


// console.log(budgetOneDay + " - Бюджет на день");
// console.log(appData);


// 1st example of cycle



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




// передаем в функцию введенные данные по доходу за месяц


console.log(appData);