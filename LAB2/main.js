let start1 = document.getElementById('start1');
let start2 = document.getElementById('start2');
let start3 = document.getElementById('start3');
let start4 = document.getElementById('start4');
let start5 = document.getElementById('start5');

// ==================================== 1

start1.addEventListener('click', function (e) {
    e.preventDefault();

    let number = document.getElementById('set_number').value;
    let numberToString = numberToWords(number);
    document.getElementById('result1').textContent = "Ваше число = " + numberToString;
});

// function numberToWords(number) {
//     const units = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
//     const teens = ['', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
//     const tens = ['', 'десять', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];

//     let result = '';
//     if (number == 0) {
//         result = "нуль"
//     } else if (number >= 10 && number < 20) {
//         result = teens[number - 10];
//     } else {
//         const ones = number % 10;
//         const tensDigit = Math.floor(number / 10);

//         result = tens[tensDigit];
//         if (ones > 0) {
//             result += ' ' + units[ones];
//         }
//     }
//     return result;
// }


const numberToWords = (number) => {
    const units = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
    const teens = ['', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
    const tens = ['', 'десять', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];

    let result = '';
    if (number == 0) {
        result = "нуль"
    } else if (number >= 10 && number < 20) {
        result = teens[number - 10];
    } else {
        const ones = number % 10;
        const tensDigit = Math.floor(number / 10);

        result = tens[tensDigit];
        if (ones > 0) {
            result += ' ' + units[ones];
        }
    }
    return result;
};



// =========================== 2


start2.addEventListener('click', function (e) {
    e.preventDefault();
    toCamelCase();
});

// function toCamelCase() {
//     const fileInput = document.getElementById('fileInput1');
//     const file = fileInput.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             const content = e.target.result;
//             const convertedContent = content.replace(/-([a-z])/g, function (match, char) {
//                 return char.toUpperCase();
//             });

//             const blob = new Blob([convertedContent], { type: 'text/css' });
//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = 'convertedToCamel.css';
//             link.click();
//         };

//         reader.readAsText(file);
//     } else {
//         alert('Будь ласка, виберіть файл типу .css');
//     }
// }

const toCamelCase = () => {
    const fileInput = document.getElementById('fileInput1');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const convertedContent = content.replace(/-([a-z])/g, function (match, char) {
                return char.toUpperCase();
            });

            const blob = new Blob([convertedContent], { type: 'text/css' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'convertedToCamel.css';
            link.click();
        };

        reader.readAsText(file);
    } else {
        alert('Будь ласка, виберіть файл типу .css');
    }
}

// ==================================== 3

start3.addEventListener('click', function (e) {
    e.preventDefault();
    toKebabCase();
});

// function toKebabCase() {
//     const fileInput = document.getElementById('fileInput2');
//     const file = fileInput.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             const content = e.target.result;
//             const convertedContent = content.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

//             const blob = new Blob([convertedContent], { type: 'text/css' });
//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = 'convertedToKebab.css';
//             link.click();
//         };

//         reader.readAsText(file);
//     } else {
//         alert('Будь ласка, виберіть файл типу .css');
//     }
// }


const toKebabCase = () => {
    const fileInput = document.getElementById('fileInput2');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const convertedContent = content.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

            const blob = new Blob([convertedContent], { type: 'text/css' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'convertedToKebab.css';
            link.click();
        };

        reader.readAsText(file);
    } else {
        alert('Будь ласка, виберіть файл типу .css');
    }
}

// ====================================== 4

start4.addEventListener('click', function (e) {
    e.preventDefault();

    let expression = document.getElementById('set_expressoin').value;
    document.getElementById('result4').textContent = "Результат розрахунку = " + calculateExpression(expression);
});

function calculateExpression(expression) {
    const regex = /([-]?\d+(?:\.\d+)?)\s*([-+*/])\s*([-]?\d+(?:\.\d+)?)/;

    const matches = expression.match(regex);
    console.log(matches);

    if (matches) {
        const operand1 = parseFloat(matches[1]);
        const operator = matches[2];
        const operand2 = parseFloat(matches[3]);

        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                if (operand2 === 0) {
                    return "Ділення на нуль!";
                }
                return operand1 / operand2;
            default:
                return "Невірний оператор!";
        }
    } else {
        return "Невірний формат виразу!";
    }
}


// ================================ 5

start5.addEventListener('click', function (e) {
    e.preventDefault();

    let textArea = document.getElementById('set_text_date').value;
    document.getElementById('result5').value = convertDateText(textArea);
});


function convertDateText (textArea) {
    return textArea.replace(/(\d{4})\/(\d{2})\/(\d{2})/g, function(match, year, month, day) {
        return day + '.' + month + '.' + year;
    });
}
