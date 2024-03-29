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

let currentTaskIndex = 0;
let correctAnswers = 0;

const scoreElement = document.getElementById('score');
const nextTaskButton = document.getElementById('nextTask');
nextTaskButton.disabled = true;
const taskElement = document.getElementById('task');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result3');

function showTask() {
    const task = tasks[currentTaskIndex];
    taskElement.textContent = task.question;
    optionsElement.innerHTML = '';

    task.options.forEach(option => {
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'options';
        radioButton.value = option;
        radioButton.addEventListener('change', checkAnswer);
        optionsElement.appendChild(radioButton);


        const label = document.createElement('label');
        label.textContent = option;
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement('br'));
    });
}

function checkAnswer(e) {
    const selectedAnswer = e.target.value;
    const task = tasks[currentTaskIndex];
    if (selectedAnswer === task.answer) {
        resultElement.textContent = 'Правильно';
        resultElement.style.color = 'green';
        correctAnswers++;
    } else {
        resultElement.textContent = `Помилка, правильна відповідь "${task.answer}"`;
        resultElement.style.color = 'red';
        e.target.disabled = true;
    }

    nextTaskButton.disabled = false;
    document.querySelectorAll('input[type="radio"]').forEach(radioButton => {
        radioButton.removeEventListener('change', checkAnswer);
    });
}

function nextTask() {
    currentTaskIndex++;
    if (currentTaskIndex < tasks.length) {
        showTask();
        resultElement.textContent = '';
        nextTaskButton.disabled = true;
    } else {
        const percentage = (correctAnswers / tasks.length) * 100;
        scoreElement.textContent = `Загальний рахунок: ${percentage.toFixed(2)}% (${correctAnswers} правильних відповідей з  ${tasks.length})`;
        nextTaskButton.disabled = true;
    }
}

nextTaskButton.addEventListener('click', nextTask);

start3.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('task3').style.display = 'block';
    document.getElementById('start3').style.display = 'none';
    showTask();
});

// =================================================================== 4





start4.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('task4').style.display = 'block';
    document.getElementById('start4').style.display = 'none';
    showTask();
});


