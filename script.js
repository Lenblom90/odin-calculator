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
        let inputValues = Array.from(displayValue);
        const operatorArray = ["+","-","*","/"];
        let operatorValues = [];
        inputValues.forEach((item, index) => operatorArray.includes(item) ? operatorValues.push(index) : null);
        let a = displayValue.substring(0,operatorValues[0]);
        for (let i = 0; i < operatorValues.length; i++) {
            let b = undefined;
            if(operatorValues.length > 1){
                b = displayValue.substring(operatorValues[i] + 1, operatorValues[i+1])
            } else {
                b = displayValue.substring(operatorValues[i] + 1);
            }
            a = operate(a,b,displayValue[operatorValues[i]]);  
        }
        
        displayValue = a;
        display.textContent = displayValue;
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