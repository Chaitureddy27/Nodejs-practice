console.log("functions and type");
console.log("Normal function");

function add(a,b){
    return a+b;
}
console.log(add(4,69));

console.log("check the odd or even use the function");
function checkEvenOdd(num){
    if(num % 2 == 0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(checkEvenOdd(8));

console.log("simple calculator using normal function");

function calculator(a,b,operator){
    if(operator === "+") return a+b;
    if(operator === "-") return a-b;
    if(operator === "*") return a*b;
    if(operator === "/") return a/b;
    if(operator === "%") return a%b;
    return "invalid operator";
}
console.log(calculator(9,5,"^"));



console.log("function expression");

console.log("simple example");
const sub = function(a,b){
    return a-b;
}
console.log(sub(2,5));


console.log("sum of array use function expression");
const sumArray = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([9,67,54,3,74,23,64,344]));


console.log("Arrow function")
const multiply = (a,b) => {
    return a*b;
}
console.log(multiply(4,5));

console.log("factorial program using arrow function");

factorial = (n) =>{
    let result = 1;
    for(let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

console.log(factorial(8));


console.log("Anonymous function");
setTimeout(function(){
    console.log("hello after 2 seconds");
},2000);
