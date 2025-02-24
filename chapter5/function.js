// Function is a block of code that performs a specific task, can be invoked whenever needed 
function sum( a, b){
    let add = a + b;
    return add;
}
let result = sum(5, 10);
console.log(result);

//# Arrow Function - Compact way of writing a function 
const sub =(a, b) => { 
    console.log(a - b); 
}
sub(20, 5);
//note: its a modern method