// ---------------- chapter no 15 ---------------------------------

// question no 1

var arr = [];

// question no 2

var arr1 = ["karachi"];

// question no 3

var arr1 = ["h","i","j","k"];
alert(arr1[2]);

// question no 4

var arr2 = ["h","i","j","k","l","m","n","o"];
alert(arr2.length)

// question no 5

var arr3 = ["karachi"];
arr3[1] = "lahore"

alert(arr3[1])


// ---------------- chapter no 16 ---------------------------------

// question no 1

var arr = ["hello"];

arr.push("world")

alert(arr[1])

// question no 2

var alphabet = ["h","i","j","k"];

alphabet.pop()


// question no 3

var alphabet = ["h","i","j","k"];
alphabet.push("l")



// ---------------- chapter no 16 Array(III) ---------------------------------

// question no 1

var sizes = ["S","M","L","XL","XXL"];
sizes.shift()


// question no 2

var sizes = ["S","M","L","XL","XXL"];
sizes.unshift("one","two","three")

// question no 3

var sizesAdd = ["S","M","XL","XXL"];

sizesAdd.splice(2,0,"L")

// question no 4

var sizesAdd = ["S","M","XL","XXL"];
var regSize = sizesAdd.slice(0,4)


// question no 5

var pets = ["dog","cat","ox","duck","frog"];
pets.splice(1,3,"mouse","cow");


// question no 6

var pets = ["dog","cat","ox","duck","frog"];
pets.splice(1,2)


// question no 7

var pets = ["dog","cat","ox","duck","frog","flea"];
var reduce = pets.slice(3,5)