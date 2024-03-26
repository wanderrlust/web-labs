let start1 = document.getElementById('start1');
let start2 = document.getElementById('start2');
let start3 = document.getElementById('start3');
let start4 = document.getElementById('start4');
let start5 = document.getElementById('start5');
let start6 = document.getElementById('start6');
let start7 = document.getElementById('start7');
let restart5 = document.getElementById('restart5');

defaultDate = new Date();
document.getElementById('date_select').valueAsDate = defaultDate;

// =========================================== 1

start1.addEventListener('click', function (e) {
    e.preventDefault();
    let inputWallet = document.getElementById('wallet');
    let inputPrice = document.getElementById('price');
    let labelResult = document.getElementById('result1');
    let wallet = parseFloat(inputWallet.value);
    let price = parseFloat(inputPrice.value);
    let result = Math.floor(wallet / price);
    let rest = wallet % price;
    
    labelResult.textContent = `Кількість бургерів = ${result}, залишок у гаманці = ${rest.toFixed(2)} грн`;
    console.log("Кількість бургерів = " + result + ", залишок у гаманці = " + rest.toFixed(2) + " грн");
});

// ========================================== 2

start2.addEventListener('click', function (e) {
    e.preventDefault();

    let inputNumber = document.getElementById('number');
    let resultLabel = document.getElementById('result2');
    let number = inputNumber.value;

    if (!isNaN(number) && number.length === 5) {
        let first = number.charAt(4);
        let rest = number.substring(0, 4);
        let newNumber = first + rest;
        resultLabel.textContent = "Нове число: " + newNumber;
    } else {
        resultLabel.textContent = "Будь ласка, введіть коректне п'ятизначне число.";
    }
});

// =========================================== 3

// start3.addEventListener('click', function (e) {
//     e.preventDefault();

//     let inputDate = document.getElementById('date_select').value;
//     let selectDate = new Date(inputDate);

//     // Отримання попередньої дати
//     let prevDate = new Date(selectDate);
//     prevDate.setDate(prevDate.getDate() - 1);

//     // Отримання наступної дати
//     let nextDate = new Date(selectDate);
//     nextDate.setDate(nextDate.getDate() + 1);

//     // Встановлення значень відповідних полів вводу
//     document.getElementById('date_show_prev').valueAsDate = prevDate;
//     document.getElementById('date_show_next').valueAsDate = nextDate;
// });

start3.addEventListener('click', function (e) {
    e.preventDefault();

    let inputDate = document.getElementById('date_select').value;

    let dateComponents = inputDate.split('-');
    let year = parseInt(dateComponents[0]);
    let month = parseInt(dateComponents[1]);
    let day = parseInt(dateComponents[2]);


    let previousDate = getPrevDate(year, month, day);
    let nextDate = getNextDate(year, month, day);


    document.getElementById('date_show_prev').value = formatDate(previousDate);
    document.getElementById('date_show_next').value = formatDate(nextDate);
});
function getPrevDate(year, month, day) {
    if (day > 1) {
        return { year, month, day: day - 1 };
    } else {
        if (month > 1) {

            let previousMonth = month - 1;

            let daysInPreviousMonth = new Date(year, previousMonth, 0).getDate();
            return { year, month: previousMonth, day: daysInPreviousMonth };
        } else {

            let previousYear = year - 1;
            let previousMonth = 12;

            let daysInPreviousMonth = new Date(previousYear, previousMonth, 0).getDate();
            return { year: previousYear, month: previousMonth, day: daysInPreviousMonth };
        }
    }
}
function getNextDate(year, month, day) {
    let daysInMonth = new Date(year, month, 0).getDate();

    if (day < daysInMonth) {
        return { year, month, day: day + 1 };
    } else {
        if (month < 12) {

            let nextMonth = month + 1;

            return { year, month: nextMonth, day: 1 };
        } else {

            let nextYear = year + 1;
            let nextMonth = 1;

            return { year: nextYear, month: nextMonth, day: 1 };
        }
    }
}
function formatDate(date) {
    return `${date.year}-${setZero(date.month)}-${setZero(date.day)}`;
}

function setZero(number) {
    return number < 10 ? `0${number}` : number;
}


// ========================================= 4

start4.addEventListener('click', function (e) {
    e.preventDefault();

    let inputAge = document.getElementById('set_age').value;
    let age = parseInt(inputAge);
    if (!isNaN(age) && age != "") {
        if (age <= 69) {
            let ageDescription = getAgeDescription(age);
            document.getElementById('show_age').textContent = "Вам " + ageDescription;

        } else {
            document.getElementById('show_age').textContent = "Введіть число менше 69";
        }

    } else {
        document.getElementById('show_age').textContent = "Введіть корректне число";
    }

});

function getAgeDescription(age) {
    const units = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
    const teens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
    const tens = ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят'];

    if (age < 10) {
        return units[age] + getAgeUnit(age);
    } else if (age < 20) {
        return teens[age - 10] + getAgeUnit(age);
    } else {
        let digit = age % 10;
        let ten = Math.floor(age / 10);
        return tens[ten] + ' ' + units[digit] + getAgeUnit(age);
    }
}

function getAgeUnit(age) {
    if (age % 10 === 1 && age !== 11) {
        return ' рік';
    } else if ((age % 10 >= 2 && age % 10 <= 4) && (age < 10 || age > 20)) {
        return ' роки';
    } else {
        return ' років';
    }
}

// =========================================== 5

// document.getElementById('restart_form5').classList.add('form_hidden');
// let answer = "ні";

start5.addEventListener('click', function (e) {
    e.preventDefault();

    do {
        var num1 = parseInt(prompt('Введіть перше число'));
        var num2 = parseInt(prompt('Введіть друге число'));
        var operator = prompt('Введіть знак - + / *');

        switch (operator) {
            case '+':
                alert(num1 + num2);
                break;
            case '-':
                alert(num1 - num2);
                break;
            case '*':
                alert(num1 * num2);
                break;
            case '/':

                if (num2 === 0) {
                    alert("Не можна ділити на 0");
                    continue;
                }
                alert(num1 / num2);
                break;
            default:
                alert("Будь ласка, введіть коректний знак.");
                continue;
        }

    } while (confirm('Ви хочете вирішити ще один вираз?'));

    // do {
    //     document.getElementById('form5').classList.remove('form_hidden');
    //     let num1 = parseInt(document.getElementById('set_first_num').value);
    //     let num2 = parseInt(document.getElementById('set_second_num').value);
    //     let operator = document.getElementById('set_operator').value;

    //     let result;
    //     switch (operator) {
    //         case '+':
    //             result = num1 + num2;
    //             break;
    //         case '-':
    //             result = num1 - num2;
    //             break;
    //         case '*':
    //             result = num1 * num2;
    //             break;
    //         case '/':

    //             if (num2 === 0) {
    //                 console.log('Не можна ділити на 0');
    //                 continue;
    //             }
    //             result = num1 / num2;
    //             break;
    //         default:
    //             console.log('Будь ласка, введіть коректний знак.');
    //             continue;
    //     }

    //     console.log('Ваш результат = ' + result);

    //     // document.getElementById('form5').classList.add('form_hidden');
    //     // document.getElementById('restart_form5').classList.remove('form_hidden');


    //     // restart5.addEventListener('click', function (e) {
    //     //     e.preventDefault();
    //     //     answer = document.getElementById('set_answer').value;
    //     // });


    // } while (!confirm('Хотите ли вы решить еще один пример?'));
});


// =========================================== 6

let sum = 0;
start6.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('show_sum_numbers').textContent = '';

    let inputNumbers = document.getElementById('set_numbers');
    let number = parseFloat(inputNumbers.value);

    if (!isNaN(number)) {
        sum += number;
        inputNumbers.value = '';
    } else {
        alert('Будь ласка, введіть коректне число.');
    }

    if (number === 0) {
        calculateSum();
    }
});

function calculateSum() {
    let resultElement = document.getElementById('show_sum_numbers');
    resultElement.textContent = 'Сума введених чисел: ' + sum;
    sum = 0;
}

//  ============================================= 7

start7.addEventListener('click', function(e) {
    e.preventDefault();

    let inputNumber = document.getElementById('set_number');
    let S = parseInt(inputNumber.value);

    if (!isNaN(S) && S >= 10 && S <= 99) {
        let K = S % 10;
        let result = Math.pow(S, K);

        let = showResult =document.getElementById('show_number_pow').textContent = "Число: " + S + ", друга цифра: " + K + ". Результат: ("+ S + ")^"+ K +" = " + result;
    } else {
        alert('Будь ласка, введіть двозначне число.');
    }
});