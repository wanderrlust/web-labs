// ============================================================= 1

const textarea = document.getElementById('textarea_task1');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');

let history = getCookie('history') ? JSON.parse(getCookie('history')) : [];
let currentIndex = getCookie('currentIndex') ? parseInt(getCookie('currentIndex')) : -1;

const updateButtons = () => {
    undoButton.disabled = currentIndex <= 0;
    redoButton.disabled = currentIndex >= history.length - 1;
};

const saveHistory = () => {
    document.cookie = `history=${JSON.stringify(history)};path=/;`;
    document.cookie = `currentIndex=${currentIndex};path=/;`;
};

const updateTextarea = () => {
    if (currentIndex >= 0 && currentIndex < history.length) {
        textarea.value = history[currentIndex];
    }
};

textarea.addEventListener('input', () => {
    const newValue = textarea.value;
    if (currentIndex === -1 || newValue !== history[currentIndex]) {
        history = history.slice(0, currentIndex + 1);
        history.push(newValue);
        currentIndex++;
        saveHistory();
        updateButtons();
    }
});

undoButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateTextarea();
        saveHistory();
        updateButtons();
    }
});

redoButton.addEventListener('click', () => {
    if (currentIndex < history.length - 1) {
        currentIndex++;
        updateTextarea();
        saveHistory();
        updateButtons();
    }
});

if (currentIndex >= 0) {
    updateTextarea();
}
updateButtons();


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


// ============================================================= 2


const form = document.getElementById('userForm');
const formElements = form.elements;

for (let element of formElements) {
    const value = localStorage.getItem(element.name);
    if (value) {
        if (element.type === 'checkbox' || element.type === 'radio') {
            element.checked = value === 'true';
        } else {
            element.value = value;
        }
    }
}

form.addEventListener('input', function (event) {
    const element = event.target;
    if (element.name) {
        if (element.type === 'checkbox' || element.type === 'radio') {
            localStorage.setItem(element.name, element.checked);
        } else {
            localStorage.setItem(element.name, element.value);
        }
    }
});


// ============================================================= 3


document.getElementById('showImagesButton').addEventListener('click', function () {
    const input = document.getElementById('jsonInput').value;
    const message = document.getElementById('message');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const fullsizeContainer = document.getElementById('fullsizeContainer');

    thumbnailContainer.innerHTML = '';
    fullsizeContainer.innerHTML = '';
    message.textContent = '';
    message.classList.remove('error');

    let files;

    try {
        files = JSON.parse(input);
        if (!Array.isArray(files)) throw new Error('Not an array');
    } catch (error) {
        console.error('Error parsing JSON:', error); // Добавлено для отладки
        message.textContent = 'Помилка: некоректний формат JSON';
        message.classList.add('error');
        return; // выход из функции
    }

    files.forEach(file => {
        const img = document.createElement('img');
        img.src = file;
        img.className = 'thumbnail';
        img.addEventListener('click', () => {
            fullsizeContainer.innerHTML = `<img src="${file}" class="fullsize">`;
        });
        thumbnailContainer.appendChild(img);
    });
});



// ============================================================= 4


class Student {
    constructor(firstName, lastName, math, history, js) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.math = math;
        this.history = history;
        this.js = js;
    }
}
class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let table = `<table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>LastName</th>
                                <th>Math</th>
                                <th>History</th>
                                <th>JS</th>
                                <th>Avg</th>
                            </tr>
                        </thead>
                        <tbody>`;

        this.students.forEach(student => {
            const avg = ((student.math + student.history + student.js) / 3).toFixed(2);
            table += `<tr>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.math}</td>
                        <td>${student.history}</td>
                        <td>${student.js}</td>
                        <td>${avg}</td>
                    </tr>`;
        });

        table += `</tbody></table>`;
        return table;
    }
}
class StylesTable extends ListOfStudents {
    getStyles() {
        return `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th {
                    background-color: green;
                    color: white;
                }
                th, td {
                    padding: 10px;
                    text-align: center;
                    border: 1px solid #ddd;
                }
                .average {
                    font-weight: bold;
                    color: green;
                }
            </style>
        `;
    }

    getTableList() {
        const tableList = super.getTableList();
        const styles = this.getStyles();
        return styles + tableList;
    }

    getAvg() {
        this.students.forEach(student => {
            student.avg = ((student.math + student.history + student.js) / 3).toFixed(2);
        });
    }

    getTotalAvg() {
        const totalAvg = (this.students.reduce((sum, student) => sum + parseFloat(student.avg), 0) / this.students.length).toFixed(2);
        return `Середній бал по групі = ${totalAvg}`;
    }
}


const students = [
    new Student('Федорко', 'Петро', 3, 4, 5),
    new Student('Остапенко', 'Сергій', 4, 5, 5),
    new Student('Колос', 'Олеся', 4, 3, 3),
    new Student('Кучмак', 'Іван', 4, 5, 4),
    new Student('Вороненко', 'Катерина', 5, 5, 5)
];

const container = document.querySelector('.students_table');

const styledTable = new StylesTable(students);

styledTable.getAvg();

container.innerHTML = styledTable.getTableList();
container.innerHTML += `<p class="average">${styledTable.getTotalAvg()}</p>`;


// ============================================================= 5


let colors = [];
let paint = 100;

function fillPaint() {
    paint = 100;
    updatePalette();
}


function drawShape() {
    if (paint >= 10) {
        paint -= 10;
        colors.push(paint);
        updatePalette();
    } else {
        console.log('Недостаточно краски для рисования');
    }
}


function updatePalette() {
    const palette = document.querySelector('.palette');
    palette.innerHTML = '';


    colors.forEach((colorValue, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = `rgba(255, 0, 0, ${colorValue / 100})`;
        palette.appendChild(colorDiv);
    });
}


// ============================================================= 6


const loadDogsButton = document.getElementById('loadDogs');
const dogGallery = document.getElementById('dogGallery');

loadDogsButton.addEventListener('click', async () => {
    dogGallery.innerHTML = '';

    for (let i = 0; i < 8; i++) {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const dogImage = document.createElement('img');
        dogImage.src = data.message;
        dogGallery.appendChild(dogImage);
    }
});