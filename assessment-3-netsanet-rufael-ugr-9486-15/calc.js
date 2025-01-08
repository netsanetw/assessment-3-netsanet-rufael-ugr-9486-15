const display = document.getElementById('display');
const clear = document.getElementById('clear');
const equal = document.getElementById('equals');


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}


function calculate() {
    try {
       
        display.value = eval(display.value);
    } catch {
        display.value = "error";
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value) {
            appendToDisplay(value);
        }
    });
});


clear.addEventListener('click', clearDisplay);


equal.addEventListener('click', calculate);