// conditional Statements

let age = 18;
if (age >= 18) {
    console.log('You are eligible to vote');
}
else {
    console.log('You are not eligible to vote');
}

// # check current mode 
let mode = 'dark';

if (mode === 'dark') {
    color = 'black';
}
else if (mode === 'light') {
    color = 'white';
}
else {
    color = 'normal';
}
console.log(color);

// Fnd even and odd Number 
let number = 10;
if (number % 2 === 0) {
    console.log(number, 'Even Number');
}
else {
    console.log(number, 'Odd Number');
}

// # else-if statement 
let menAge = 18;

if (menAge <= 18) {
    console.log('junior');
}
else if (menAge > 60) {
    console.log('senior');
}
else {
    console.log('middle');
}


// # check the grade of students
let marks = 90;

if (marks >= 90) {
    console.log('Grade A');
}
else if (marks >= 80) {
    console.log('Grade B');
}
else if (marks >= 70) {
    console.log('Grade C');
}
else if (marks >= 60) {
    console.log('Grade D');
}
else if (marks >= 50) {
    console.log('Grade E');
}
else {
    console.log('You are failed');
}