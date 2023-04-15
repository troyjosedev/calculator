let operator = '';
let previousValue = '';
let currentValue = '';

let clear = document.querySelector('#clear-btn');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal')
let numbers =  document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')

numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue; 
}))

operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue
}))

clear.addEventListener("click", function(){
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue
})


equal.addEventListener("click", function(){
    if(currentValue != '' && previousValue != ''){
        calculate();
        previousScreen.textContent = '';
        if(previousValue.length <= 8) {
            currentScreen.textContent = previousValue
        } else {
            currentScreen.textContent = previousValue.slice(0, 8) + "..."
        }
    }
})

decimal.addEventListener("click", function(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
})
  
function handleNumber(num){   //the num parameter would be a number textContent you type
    if(currentValue.length <= 8) {
        currentValue += num
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "x"){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    // previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}