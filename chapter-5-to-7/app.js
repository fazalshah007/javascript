// --------------------------------------------------------------------------

//                             CHAPTER NO 5

// --------------------------------------------------------------------------

// Qno 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// ****************   Addition *****************

var num1 = 3;
var num2 = 5;
var add = num1 + num2;
document.write("<h1>Sum of "+num1+ " and "+num2 +" is "+add+"</h1>");

// ############################################################################################

// Qno 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// ****************   subtraction *****************

var num3 = 3;
var num4 = 5;
var sub = num1 - num2;
document.write("<h1>Sub of "+num3+ " and "+num4 +" is "+sub+"</h1>");

// ****************   multiplication *****************

var num5 = 3;
var num6 = 5;
var mult = num1 * num2;
document.write("<h1>multiplication of "+num5+ " and "+num6 +" is "+mult+"</h1>");

// ****************   division *****************

var num7 = 3;
var num8 = 5;
var division = num1 / num2;
document.write("<h1>division of "+num7+ " and "+num8 +" is "+division+"</h1>");
// ****************   modulus *****************

var num9 = 3;
var num0 = 5;
var division = num1 % num2;
document.write("<h1>modulus of "+num9+ " and "+num0 +" is "+division+"</h1>");

document.write("<br>")

// ###########################################################################################

// Qno 3. Do the following using JS Mathematic Expressions.
// -----------------------------------------------------------
// a. Declare a variable.
var number;

// ------------------------------------------------------------
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("<h2>after variable declaration is: "+ number +"</h2>");

// -------------------------------------------------------------

// c. Initialize the variable with some number.
number = 5;

// -----------------------------------------------------------------

// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("<h2>initial value: "+ number +"</h2>");

// --------------------------------------------------------------------

// e. Increment the variable.
number++

// ----------------------------------------------------------------

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("<h2>value after increment is: "+ number +"</h2>");

// --------------------------------------------------------------------

// g. Add 7 to the variable.

number = number + 7

// ---------------------------------------------------------------

// h. Show the value of variable in your browser like “Value
document.write("<h2>value after adding 7: "+ number +"</h2>");

// --------------------------------------------------------------------

// i. Decrement the variable.
number--

// ------------------------------------------------------------------------

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("<h2>value after decrement is: "+ number +"</h2>");

// --------------------------------------------------------------------------

// k. Show the remainder after dividing the variable’s value
// by 3.
var reminder = number % 3

// ----------------------------------------------------------------------

// l. Output : “The remainder is : 0”.
document.write("<h2>value after reminder is: "+ reminder +"</h2>");

document.write("<br>")


// ######################################################################################################

// Qno 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var ticketBook = 5;
var totalTicketPrice = 600 * 5;
document.write("<h1>Total Cost to buy "+ticketBook+ " Tickets to a movie is "+ totalTicketPrice +" PKR</h1>");

document.write("<br>")


// #######################################################################################################

// Qno 5. Write a script to display multiplication table of any
// number in your browser. E.g
var table = 4;
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

document.write("<br>")

// ###################################################################################

// Qno 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

var priceOfItemIs1 = 650;
var priceOfItemIs2 = 100;
var quantityOfItemIs1 = 3
var quantityOfItemIs2 = 7
var shippingCharges = 100

document.write("<h1>Shopping Cart</h1>")

document.write("<p>Price of item 1 is "+ priceOfItemIs1 +"</p>")
document.write("<p>Quantity of item 1 is "+ quantityOfItemIs1 +"</p>")
document.write("<p>Price of item 1 is "+ priceOfItemIs2 +"</p>")
document.write("<p>Quantity of item 2 is "+ quantityOfItemIs2 +"</p>")

document.write("<h1>Total cost of your order is " + ((priceOfItemIs1*quantityOfItemIs1)+(priceOfItemIs2*quantityOfItemIs2)+shippingCharges) +"</h1>")
document.write("<br>")

// #####################################################################################################################################################

// Qno 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks/totalMarks)*100

document.write("<h1>Mark Sheet</h1>")
document.write("<p>total marks " +totalMarks + "</p>")
document.write("<p>obtained marks " +obtainedMarks + "</p>")
document.write("<p>percentage " +percentage + "</p>")

document.write("<br>")
// #################################################################################################

// Qno 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var currency = 278.14
var pkrAmmount = 100
var exchangeCurrency = currency * pkrAmmount
document.write("<h1>Currency in PKR</h1>")
document.write("<p>Total currency in PKR " +exchangeCurrency + "</p>")
