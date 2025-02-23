// # for loop - for loops are used for execute a piece of code again and again. 
// for(initializatuion; conditon; increment/decrement) {code executed}

//  basic syntax of loop
for (let i = 0; i<=10; i++) {
    console.log(i);  
    console.log('i can accheive javascript');
}

// calculate sum of 1 to 10
let sum = 0;
for (let i = 1; i<=10; i ++) {
    sum += i;
    // sum = sum + i; 
}
console.log(sum);

// calculate sum of 1 to n 
let add = 0;
let n = 5;
for (let i = 1; i<=n; i ++) {
    add += i;
    // add = add + i; 
}
console.log(add);