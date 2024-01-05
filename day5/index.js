//String Method
let fName = "Jitendra";
let lName = "Raj";
myName = fName.concat(" " + lName)
length = myName.length;
console.log(myName)
console.log(length)


let name = "Vishnu Ganesh";
let name1 = name.at(5);
console.log(name1)

let name2 = name.charCodeAt(1);
console.log(name2)

// String Slicing

let fruits = "Apple, Banana, Mango, Kiwi";
let slicing1 = fruits.slice(1, 5);
let slicing2 = fruits.slice(5);
let slicing3 = fruits.slice(-12);
let slicing4 = fruits.slice(-12, -5);

console.log(slicing1)
console.log(slicing2)
console.log(slicing3)
console.log(slicing4)



let city = "Allahabad";
let city1 = city.substr(1, 7);
console.log(city1)


let text1 = "Hii How are You";
let text2 = text1.toUpperCase();
let text3 = text2.toLowerCase();
console.log(text2)
console.log(text3)

// String Trim -- 

let text4 = "    How are You       ";
let text5 = text4.trim();
let text6 = text4.trimStart();
let text7 = text4.trimEnd();
console.log(text4.length);
console.log(text5.length);
console.log(text6.length);
console.log(text7.length);

// String Repeat
let myname = "Siya Ram ";
console.log(myname.repeat(10))

//String replace content

let wish = "Hii Morning";
console.log(wish.replace(/MORNING/i0, "Night"))





