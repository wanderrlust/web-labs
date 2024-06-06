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

form.addEventListener('input', function(event) {
    const element = event.target;
    if (element.name) {
        if (element.type === 'checkbox' || element.type === 'radio') {
            localStorage.setItem(element.name, element.checked);
        } else {
            localStorage.setItem(element.name, element.value);
        }
    }
});