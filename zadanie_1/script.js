'use strict';
let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let question_1 = prompt('Введите обязательную статью расходов в этом месяце');
let question_2 = prompt('Во сколько обойдется?');
let expenses = {
    question_1 : question_2
}
let appData = new Object();
appData = {
    money_money: money,
    time_time: time,
    expenses: {},
    income: [],
    savings: false
}

alert('Бюджет на один день: ' + money/30);