
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