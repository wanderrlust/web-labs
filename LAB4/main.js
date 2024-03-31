let start1 = document.getElementById('start1');
let start3 = document.getElementById('start3');
let start4 = document.getElementById('start4');

// =================================================================== 1
start1.addEventListener('click', function (e) {
    e.preventDefault();

    let stringResult = "";
    let checkboxes = document.querySelectorAll('.checkbox_input1');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            stringResult += checkbox.value + ", ";
        }
    });

    stringResult = stringResult.slice(0, -2);
    document.getElementById('result1').textContent = stringResult;
});

// =================================================================== 2

let checkboxes = document.querySelectorAll('.checkbox_input2');
let resultDiv = document.getElementById('result2');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            if (resultDiv.textContent !== "") {
                resultDiv.textContent += "; ";
            }
            resultDiv.textContent += checkbox.value;
        } else {
            resultDiv.textContent = resultDiv.textContent.replace(checkbox.value + "; ", "");
        }
    });
});

// =================================================================== 3

const tasks = [
    { question: '3 * 4 =', options: ['11', '12', '16', '7'], answer: '12' },
    { question: '5 * 6 =', options: ['25', '30', '35', '40'], answer: '30' },
    { question: '7 * 8 =', options: ['48', '54', '56', '64'], answer: '56' },
    { question: '9 * 9 =', options: ['72', '81', '90', '99'], answer: '81' },
    { question: '12 * 3 =', options: ['27', '22', '24', '36'], answer: '36' },
];

let currentTaskIndex1 = 0;
let correctAnswers1 = 0;

const scoreElement1 = document.getElementById('score1');
const nextTaskButton1 = document.getElementById('nextTask1');
nextTaskButton1.disabled = true;
const taskElement1 = document.getElementById('task1');
const optionsElement1 = document.getElementById('options');
const resultElement1 = document.getElementById('result3');

function showTask1() {
    const task = tasks[currentTaskIndex1];
    taskElement1.textContent = task.question;
    optionsElement1.innerHTML = '';

    task.options.forEach(option => {
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'options';
        radioButton.value = option;
        radioButton.addEventListener('change', checkAnswer);
        optionsElement1.appendChild(radioButton);


        const label = document.createElement('label');
        label.textContent = option;
        optionsElement1.appendChild(label);
        optionsElement1.appendChild(document.createElement('br'));
    });
}

function checkAnswer(e) {
    const selectedAnswer = e.target.value;
    const task = tasks[currentTaskIndex1];
    if (selectedAnswer === task.answer) {
        resultElement1.textContent = 'Правильно';
        resultElement1.style.color = 'green';
        correctAnswers1++;
    } else {
        resultElement1.textContent = `Помилка, правильна відповідь "${task.answer}"`;
        resultElement1.style.color = 'red';
        e.target.disabled = true;
    }

    nextTaskButton1.disabled = false;
    document.querySelectorAll('input[type="radio"]').forEach(radioButton => {
        radioButton.removeEventListener('change', checkAnswer);
    });
}

function nextTask() {
    currentTaskIndex1++;
    if (currentTaskIndex1 < tasks.length) {
        showTask1();
        resultElement1.textContent = '';
        nextTaskButton1.disabled = true;
    } else {
        const percentage = (correctAnswers1 / tasks.length) * 100;
        scoreElement1.textContent = `Загальний рахунок: ${percentage.toFixed(2)}% (${correctAnswers1} правильних відповідей з  ${tasks.length})`;
        nextTaskButton1.disabled = true;
    }
}

nextTaskButton1.addEventListener('click', nextTask);

start3.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('task3').style.display = 'block';
    document.getElementById('start3').style.display = 'none';
    showTask1();
});

// =================================================================== 4

let currentTaskIndex2 = 0;
let correctAnswers2 = 0;

const scoreElement2 = document.getElementById('score2');
const nextTaskButton2 = document.getElementById('nextTask2');
nextTaskButton2.disabled = true;
const taskElement2 = document.getElementById('task2');
const answerElement = document.getElementById('answer');
const checkAnswerButton = document.getElementById('check_answer');
const resultElement2 = document.getElementById('result4');

function showTask2() {
    const task = tasks[currentTaskIndex2];
    taskElement2.textContent = task.question;
}

checkAnswerButton.addEventListener('click', function (e) {
    e.preventDefault();
    const task = tasks[currentTaskIndex2];
    if (answerElement.value === task.answer) {
        resultElement2.textContent = 'Правильно';
        resultElement2.style.color = 'green';
        correctAnswers2++;
        this.disabled = true;
    } else {
        resultElement2.textContent = `Помилка, правильна відповідь "${task.answer}"`;
        resultElement2.style.color = 'red';
        this.disabled = true;
    }

    nextTaskButton2.disabled = false;
});

function nextTask2() {
    answerElement.value = '';
    checkAnswerButton.disabled = false;
    currentTaskIndex2++;
    if (currentTaskIndex2 < tasks.length) {
        showTask2();
        resultElement2.textContent = '';
        nextTaskButton2.disabled = true;
    } else {
        const percentage = (correctAnswers2 / tasks.length) * 100;
        scoreElement2.textContent = `Загальний рахунок: ${percentage.toFixed(2)}% (${correctAnswers2} правильних відповідей з  ${tasks.length})`;
        nextTaskButton2.disabled = true;
    }
}

nextTaskButton2.addEventListener('click', nextTask2);

start4.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('task4').style.display = 'block';
    document.getElementById('start4').style.display = 'none';
    showTask2();
});

// =================================================================== 5

document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.gallery_item');
    images.forEach(function (image) {
        image.classList.add('inactive');

        image.addEventListener('click', function () {
            if (image.classList.contains('inactive')) {
                image.classList.remove('inactive');
            } else {
                image.classList.add('inactive');
            }
        });
    });
});


// =================================================================== 6

let sectionInputs = document.querySelectorAll('.section_item');

sectionInputs.forEach(function (sectionInput) {
    sectionInput.addEventListener('focus', function () {
        let parentElement = sectionInput.parentElement;
        parentElement.classList.add('focused');
    });

    sectionInput.addEventListener('blur', function () {
        let parentElement = sectionInput.parentElement;
        parentElement.classList.remove('focused');
    });
});

// =================================================================== 7

let block = document.getElementById('figure_block');
let widthRange = document.getElementById('width_range');
let heightRange = document.getElementById('height_range');
let rotationRange = document.getElementById('rotation_range');

let widthRangeText = document.getElementById('width_range_text');
let heightRangeText = document.getElementById('height_range_text');
let rotationRangeText = document.getElementById('rotation_range_text');

document.addEventListener('DOMContentLoaded', function () {
    widthRangeText.value = widthRange.value;
    heightRangeText.value = heightRange.value;
    rotationRangeText.value = rotationRange.value;
});

widthRange.addEventListener('input', updateSize);
heightRange.addEventListener('input', updateSize);
rotationRange.addEventListener('input', updateRotation);

widthRangeText.addEventListener('input', updateSizeNum);
heightRangeText.addEventListener('input', updateSizeNum);
rotationRangeText.addEventListener('input', updateRotationNum);

function updateSize() {
    const width = widthRange.value + 'px';
    const height = heightRange.value + 'px';
    block.style.width = width;
    block.style.height = height;
    widthRangeText.value = widthRange.value;
    heightRangeText.value = heightRange.value;
}

function updateRotation() {
    const rotation = rotationRange.value + 'deg';
    block.style.transform = `rotate(${rotation})`;
    rotationRangeText.value = rotationRange.value;
}


function updateSizeNum() {
    if (widthRangeText.value && heightRangeText.value > 50) {
        const width = widthRangeText.value + 'px';
        const height = heightRangeText.value + 'px';
        block.style.width = width;
        block.style.height = height;
        widthRange.value = widthRangeText.value;
        heightRange.value = heightRangeText.value;
    }

}

function updateRotationNum() {
    if (rotationRangeText.value > 0) {
        const rotation = rotationRangeText.value + 'deg';
        block.style.transform = `rotate(${rotation})`;
        rotationRange.value = rotationRangeText.value;
    }

}

// =================================================================== 8

const image = document.getElementById('image_resize');
const changeSizeButton = document.getElementById('changeSizeButton');

let originalWidth = image.width;
let originalHeight = image.height;

let isImageEnlarged = false;

changeSizeButton.addEventListener('click', function () {
    if (!isImageEnlarged) {
        image.style.width = (originalWidth * 2) + 'px';
        image.style.height = (originalHeight * 2) + 'px';
        isImageEnlarged = true;
    } else {
        image.style.width = originalWidth + 'px';
        image.style.height = originalHeight + 'px';
        isImageEnlarged = false;
    }
});