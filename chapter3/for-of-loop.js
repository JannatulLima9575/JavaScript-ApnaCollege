// Basic syntax of for-of loop which use for string and Array 
for(let char of "Hello") {
    console.log(char);
}

// # sum the all of Number using for of loop 
let numbers = [1,2,3,4,5,6];
let sum = 0;
for(let number of numbers) { //iterate over the numbers array
    sum = sum + number;
}
console.log(sum);


// find the length of the string using for of loop
let str = "Bangladesh";
let length = 0;
for (let char of str) {
    length++
}
console.log("The total length of Bangladesh is : ", length);
