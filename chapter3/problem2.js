// problem-2 : Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNumber = 25;
let userNumber = prompt("Guess the game number : ");

while(userNumber != gameNumber) {
    userNumber = prompt("You enter the wrong number. Guess again : ");
}
console.log("Congratulations! You have passed the game");
