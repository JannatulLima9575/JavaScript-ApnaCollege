// Problem-1: For a given array with marks of students -> [85,97,44,37,76,60], Find the average marks of the entire class.
let marks = [85,97,44,37,76,60];
let sum = 0;

for (let value of marks) {
    sum = sum + value;
}
let avg = sum / marks.length
console.log("average marks of the class : ",avg);

// Problem-2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50], All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items = [250, 645, 300, 900, 50];

for(let i = 0; i<items.length; i ++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(items[i]);
}

// Problem-3: Create an array to store companies -. "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix" ; a. Remove the first company from the array, b. Remove the Uber and Add ola in its place, c.Add Amazon at the end.
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");
console.log(companies);