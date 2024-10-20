// ****************** Chapter 31 to 34 *************************

// ques no 1: Write a program that displays current date and time in
// your browser.

var currentDate = new Date();
console.log(currentDate);

// ques no 2:

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var d = new Date();
var name = month[d.getMonth()];
console.log(`current month is: ${name}`);

// ques no 3: Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var day = new Date();
var currentDay = day.toString().slice(0,4);
alert(currentDay)

// ques no 4: Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var day2 = new Date();
var currentDay2 = day.toString().slice(0,4);
if (currentDay2 === "sat" || currentDay2 === "sun") {
    alert("it's fun day")
}else{
    alert("go backto work")
}

// ques no 5: Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

for(i=1; i<=30; i++){
    console.log(`day ${i}`)
    if(new Date().getDate() === i){
    console.log(`this day is last of the month`)
        break;
    }
}

// ques no 6: Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var currentDate = new Date("Sat Dec 05 2015 22:32:23 GMT+0500 (PKT)");

var elapsedMilliseconds = currentDate.getTime();

var elapsedMinutes = elapsedMilliseconds / (1000 * 60);

console.log("Current Date: " + currentDate);
console.log("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds);
console.log("Elapsed minutes since January 1, 1970: " + elapsedMinutes);

// ques no 7: Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

if(new Date().toLocaleString().slice(20) === "PM"){
    alert("its: PM")
}
else{
    alert("its: AM")

}

// ques no 8: Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date("Thu Dec 31 2020 00:00:00 GMT+0500 (PKT)");
console.log(laterDate);

// ques no 9: Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadanStart = new Date("June 18, 2015");
var currentDate = new Date();
var timeDifference = currentDate.getTime() - ramadanStart.getTime();
var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert("Number of days past since 1st Ramadan (June 18, 2015): " + daysPast);

// ques no 10: Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var referenceDate = new Date();
var startOf2015 = new Date("January 1, 2015 00:00:00");
var timeDifference = referenceDate.getTime() - startOf2015.getTime();
var elapsedSeconds = Math.floor(timeDifference / 1000);

console.log("Seconds that elapsed between the reference date and the beginning of 2015: " + elapsedSeconds);

alert("Seconds that elapsed between the reference date and the beginning of 2015: " + elapsedSeconds);

// ques no 11: Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age = +prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

alert("Your birth year is: " + birthYear);

console.log("Your birth year is: " + birthYear);

// ques no 12: Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


var customerName = "Fazal Shah";           
var currentMonth = "October";            
var numberOfUnits = 220;            
var chargesPerUnit = 18.50;         
var latePaymentSurcharge = 250;           

var netAmountPayable = numberOfUnits * chargesPerUnit;
netAmountPayable = netAmountPayable.toFixed(2); 

var grossAmountPayable = parseFloat(netAmountPayable) + latePaymentSurcharge;
grossAmountPayable = grossAmountPayable.toFixed(2); 

var billDetails = 
    "Customer Name: " + customerName + "\n" +
    "Current Month: " + currentMonth + "\n" +
    "Number of Units: " + numberOfUnits + "\n" +
    "Charges per Unit: " + chargesPerUnit + "\n" +
    "Net Amount Payable (within Due Date): " + netAmountPayable + "\n" +
    "Late Payment Surcharge: " + latePaymentSurcharge + "\n" +
    "Gross Amount Payable (after Due Date): " + grossAmountPayable;

console.log(billDetails);  
alert(billDetails);      
