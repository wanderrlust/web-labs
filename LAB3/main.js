let start1 = document.getElementById('start1');
let start2 = document.getElementById('start2');
let start3 = document.getElementById('start3');
let start4 = document.getElementById('start4');
let start5 = document.getElementById('start5');
let start6 = document.getElementById('start6');
let start7 = document.getElementById('start7');
let start8 = document.getElementById('start8');
let start9 = document.getElementById('start9');
let start10 = document.getElementById('start10');


let addDateToArea1 = document.getElementById('addDateToArea1');
let addDateToArea2 = document.getElementById('addDateToArea2');
let addDateToArea3 = document.getElementById('addDateToArea3');
let addDateToArea4 = document.getElementById('addDateToArea4');

// ========================================= 1

start1.addEventListener('click', function (e) {
    e.preventDefault();

    let textFontSize = document.getElementById('set_text_fontsize').value
    let fontSize = parseInt(document.getElementById('set_fontsize').value);
    let result = document.getElementById('result1');

    result.style.fontSize = fontSize + 'px';
    result.textContent = textFontSize;
});


// ======================================== 2

start2.addEventListener('click', function (e) {
    e.preventDefault();
    createTable(document.getElementById('set_string').value);
});

function createTable(text) {
    let cell = document.createElement("td");
    cell.textContent = text;

    let table = document.getElementById("result2");

    let lastRow = table.rows[table.rows.length - 1];
    if (table.offsetWidth === window.innerWidth || lastRow.cells.length >= 5) {
        let newRow = table.insertRow();
        newRow.appendChild(cell);
    } else {
        lastRow.appendChild(cell);
    }
}

// ====================================== 3

start3.addEventListener('click', function (e) {
    e.preventDefault();
    createTitleH2(document.getElementById('set_quantity_title').value);
});

function createTitleH2(quantity) {
    let parent = document.getElementById('result3');
    for (let i = 1; i <= quantity; i++) {
        let h2 = document.createElement('h2');
        h2.textContent = "Header " + i;
        parent.appendChild(h2);
    }
}

// ===================================== 4

start4.addEventListener('click', function (e) {
    e.preventDefault();

    let argumentInput = document.getElementById('set_arguments').value;
    const argumentArray = argumentInput.split(',');

    // Шаг 2: Преобразовать каждый элемент массива
    const processedArguments = argumentArray.map(item => {
        if (isNaN(item)) {
            // Если элемент не является числом, удалить лишние пробелы
            return item.trim();
        } else {
            // Если элемент является числом, преобразовать его в число
            return parseFloat(item);
        }
    });
    someFunction(...processedArguments);
});

function someFunction(...args) {
    let sum = 0;
    let words = [];

    args.forEach(arg => {
        if (typeof arg === 'number') {
            sum += arg;
        } else if (typeof arg === 'string') {
            words.push(arg);
        }
    });

    const result = document.getElementById('result4');
    result.innerHTML = `Сума чисел = ${sum};<br> Речення = ${words.join(' ')}`;
}

// ======================================= 5

start5.addEventListener('click', function (e) {
    e.preventDefault();

    let textDate = document.getElementById('table_result1');
    let textDay = document.getElementById('table_result2');
    let textTime = document.getElementById('table_result3');

    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const months = ["січня", "лютого", "березня", "квітня", "травня", "червня",
        "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

    const today = new Date();
    textDate.textContent = `Дата: ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
    textDay.textContent = `День : ${days[today.getDay()]}`;
    textTime.textContent = `День : ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
});

// ======================================= 6

addDateToArea1.addEventListener('click', function (e) {
    e.preventDefault();
    let text = document.getElementById('addDateToArea1').textContent;
    document.getElementById('set_date').value = text;
});
addDateToArea2.addEventListener('click', function (e) {
    e.preventDefault();
    let text = document.getElementById('addDateToArea2').textContent;
    document.getElementById('set_date').value = text;
});
addDateToArea3.addEventListener('click', function (e) {
    e.preventDefault();
    let text = document.getElementById('addDateToArea3').textContent;
    document.getElementById('set_date').value = text;
});
addDateToArea4.addEventListener('click', function (e) {
    e.preventDefault();
    let text = document.getElementById('addDateToArea4').textContent;
    document.getElementById('set_date').value = text;
});

start6.addEventListener('click', function (e) {
    e.preventDefault();

    let inputDate = document.getElementById('set_date').value;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    let enteredDate = parseDate(inputDate);
    let diff = calculateDifferenceInDays(enteredDate, currentDate);

    let resultLabel = document.getElementById('result6');

    if (isSameDate(enteredDate, currentDate)) {
        resultLabel.textContent = 'Сьогодні';
    } else if (isYesterday(enteredDate, currentDate)) {
        resultLabel.textContent = 'Вчора';
    } else if (diff >= 2 && diff <= 6) {
        resultLabel.textContent = `${diff} дні тому`;
    } else if (diff === 7) {
        resultLabel.textContent = 'Тиждень тому';
    } else if (isSameYear(enteredDate, currentDate) && diff > 7) {
        resultLabel.textContent = 'Рік тому';
    } else {
        resultLabel.textContent = formatDate(enteredDate);
    }
});

function parseDate(dateString) {
    let parts = dateString.split(/[\.\-\/]/);
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let year = parseInt(parts[2], 10);

    return new Date(year, month, day);
}

function calculateDifferenceInDays(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInDays = Math.round(Math.abs((date1 - date2) / oneDay));

    return diffInDays;
}

function isSameDate(date1, date2) {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
}

function isYesterday(date1, date2) {
    let yesterday = new Date(date2);
    yesterday.setDate(date2.getDate() - 1);

    return isSameDate(date1, yesterday);
}

function isSameYear(date1, date2) {
    return date1.getFullYear() === date2.getFullYear();
}

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}.${padZero(month)}.${padZero(day)}`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// ====================================== 7

start7.addEventListener('click', function (e) {
    e.preventDefault();

    let textDate = document.getElementById('set_text_date').value;
    let result = selectDate(textDate);

    if (result && result.length > 0) {
        let formattedDates = "";
        for (let i = 0; i < result.length; i++) {
            formattedDates += "<br> Знайдена дата: " + result[i] + "<br>";
        }
        document.getElementById('result7').innerHTML = formattedDates;
    } else {
        document.getElementById('result7').innerHTML = "Дат не знайденно";
    }
});

function selectDate(textDate) {
    const regex = /\d+[-.]\d+[-.]\d+/g;
    const matches = textDate.match(regex);
    return matches;
}

// ======================================== 8

start8.addEventListener('click', function (e) {
    e.preventDefault();
    let textToCamel = document.getElementById('set_to_camel').value;
    let result = toCamelCase(textToCamel);
    document.getElementById('result8').textContent = result;
});

function toCamelCase(textToCamel) {
    return convertedContent = textToCamel.replace(/_([a-z])/g, function (match, char) {
        return char.toUpperCase();
    });
}

// ======================================== 9

start9.addEventListener('click', function (e) {
    e.preventDefault();
    let textToSnake = document.getElementById('set_to_snake').value;
    let result = toSnakeCase(textToSnake);
    document.getElementById('result9').textContent = result;
});

function toSnakeCase(textToSnake) {
    return convertedContent = textToSnake.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

// ======================================== 10

start10.addEventListener('click', function (e) {
    e.preventDefault();
    let textColors = document.getElementById('set_text_colors').value;
    let result = selectColors(textColors);

    if (result && result.length > 0) {
        let formattedColors = "";
        for (let i = 0; i < result.length; i++) {
            formattedColors += "<br> Знайдений колір: " + result[i] + "<br>";
        }
        document.getElementById('result10').innerHTML = formattedColors;
    } else {
        document.getElementById('result10').innerHTML = "Кольорів не знайденно";
    }
    console.log(result);
});

function selectColors(textColors) {
    const regex = /#\b(?:[0-9A-Fa-f]{3}){1,2}\b/g;

    const matches = textColors.match(regex);
    return matches;
}