// Task # 01

let num1 = prompt("Please Enter a number.");
let num2 = prompt("Please Enter another number.");

if(num1 > num2) {
    console.log(num1 + " is greater than " + num2)
}
else {
    console.log(num2 + " is greater than " + num1)
};


// Task # 02

let signedNumber = prompt("Plese enter a number with positive OR negative sign.")

if(signedNumber > 0) {
    alert("The number you entered is positive with [+] sign.")
}
else {
    alert("The number you entered is negative with [-] sign.")
}


// Task # 03

let num11 = prompt("Please Enter 1st number.");
let num12 = prompt("Please Enter 2nd number.");
let num13 = prompt("Please Enter 3rd number.");
let num14 = prompt("Please Enter 4th number.");
let num15 = prompt("Please Enter 5th number.");

if(num11 > (num12, num13, num14, num15)) {
    console.log(num11 + " is greater.")
}
else if(num12 > (num11, num13, num14, num15)) {
    console.log(num12 + " is greater.")
}
else if(num13 > (num12, num11, num14, num15)) {
    console.log(num13 + " is greater.")
}
else if(num14 > (num12, num13, num11, num15)) {
    console.log(num14 + " is greater.")
}
else if(num15 > (num12, num13, num14, num11)) {
    console.log(num15 + " is greater.")
}


// Task # 04

let text = ""

for(i = 0; i < 16; i++) {
    if(i % 2 == 0) {
        text += "The number " + i + " is even. ";
    }
    else {
        text += "The number " + i + " is odd. ";
    }
}

console.log(text);


// Task # 05

let mark1 = +prompt("Plese type in your English marks out of 100.")
let mark2 = +prompt("Plese type in your Math marks out of 100.")
let mark3 = +prompt("Plese type in your Urdu marks out of 100.")
let mark4 = +prompt("Plese type in your Islamiat marks out of 100.")
let mark5 = +prompt("Plese type in your Pak-Studies marks out of 100.")

let average = ((mark1 + mark2 + mark3 + mark4 + mark5) / 5)

if(average > 90) {
    console.log("Your grade is A")
}
else if(average > 80) {
    console.log("Your grade is B")
}
else if(average > 70) {
    console.log("Your grade is C")
}
else if(average > 60) {
    console.log("Your grade is D")
}
else {
    console.log("Your grade is F")
}


//Task # 06

let count = ""

for(j = 1; j <= 100; j++) {
    if(j % 3 == 0 && j % 5 == 0) {
        count += "FizzBuzz, ";
    }
    else if(j % 5 == 0) {
        count += "Buzz, ";
    }
    else if(j % 3 == 0) {
        count += "Fizz, ";
    }
    else {
        count += j + ", ";
    }
}

console.log(count);


// Task # 07

let n = 5;
let abc = "";

for(let x = 1; x <=n; x++) {
    for(let y = 1; y <= n; y++) {
        abc += " ";
    }
    for(let z = 0; z < 2 * x - 1; z++) {
        abc += "*";
    }
    abc += "\n";
}

console.log(abc)