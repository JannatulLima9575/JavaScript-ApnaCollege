// for in loop basically used for object iteration. 
// basic syntax: for(let key in object) {do something}

let person = {
    name: 'john',
    age: 25,
    class: 12,
    address: 'Dhaka, Bangladesh',
};
for (let i in person) {
    console.log(i, person[i]);
}