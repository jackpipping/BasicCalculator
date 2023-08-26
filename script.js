
let aa = 1;
let bb = 2;
let operator = "+";

function add(a,b){
    let a1 = +a;
    let b1 = +b;
    return a1+b1;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a1,operator,b1){
    switch(operator){
        case "+":
            return add(a1,b1);
        break;
        case "-":
            return substract(a1,b1);
        break;
        case "*":
            return multiply(a1,b1);
        break;
        case "/":
            return divide(a1,b1);
        break;
    }
}

function clicked(x){
    screenInput.push(x);
    let screenOutput = screenInput.join("");
    screen.innerHTML = screenOutput;
    if(x == "="){
        clear1;
        screen.innerHTML = doCalculation();
        
    }
}

function doCalculation(){
/*
    let a1 = "";
    let b1 = "";
    let operator;
    let counter = 0;
    length1 = screenInput.length;
    for(let i = 0; i <= length1-1; i++){
        if(screenInput[i] == '+' || screenInput[i] == '-' || screenInput[i] == '*' || screenInput[i] == '/'){
            operator = screenInput[i];
            counter++;
        }else{
            if(counter == 0){
                a1 += screenInput[i];
            }else{
                if(screenInput[i] !== '='){
                    b1 += screenInput[i];
                }
            }
        }

    }
    */
    let number = [];
    number[0] = ""; //if it is not done, the number[0] will be undefined5, if 5 is inputed
    let operator1 = [];
    let counter1 = 0; //counter is the number of operators in total in the screen(display) minus 1
    length1 = screenInput.length;
    for(let i = 0; i <= length1-1; i++){ //loop is used to store all the numbers and operators
        if(screenInput[i] == '+' || screenInput[i] == '-' || screenInput[i] == '*' || screenInput[i] == '/'){
            operator1[counter1] = screenInput[i];
            counter1++;
            number[counter1] = "";
        }else{
            if(screenInput[i] == '='){
                
                break;
            }else{
                
                number[counter1] += String(screenInput[i]); //+= does not work properly with number, so it has to be string
                console.log(number[counter1])
            }
        }  
        
    }

    let finalanswer = 0;
    //loop used to calculate the answer using all the numbers and operators
    //it doesn't account for priority operation yet
    for(let j = 0; j <= counter1-1; j++){
        if(j == 0){
            finalanswer = operate(number[j],operator1[j],number[j+1])
        }else{
            finalanswer = operate(finalanswer,operator1[j],number[j+1])
        }
        
    }
    screenInput = [];
    screenInput[0] = finalanswer;
    return finalanswer;
    //screenInput = [operate(number[0],operator1 [0],number[1])];
    //return operate(number[0],operator1 [0],number[1]);
}

function clear1(){
    screenInput = [];
    let screenOutput = screenInput.join("");
    screen.innerHTML= String(0);
}

function delete1(){
    screenInput.pop();
    let screenOutput = screenInput.join("");
    screen.innerHTML= screenOutput;
    if(screenInput[0] == undefined){
        console.log("undefined")
        screen.innerHTML= String(0);
    }
}


let screenInput = [];
let screen = document.getElementById("screen");


  
