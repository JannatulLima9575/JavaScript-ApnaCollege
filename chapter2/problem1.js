// # Problem-1: Get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or not.
// prommp use for take input from user.

let number = prompt("Enter a number :");
if (number % 5 === 0) {
    console.log(number, "is a multiple of 5");   
}
else {
    console.log(number, "is NOT a multiple of 5"); 
}