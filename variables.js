//Declaring & initializing Variables

//Using let to make variables
let phoneNum;
phoneNum = "333";

let favoriteColor = "Red";
let seven = "7";
let eight = "8";
let sum = seven + eight;

// Using const to make variables(can't be changed)
const PI = 3.1415926535;

// we can use typeof to know the tpe of the variable

typeof seven;

// Concatination
let firstName = "Andrea";
let lastName = "Wallace";
let fullName = firstName + " " + lastName;

//Using quote inside a string
let quote = "'If you save money it will save you'";

//Using a template literal String (``)
let orderTotal = 39.99;
let itemPurchased = "Diary";
let customer = "Jeremy";
let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your Payment of
${orderTotal} was successful. `;
//alert(thankYou);

/** Excersize */

let randomLetters = "pdfsdj";
//alert(randomLetters.charAt(4));

let houseNumber = "555";
let streetName = "Shady Lane";
//alert(houseNumber.concat(" ", streetName));

let typeOfTree = "Pine";
typeOfTree.indexOf("e");

let vowelsList = "a,e,i,o,u";
vowelsList.split(",");
alert(vowelsList);
