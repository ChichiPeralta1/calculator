const display = document.querySelector('.calculus')
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal')
const buttons = document.getElementsByClassName('button')
let resultDisplay = document.querySelector('.result')


document.addEventListener('click', (e) =>{
            
    if(e.target.textContent.charCodeAt(0) > 47 && e.target.textContent.charCodeAt(0) < 58 && !operator){
        resultDisplay.textContent = '' 
        firstNum = firstNum + e.target.textContent
        displayVar = displayVar + e.target.textContent
    }else if(e.target.textContent.charCodeAt(0) < 48 && firstNum){
        operator = e.target.textContent
        displayVar = displayVar + e.target.textContent
    }else if(firstNum && e.target.textContent.charCodeAt(0) > 47 && e.target.textContent.charCodeAt(0) < 58){
        secondNum = secondNum + e.target.textContent
        displayVar = displayVar + e.target.textContent 
    }

    display.textContent = displayVar

})

equal.addEventListener('click', (e) =>{

    operate(operator)
    secondNum = ''
    operator = ''
})


clear.addEventListener('click', (e) =>{
    clearE()
})


let firstNum = '';
let secondNum = '';
let operator = '';
let displayVar = '';
let resultVar = '';


const operate = function(op){

   
    if(op == '+'){
        let result = add(parseInt(firstNum), parseInt(secondNum))
        resultDisplay.textContent = result
        firstNum = result
        displayVar = result
        

    }else if(op == '-'){
        let result = subtract(parseInt(firstNum), parseInt(secondNum))
        resultDisplay.textContent = result
        firstNum = result
        displayVar = result
    }else if(op == '*'){
        let result = multiply(parseInt(firstNum), parseInt(secondNum))
        resultDisplay.textContent = result
        firstNum = result
        displayVar = result
    }else if(op == '/'){
        let result = divide(parseInt(firstNum), parseInt(secondNum))
        resultDisplay.textContent = result
        firstNum = result
        displayVar = result
    }
}

const add = function(a,b){
    
    return a + b
    
    
}

const subtract = function(a,b){
    return a - b
}

const multiply = function(a,b){
    return a * b
}

const divide = function(a,b){
    
    if(b === 0){
        return 'Forbidden by god'
    }else{
        return a / b
    }
    

}

const clearE = function(){
    displayVar = ''
    firstNum = ''
    secondNum = ''
    operator = ''
    resultDisplay.textContent = ''
}

