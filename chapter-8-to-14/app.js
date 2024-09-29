// -----------------------  chapter 10 ---------------------------

// Question No 1

var city = "karachi";
if(city === "karachi"){
   console.log("the city of light");
}else{
    console.log("welcome to pakistan")
};

// question no 2

var x = 10;
var y = 10;
var z;
if(x === y){
    z = +prompt("enter a value");
}else {
    z = x;
};

// question no 3

var zipCode = "10010";
if(zipCode === "10010"){
    alert("Karachi");
}else{
    alert("enter correct city code ");
};

// question no 4

let x = 1;

if (x === 1) {
    x = 10; 
}
console.log(x);

// ----------------------- chapter no 11  ----------------------------

// question no 1

var a = 10;
var b = 10;
if(a !== b){
    a = 20;
}else{
    b = 30
}

// question no 2

var a = 10;
var b = 10;
if(a >= b){
    a = 20;
}else{
    b = 30
}

// question no 3

let x = 5; 

if (x !== 10) {
    x = 20; 
}
console.log(x); 

// question no 4

let num1 = 5;
let num2 = 10; 


if (num1 !== num2) {
    alert("Congratulations!"); 
}

// question no 5


let firstName = prompt("Please enter your first name:");

let anotherName = "Fazal"; 
if (firstName !== anotherName) {
    alert("No match"); 
}

// -------------------- chapter no 12 -------------------------------

// question no 1

let a = 15; 
let b = 10; 

if (a >= b) {
    alert("a is greater than or equal to b"); 
} else {
    alert("a is less than b"); 
}

// question no 2


let totalMarks = 100;
let marksObtained = +(prompt("Enter your marks obtained out of 100"));
let percentage = (marksObtained / totalMarks) * 100;

let grade;

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 75) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'Fail'; 
}

alert(`Your grade is ${grade}`);

// question no 3

let a = prompt("Enter the value of a:"); 
a = Number(a);

if (a === 10) {
    alert("a is 10");
} else {
    alert(`The correct value of a is ${a}`); 
}

// question no 4


let city = prompt("Please enter a city:");

if (city === "Karachi") {
    alert("welcome to Karachi!");
} else if (city === "Lahore") {
    alert("welcome to Lahore!");
}else {
    alert("Try the correct one.");
}


// -------------------- chapter no 13 -------------------------------

// question no 1

var a=10;
var b=10;
var c=20;
var d=20;
if (a === b && c === d) {
    alert("yes, all these are true")
}else{
    alert("No, that is not true")

}

// question no 2


var a=10;
var b=15;
var c=20;
var d=25;
if (a !== b || c !== d) {
    alert("yes, all these are true")
}else{
    alert("No, that is not true")
    alert("yes, all these are true")
}

// question no 3

var name = prompt("enter your name")
var age = +prompt("enter your age")

if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    alert("your age is register for CNIC")
}else{
    alert("sorry! your name or age is incorrect")

}


// -------------------- chapter no 14 -------------------------------

// question no 1


let password = prompt("Enter your password:");

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK"); 
    }
} else {
    alert("Password cannot be empty"); 
}

// question no 2

let a = prompt("Enter a number (1 or something else):");
let c = prompt("Enter a name Max number");


if (a === "1") { 
   
    if (c === "Max") {
        alert("OK"); 
    }
}

// question no 3


let a = prompt("Enter a number (1 or something else):");
let c = prompt("Enter a name Max number'):");

if (a === "1" && c === "Max") {
    alert("OK"); 
}


// question no 4


var num = 5;
var num = 5;


if (num === num) {
    
    if (num <= num) {
        alert("Both conditions are true: num1 equals num2 and num1 is less than or equal to num2.");
    }
}





