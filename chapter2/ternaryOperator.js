// # ternary operator is a special operator bcz its work on three operands
// condition ? true output : false output
let age = 20;
let result = age > 18 ? "adult" : "not adult"; //similar, compact if-else
console.log(result); //adult

// nested ternary operator 
let age2 = 20;
let result2 = age2 > 18 ? "adult" :
    age2 < 18 ? "child" : "Not adult";
    console.log(result2);