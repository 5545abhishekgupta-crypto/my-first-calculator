const display = document.getElementById('display');

function appendValue(val) {
    if (display.value === 'Error') display.value = '';
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendSquare() {
    if (display.value && display.value !== 'Error') {
        try {
            // Squares the current display value
            display.value = Math.pow(eval(display.value), 2);
        } catch (error) {
            display.value = 'Error';
        }
    }
}

function calculate() {
    try {
        let expression = display.value;
        // Replace percentage sign (%) with /100 for evaluation
        expression = expression.replace(/%/g, '/100');
        
        let result = eval(expression);
        
        if (result !== undefined) {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}