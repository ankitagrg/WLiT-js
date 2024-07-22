function add(x, y) {
    return x + y;
}

function divide(x, y) {
    return x / y;
}
console.log(compute(add, 10, 5));       
console.log(compute(divide, 10, 5)); 


function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function compute(callBack, x, y) {
    return callBack(x, y);
}

   
console.log(compute(subtract, 10, 5));  
console.log(compute(multiply, 10, 5)); 
