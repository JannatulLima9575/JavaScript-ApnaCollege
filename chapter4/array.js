// Looping over an Array (Print all the elements of array)

// #for loop 
let arr = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}

// # others example 
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

console.log(fruits);
console.log(fruits.length);

for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]); 
}

// # for of loop 
let heroes = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America', 'Black Panther'];
for(let hero of heroes) {
    console.log(hero);
}
