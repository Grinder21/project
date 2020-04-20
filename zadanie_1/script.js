'use strict';
let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

let optionalExpenses = {
    question_1 : 1,
    question_2 : 2,
    question_3 : 3
    }

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b = prompt('Во сколько обойдется?', '');
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a !='' && b !='' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i -1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
   if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка!');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка!');
} else {
    console.log('Произошла ошибка!');
} 
}
detectLevel();

function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?');
        let percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSaving();
function chooseOptExpenses() {
    optionalExpenses.question_1 = prompt('Статья необязательных расходов?');
    optionalExpenses.question_2 = prompt('Статья необязательных расходов?');
    optionalExpenses.question_3 = prompt('Статья необязательных расходов?');

}
chooseOptExpenses();
