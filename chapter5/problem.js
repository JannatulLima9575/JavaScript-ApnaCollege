// Problem-1: Create a function using the "function" keyword that takes a String as an argument and return the number of vowels in the string.
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
let findVowels = countVowels("Cow is a domestic animal");
console.log(findVowels);

// Problem-2: Create an arrow function to perform the same task.
const countVow = (str) => {
    let count = 0;
    for (let char of str) {
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        count++;
    }
    }
    return count;
}
let modernResult = countVow("aeiou");
console.log(modernResult);
