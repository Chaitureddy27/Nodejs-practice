//for loops 
console.log("for loops");
console.log("tringle");

for (let i = 1; i <= 5; i++ ){
    let row = "";
    for (let j = 1; j <= i; j++){
        row +="x ";
    }
    console.log(row);
}

console.log("odd numbers");

for (let i = 2; i <= 10; i++){
    if (i % 2!==0){
        console.log(i);
    }
}

console.log("while loops");

let i  =1;
while (i <= 10){
    console.log(i);
    i++;
}


console.log("even numbers");

let a = 2;

while (a <= 10){
    console.log(a);
    a=a+2;
}


console.log("odd numbers");

let b = 1;

while (b <= 10){
 if (b % 2 !== 0){
    console.log(b);
 }
 b++;
}


console.log("Do while loops");

let  c = 1;
do{
    console.log(c);
    c++;
}while (c <= 0);

console.log("even numbers using do while");
let  d=1;
do{
    if(d%2==0){
        console.log(d);
    }
    d++;
}while(d<=10);

console.log("odd numbers using do while");
let e=1;
do{
    console.log(e);
    e+=2;
}while(e<=10);


console.log("forEach loops")


console.log("matrix print using forEach loop");

const matrix=[
    [1,2,3],
    [9,8,7]
];
matrix.forEach(row => {
    let line = "";
    row.forEach(value => {
        line += value + " ";
    });
    console.log(line);
});