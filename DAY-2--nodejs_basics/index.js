//conditional statements

console.log("if statement");
//true
let age=18;
if (age >=18){
    console.log("you can vote")
}
//or flase
let a=17;
if (a >=18){
    console.log("you can vote")
}

console.log("if-else statement");
// if statement true
let b=20;
if (b >= 25){
    console.log("b is big num");
} else{
    console.log("b is small num");
}

// if statement flase then else statement is extute
let c=30;
if (c >= 25){
    console.log("c is big num");
} else{
    console.log("c is small num");
}

console.log("else-if statement");
let marks=30;
if (marks >= 90){
    console.log("Grade A");
} else if(marks >= 75){
    console.log("Grade b");
} else if(marks >= 50){
    console.log("Grade c");
} else{
    console.log("fail");
}


console.log("Nested if statement");
const isLoggedin=true;
const isAdmin=false;

if(isLoggedin){
          console.log("user log in");
    if(isAdmin){
        console.log("access admin dashboard");
    }else {
        console.log("access user dashboard");
    }
} else{
    console.log("please login first");
}


console.log("Switch statement");
//Day finder
const day = 4;

switch (day){
    case 1:
        console.log("mon");
        break;
    case 2:
        console.log("tue");
        break;
    case 3:
        console.log("wed");
        break;
    case 4:
        console.log("thu");
        break;
    case 5:
        console.log("fri");
        break;
    case 6:
        console.log("sat");
        break;
    case 7:
        console.log("sun");
        break;

}

console.log("Ternary operator statement");

const mark = 35;
const result=mark >=35 ? "pass" : "fail";
console.log(result);