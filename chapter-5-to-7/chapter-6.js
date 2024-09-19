// --------------------------------------------------------------------------

//                             CHAPTER NO 6

// --------------------------------------------------------------------------

// Qno 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10
document.write("<h1>Result: <br> the value of a is: "+ a +"</h1>")
document.write("<h1>---------------------------------------------------------------------------------------------------------------------</h1>")

++a
document.write("<h1>the value of ++a is: "+ a +"<br> Now the value of a is: "+ a + "</h1>")
// ############################################################################
// Qno 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;


document.write("<h1>a is: " + a +" <br> b is: " + b + " <br> result is: " + result + "</h1>")

document.write("<h1>---------------------------------------------------------------------------------------------------------------------</h1>")


// ####################################################################################################

// Qno Write a program that takes input a name from user &
// greet the user.

var userNameGet = prompt("Enter your name here!")
document.write("<h1>Hello, <u>"+ userNameGet + "</u></h1>")

document.write("<h1>---------------------------------------------------------------------------------------------------------------------</h1>")



// #####################################################################################################

// Qno 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var table = +prompt("which table you can search for:", 5);
document.write("<h1>Table Of "+ table+"</h1>")

document.write("<h1>"+table+" x " + 1 + " = " + (1*table)+"<h1>" )
document.write("<h1>"+table+" x " + 2 + " = " + (2*table)+"<h1>" )
document.write("<h1>"+table+" x " + 3 + " = " + (3*table)+"<h1>" )
document.write("<h1>"+table+" x " + 4 + " = " + (4*table)+"<h1>" )
document.write("<h1>"+table+" x " + 5 + " = " + (5*table)+"<h1>" )
document.write("<h1>"+table+" x " + 6 + " = " + (6*table)+"<h1>" )
document.write("<h1>"+table+" x " + 7 + " = " + (7*table)+"<h1>" )
document.write("<h1>"+table+" x " + 8 + " = " + (8*table)+"<h1>" )
document.write("<h1>"+table+" x " + 9 + " = " + (9*table)+"<h1>" )
document.write("<h1>"+table+" x " + 10 + " = " + (10*table)+"<h1>" )

document.write("<h1>---------------------------------------------------------------------------------------------------------------------</h1>")

// ############################################################################

// Qno 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var englishSubject = +prompt("Enter your english marks:");
var mathSubject = +prompt("Enter your Math marks:");
var urduSubject = +prompt("Enter your Urdu marks:");
var totalObtainedMarks = 100

document.write("<h1>Subject total marks Obtained Marks percentage</h1>")
document.write("<h2>English "+ totalObtainedMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ englishSubject +  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ ((englishSubject/totalObtainedMarks)*100) +"%</h2>")

document.write("<h2>Urdu "+ totalObtainedMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ urduSubject +  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ ((urduSubject/totalObtainedMarks)*100) +"%</h2>")

document.write("<h2>Math "+ totalObtainedMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ mathSubject +  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ ((mathSubject/totalObtainedMarks)*100) +"%</h2>")

document.write("<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ (totalObtainedMarks*3) +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +(englishSubject+urduSubject+mathSubject) +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ ((englishSubject+urduSubject+mathSubject)/(totalObtainedMarks*3)*100) +"%</h1>")



// #################################################################################################

