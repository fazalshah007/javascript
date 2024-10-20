// --------------------- chapter 17 to 20  ------------------------------

// Ques no 1: Declare and initialize an empty multidimensional array.(Array of arrays)

var multiArray = [[],[],[]];

// ques no 2: Declare and initialize a multidimensional array representing the following matrix:

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// ques no 3: Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
    console.log(`<h1>${i}</h1>`);
}

// ques no 4: Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableNumber = parseInt(prompt("Enter the table number"));
var tableLength = parseInt(prompt("Enter the length of the table"));

for (var i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// ques no 5: Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(`element at index ${i} is ` + fruits[i]);
}

// ques no 6: Generate the following series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
document.write("Counting: " + counting.join(", "));

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
document.write("Reverse counting: " + reverseCounting.join(", "));

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

var evenNumbers = [];
for (var i = 0; i <= 20; i += 2) {
    evenNumbers.push(i);
}
document.write("Even: " + evenNumbers.join(", "));

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

var oddNumbers = [];
for (var i = 1; i < 20; i += 2) {
    oddNumbers.push(i);
}
document.write("Odd: " + oddNumbers.join(", "));

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var series = [];
for (var i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
document.write("Series: " + series.join(", "));

// ques no 7: You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var bakes = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome! What do you want to order?");

var item = userInput.toLowerCase();

var isFound = false;
var index = -1;

for (var i = 0; i < bakes.length; i++) {
    if (bakes[i].toLowerCase() === item) {
        isFound = true;
        index = i;
        break;
    }
}

if (isFound) {
    alert(userInput + " is available at index " + index + " in our bakery.");
} else {
    alert("We are sorry, " + userInput + " is not available in our bakery.");
}

// ques no 8: Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var bigNumber = [24, 53, 78, 91, 12];
var largest = bigNumber[0]; 

for (var i = 1; i < bigNumber.length; i++) {
    if (bigNumber[i] > largest) {
        largest = bigNumber[i]; 
    }
}
console.log("The largest number in the array is: " + largest);

// ques no 9: Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var smallNumber = [24, 53, 78, 91, 12];
var smallest = smallNumber[0]; 

for (var i = 1; i < smallNumber.length; i++) {
    if (smallNumber[i] < smallest) {
        smallest = smallNumber[i];
    }
}

console.log("The smallest number in the array is: " + smallest);

// --------------------------------------- END -----------------------------------------

// --------------------- chapter 21 to 25 ----------------------------------------

// ques no 1: Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var first = prompt("enter your first name")
var last = prompt("enter your last name")
var fullName = first+last;
console.log(fullName);

// ques no 2: Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favMobile = prompt("whats your favorite mobile model.")
console.log(`my favorite phone is ${favMobile} and length is ${favMobile.length}`);

// ques no 3: Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var str = "pakistani";
console.log("index of 'n' is " +str.indexOf("n"));

// ques no 4: Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var strLastIndexOf = "hello world";
console.log("last index of 'l' is "+ strLastIndexOf.lastIndexOf("l"));

// ques no 5: Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


var strChar = "pakistani";
console.log("character of 3rd index is " + strChar.charAt(3));

// ques no 6: Repeat Q1 using string concat() method.

var first = prompt("enter your first name")
var last = prompt("enter your last name")
var fullName = first.concat(last);
console.log(fullName);

// ques no 7: Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var yourCity = prompt("enter your city.")
var change = yourCity.replace(yourCity,"hyderabad")

// ques no 8: Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceMessage = message.replaceAll("and","&")
console.log(replaceMessage);


// ques no 9: Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var num = "472";
var num2 = 472;
var numParse = parseInt(num)
var strParse = num2.toString()
console.log(`value:${num}, type: ${typeof numParse}`);
console.log(`value:${num2}, type: ${typeof strParse}`);

// ques no 10: Write a program that takes user input. Convert and
// show the input in capital letters.

var inputs = prompt("enter a text value")
console.log(inputs.toLocaleUpperCase())

// ques no 11: Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var strNum = num.toString().replace(".", ""); 
console.log(strNum);
// ----------------------- END -----------------------------------------

// ---------------- chapter 26 to 30 -----------------------------------------

// ques no 1: Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
var number = 3.45214
// b. round off value of the number
console.log(Math.round(number))
// c. floor value of the number
console.log(Math.floor(number))
// d. ceil value of the number
console.log(Math.ceil(number))

// ques no 2: Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
var negativeNumber = -2.673
// b. round off value of the negativeNumber
console.log(Math.round(negativeNumber))
// c. floor value of the negativeNumber
console.log(Math.round(negativeNumber))
// d. ceil value of the negativeNumber
console.log(Math.round(negativeNumber))

// ques no 3: Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var abs = -4;
console.log(Math.abs(abs));

// ques no 4: Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var dice = Math.random();
console.log(Math.floor(dice * 10) + 1);

// ques no 5: Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.floor(Math.random() * 6 + 1);


if (toss === 0) {
  alert(headUser + "win the toss");
} else {
  alert(tailUser + "win the toss");
}

// ques no 6: Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var userInput = prompt("enter you weight in kilograms")

if(Number(userInput.slice(0,4))){
    alert(`the weight of user is ${userInput.slice(0,4)} kilograms`)
}else if(Number(userInput.slice(0,2))){
    alert(`the weight of user is ${userInput.slice(0,2)} kilograms`)
}else{
    alert("enter the correct kilograms")
}

// ques no 7: Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var randomNumber = Math.floor(Math.random() * 10) + 1;
var secretNumber = +prompt("enter a random number into 1 to 10")

if(randomNumber === secretNumber){
    alert("congratulations you win")
}else{
    alert("Please try again later")
}

// -----------------  End -----------------------------
