// ======================================================== 1

const start1 = document.getElementById('start1');
const inputName = document.getElementById('table1_inputName');
const inputLastName = document.getElementById('table1_inputLastName');
const table = document.querySelector('.table1');

start1.addEventListener('click', function (event) {
    event.preventDefault();  // Предотвращаем отправку формы

    const name = inputName.value;
    const lastName = inputLastName.value;

    if (name === '' || lastName === '') {
        alert('Будь ласка, заповніть обидва поля.');
        return;
    }

    const newRow = table.insertRow();
    const cellId = newRow.insertCell(0);
    const cellFirstName = newRow.insertCell(1);
    const cellLastName = newRow.insertCell(2);

    const newId = table.rows.length - 1;
    cellId.textContent = newId;
    cellFirstName.textContent = name;
    cellLastName.textContent = lastName;

    inputName.value = '';
    inputLastName.value = '';
});



// ======================================================== 2


const binaryInput = document.getElementById('binaryInput');
const squaresContainer = document.getElementById('squaresContainer');

binaryInput.addEventListener('input', function () {
    const value = binaryInput.value.trim();
    squaresContainer.innerHTML = '';

    for (let char of value) {
        if (char === '0' || char === '1') {
            const square = document.createElement('div');
            square.classList.add('square');
            if (char === '0') {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            squaresContainer.appendChild(square);
        }
    }
});

// ======================================================== 3



const colorElements = document.querySelectorAll('.color');
const colorBlock = document.getElementById('colorBlock');
const selectedColors = new Set();

colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', function () {
        const color = colorElement.getAttribute('data-color');

        if (selectedColors.has(color)) {
            selectedColors.delete(color);
            colorElement.classList.remove('selected');
        } else {
            selectedColors.add(color);
            colorElement.classList.add('selected');
        }

        updateColorBlock();
    });
});

function updateColorBlock() {
    const colors = Array.from(selectedColors);
    if (colors.length === 0) {
        colorBlock.style.background = '#ccc';
    } else if (colors.length === 1) {
        colorBlock.style.background = colors[0];
    } else {
        colorBlock.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
    }
}


// ======================================================== 4



const textBlocks = document.querySelectorAll('.text_block');

textBlocks.forEach(block => {
    const editButton = block.querySelector('.edit_btn');
    const deleteButton = block.querySelector('.delete_btn');
    const textContent = block.querySelector('.text_content');

    deleteButton.addEventListener('click', function () {
        block.remove();
    });

    editButton.addEventListener('click', function () {
        const textarea = document.createElement('textarea');
        textarea.value = textContent.textContent;

        block.replaceChild(textarea, textContent);

        textarea.addEventListener('blur', function () {
            textContent.textContent = textarea.value;
            block.replaceChild(textContent, textarea);
        });
    });
});


// ======================================================== 5



let selectedColor = null;

document.querySelectorAll('.color').forEach(function (colorDiv) {
    colorDiv.addEventListener('click', function () {
        document.querySelectorAll('.color').forEach(function (c) {
            c.classList.remove('selected');
        });
        colorDiv.classList.add('selected');
        selectedColor = colorDiv.style.backgroundColor;
    });
});

document.querySelectorAll('.square4').forEach(function (squareDiv) {
    squareDiv.addEventListener('click', function () {
        if (selectedColor) {
            squareDiv.style.backgroundColor = selectedColor;
        }
    });
});


// ======================================================== 6




document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.toggle('flipped');
    });
});


// ======================================================== 7




const container = document.querySelector('.container_task7');
const squares = document.querySelectorAll('.square_task7');

let activeSquare = null;
let offsetX = 0;
let offsetY = 0;

squares.forEach(square => {
    square.addEventListener('mousedown', (e) => {
        activeSquare = square;
        offsetX = e.clientX - square.offsetLeft;
        offsetY = e.clientY - square.offsetTop;
        square.style.cursor = 'grabbing';
    });
});

document.addEventListener('mousemove', (e) => {
    if (activeSquare) {
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        const containerRect = container.getBoundingClientRect();
        const squareRect = activeSquare.getBoundingClientRect();

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x + squareRect.width > containerRect.width) x = containerRect.width - squareRect.width;
        if (y + squareRect.height > containerRect.height) y = containerRect.height - squareRect.height;

        activeSquare.style.left = `${x}px`;
        activeSquare.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', () => {
    if (activeSquare) {
        activeSquare.style.cursor = 'grab';
        activeSquare = null;
    }
});


// ======================================================== 8


const messageList = document.getElementById('messageList');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submitMessage');

submitButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (username && message) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${username}:</strong> ${message}`;
        messageList.appendChild(listItem);


        usernameInput.value = '';
        messageInput.value = '';
    } else {
        alert('Будь ласка, заповніть обидва поля.');
    }
});

// ======================================================== 9


const bookList = document.querySelectorAll('.book-list li');
let selectedBook = null;

bookList.forEach(function (book) {
    book.addEventListener('click', function () {
        if (selectedBook) {
            selectedBook.classList.remove('selected');
        }

        book.classList.add('selected');
        selectedBook = book;
    });
});

// ======================================================== 10


const container_task9 = document.querySelector('.container_task9');
    const button = document.querySelector('.button_task9');

    container_task9.addEventListener('mousemove', function(e) {
        const containerRect = container_task9.getBoundingClientRect();
        const buttonRect = button_task9.getBoundingClientRect();

        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;

        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;

        let newLeft = Math.random() * (containerRect.width - buttonWidth);
        let newTop = Math.random() * (containerRect.height - buttonHeight);

        if (Math.abs(offsetX - newLeft) < buttonWidth && Math.abs(offsetY - newTop) < buttonHeight) {
            newLeft = offsetX + buttonWidth * 1.5 > containerRect.width ? offsetX - buttonWidth * 1.5 : offsetX + buttonWidth * 1.5;
            newTop = offsetY + buttonHeight * 1.5 > containerRect.height ? offsetY - buttonHeight * 1.5 : offsetY + buttonHeight * 1.5;
        }

        button.style.left = newLeft + 'px';
        button.style.top = newTop + 'px';
    });

    button.addEventListener('mouseenter', function() {
        const containerRect = container_task9.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;

        const newLeft = Math.random() * (containerRect.width - buttonWidth);
        const newTop = Math.random() * (containerRect.height - buttonHeight);

        button.style.left = newLeft + 'px';
        button.style.top = newTop + 'px';
    });