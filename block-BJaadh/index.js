
// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]
*/
let clonednumbers = [...numbers];
let clonedstrings = [...strings];

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");
// strings.splice(0,0,"called", "sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));

// - Remove the first word in the array (strings)
// console.log(strings.shift());

// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((string) => string.includes("is")
);
console.log(allIs);


// - Find all the words that contain 'is' use string method 'indexOf'
let allIsagain = strings.filter((string) => string.indexOf("is") !== -1);
console.log(allIsagain);


// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divbythree = numbers.every((num) => {
    return num % 3;
})
console.log(divbythree);

// -  Sort Array from smallest to largest
[...numbers].sort((a, b) => {
    return a - b;
});
console.log(numbers);

strings.sort();
console.log(strings);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
console.log(numbers[numbers.length - 1]);

// - Find longest string in strings
let strlen = 0;
let index;
strings.forEach((str, ind) => {
    // console.log(str.length);
    if (str.length > strlen) {
        strlen = str.length;
        index = ind;
    }
})
console.log(strings[index]);

// - Find all the even numbers
let even = numbers.filter((num) => {
    return num % 2 == 0;
})
console.log(even);

// - Find all the odd numbers
let odd = numbers.filter((num) => {
    return num % 2 !== 0;
})
console.log(odd);

// - Place a new word at the start of the array use (unshift)
strings.unshift("new")
console.log(strings);

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers);
console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']
console.log(strings);


// - Replace 12 & 18 with 1221 and 1881
console.log(numbers.map((num) => {
    if (num == 12) {
        return 1221;
    } else if (num == 18) {
        return 1881;
    } else
        return num;
}))

// - Replace words in strings array with the length of the words

let stringlength = strings.map((string) => string.length);

// - Find the sum of the length of words using above question
// let sum = 0;
// stringlength.forEach((x) => {
//     sum += x;
// })
// console.log(sum);

console.log(
    stringlength.reduce((acc, cv) => {
        acc = acc + cv;
        return acc;
    }, 0)
);
// - Customers Array
var customers = [
    { firstname: 'Joe', lastname: 'Blogs' },
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'Dave', lastname: 'Jones' },
    { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let customerstartswithJ = customers.filter((user) => {
    return user.firstname.startsWith("J")
})
console.log(customerstartswithJ);


// - Create new array with only first name
let onlyfirstname = [];

customers.forEach((cust) => {
    onlyfirstname.push(`${cust.firstname}`);
})
console.log(onlyfirstname);

// - Create new array with all the full names (ex: "Joe Blogs")
let fullname = [];

customers.forEach((cust) => {
    fullname.push(`${cust.firstname} ${cust.lastname}`);
})
console.log(fullname);
// - Sort the array created above alphabetically
customers.sort();
console.log(customers);

// - Create a new array that contains only user who has at least one vowel in the firstname.
let newa = [];
customers.filter((cus) => {
    if (cus.firstname.startsWith('a', 'e', 'i', 'o', 'u')) {
        newa.push(cus);
    }
})
console.log(newa);
