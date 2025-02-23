// # problem-2 : write a program thats takes a score as input and prints the grade according to the following rules: 

let score = prompt("Enter your score (0-100)");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
}
else if (score >= 70 && score <= 89) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "C";
}
else if (score >= 50 && score <= 59) {
    grade = "D";
}
else if (score >= 50 && score <= 49) {
    grade = "F";
}
console.log("according to your score, your grade is : ", grade);