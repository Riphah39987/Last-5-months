// ================================
// 1. Combining two arrays
// ================================

const heros = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"];

const heros2 = [
    "Black Panther",
    "Doctor Strange",
    "Black Widow",
    "Hawkeye",
    "Ant-Man"
];

// ... (spread operator) takes all elements from both arrays
// and puts them into one new array.
const allheros = [...heros, ...heros2];

console.log(allheros);


// ================================
// 2. Nested Arrays
// ================================

// This array contains other arrays inside it.
const another_array = [
    [1, 3, 2, 4, 5, 3],
    [44, 4, 3, 2, [3, 45, 2, 24, 4]]
];


// ================================
// 3. flat(Infinity)
// ================================

// flat(Infinity) removes ALL levels of nested arrays.
// Everything becomes one single array.

const combine_all_number = another_array.flat(Infinity);

console.log(combine_all_number);


// ================================
// 4. flat(2)
// ================================

// flat(2) removes TWO levels of nested arrays.
// If there is another level deeper, it will remain nested.

const combine_all_number2 = another_array.flat(2);

console.log(combine_all_number2);


// ================================
// 5. Array.isArray()
// ================================

// Checks whether a value is an array or not.

// "umar" is a string, NOT an array.
console.log(Array.isArray("umar")); // false


// ================================
// 6. Array.from()
// ================================

// Converts an iterable value (like a string) into an array.

// "umar_khalid" becomes:
// ["u", "m", "a", "r", "_", "k", "h", "a", "l", "i", "d"]

console.log(Array.from("umar_khalid"));


// Objects are NOT automatically converted into arrays
// using Array.from().
// That's why this returns an empty array: []

console.log(Array.from({
    name: "umar",
    age: 22
}));


// ================================
// 7. Array.of()
// ================================

// Takes multiple values and creates an array from them.

let score1 = 100;
let score2 = 400;
let score3 = 200;

console.log(Array.of(score1, score2, score3));

// Result:
// [100, 400, 200]
