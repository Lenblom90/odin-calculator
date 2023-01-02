function add(a,b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

let displayValue = "";
const display = document.querySelector('.calculatorDisplay');
display.textContent = displayValue;

function populateDisplay(item, oldValue){
    displayValue = oldValue + item;
    display.textContent = displayValue;
}

const buttons = document.querySelectorAll('.calculatorButtons button');
buttons.forEach((button) => {
    if(button.textContent === "="){
        button.addEventListener('click', () => {
        operatorArray = ["+","-","*","/"];
        const operator = Array.from(displayValue).find((item) => operatorArray.includes(item));
        if (operator.length === 1){
            const [a,b] = displayValue.split(operator);
            displayValue = operate(a,b,operator);
            display.textContent = displayValue;
        }            
        });
    } else {
        button.addEventListener('click', () => populateDisplay(button.textContent, displayValue));
    }
})

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => {
    displayValue = "";
    display.textContent = displayValue;
});