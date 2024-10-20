// ******************** Chapter 35 to 37 *****************************

// ques no 1: Code the first line of a function displayAlert.

function displayAlert(){
    alert("function call")
}

displayAlert()

// ques no 2: Code a function named askName that prompts the user to
// &quot;Enter name&quot; and assigns the answer to userName, which
// hasn&#39;t been declared beforehand.

function userName(name){
    alert("hello " +name)
}

userName(prompt("enter your name"));

// ques no 3: Code a function that calls 2 other functions.

function calls (){
    alert("calling...")
}

function otherFunc(){
    calls()
}
function anOtherFunc(){
    calls()
}

otherFunc()
anOtherFunc()

// ques no 4:Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that
// takes a variable, a string, and a number as arguments.

function concat(a,b,c){
    console.log(a + b + c)
}

concat("hello",5,true)

// ques no 5: Code a function that has 2 parameters. Concatenate them
// and assign the result to a variable that hasn&#39;t been declared
// beforehand.

function concatenation(a,b){
    console.log(a+b);
}

concatenation(44,55)

// ques no 6: Code a function that has three parameters. Multiply them
// and assign them to a variable that hasn&#39;t been declared yet.

function Multiplication(a,b,c){
    console.log(a*b*c);
}
Multiplication(10,22,30)

// ques no 7: Write a JavaScript function that takes an array of numbers
// as input and returns the average of those numbers.

function calculateAverage(numbers) {
    var sum = 0;
    
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}

var numArray = [10, 20, 30, 40, 50];
var avg = calculateAverage(numArray);
console.log("The average is: " + avg);

// ques no 8: Write a JavaScript function that takes two parameters and
// returns their sum.

function sum(a,b){
    return a+b;
}

var data = sum(44,67)
console.log(data);

// ques no 9: Write a function which tells letter counts of (word).

function counts (word){
    console.log(word.length);
    
}
counts("hello world")

// ques no 10: Write a function to set (year) in date object.

function dateObj (date){
    console.log(new Date().setFullYear(date));
}
dateObj("2025")

// ques no 11: Write a function which tells the age of a person who Born on
// (dateOfBirth)

function bornDate(age){
    
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

console.log("Your birth year is: " + birthYear);
}

bornDate(+prompt("enter your age"))

// ques no 12: Write a function which tells the presense of (word) in an
// array =
// [&#39;zaid&#39;,&#39;haris&#39;,&#39;raza&#39;,&#39;abubakar&#39;,&#39;hassan&#39;,&#39;hussain&#39;,&#39;fatima&#39;]
// result should be in true or false

var arr = ["zaid","haris","raza","abubakar","hassan","hussain","fatima"]

function presense(name,array){
    for(i=0; i<array.length; i++){
        if(name === array[i]){
            return true
        }else{
            return false
        }
    }
}

var result = presense(prompt("enter your name"),arr)
console.log(result);

// ques no 13: Write a function which repeat (letter) 10 times. Hint:
// &quot;abcde&quot; str.repeat(10)

function repeat(str){
    console.log(str.repeat(10));
    
}
repeat("abcde")

// ques no 14: write a function which reverse array = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;] Hint:
// arr.reverse()

function reverseArr(str){
    console.log(str.reverse());
}

reverseArr(['a','b','c','d'])

// -------------------------  END  ----------------------------

// ********************** Chapter 38 ************************

// ques no 1:Write a JavaScript function that demonstrates the usage of a local
// variable.

function localVariable(){
    var local = 5 // its a local variable
}

// ques no 2: How can you access a global variable inside a function in
// JavaScript?

var localVar = 5;  // global variable

function func(){
    localVar = 15; // local variable
}

// ------------------   END    ----------------------------------------

// ********************* Chapter 39 to 40 ********************************


// ques no 1: Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.



var userInput = prompt("Enter day of week");

userInput = userInput.slice(0, 3).toLowerCase();

switch (userInput) {
  case "mon":
    alert("Monday is working day...");
    break;

  case "tue":
    alert("tuesday is working day...");
    break;

  case "wed":
    alert("wednesday is working day...");
    break;

  case "thu":
    alert("thursday is working day...");
    break;

  case "fri":
    alert("friday is working day...");
    break;

  case "sat":
    alert("saturaday is rest day...");
    break;

  case "sun":
    alert("sunday is family day...");
    break;

  default:
    alert("invalid input");
}


// ques no 2: Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

var cityToCheck = prompt("Enter your city").toLocaleLowerCase();

 switch (cityToCheck) {
    case "karachi":
        alert(" your welcome to karachi")
        break;
    case "lahore":
        alert(" your welcome to lahore")
        break;
    case "islamabad":
        alert(" your welcome to islamabad")
        break;
    case "multan":
        alert(" your welcome to multan")
        break;
 
    default: alert("sorry your city is not here")
        break;
 }
