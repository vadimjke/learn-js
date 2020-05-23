'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budget : money,
    timeData: time,
    income: [],
    savings: false,
    expenses: {},
    optionalExpenses: {}
};


let budgetOneDay = money/30;

// console.log(budgetOneDay + " - Бюджет на день");
// console.log(appData);


// 1st example of cycle

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
    
//     if ( (typeof(a)) === "string" && (typeof(a) != null) && (typeof(b) != null)
//     && a != "" && b != "" && a.length < 50) {
//         console.log("All good");
//         appData.expenses[a] = b;
//     }
//     else {
//         i = 0;
//     }
// };



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

let ic=0;
while (ic<2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
    if ( (typeof(a)) === "string" && (typeof(a) != null) && (typeof(b) != null)
    && a != "" && b != "" && a.length < 50) {
        console.log("All good");
        appData.expenses[a] = b;
        ic++;
    }    
}



appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на день - " + appData.moneyPerDay);

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



console.log(appData);