/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);  
console.log('Jonas');
console.log(23);

let firstName = "Isa"; // variable
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions

let jonas_matilda = 'JM';
let $function = 27;

let person = "jonas"
let PI = 3.1415;

let myFirstJob = 'Programmer';
let mycurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


// Data types
let javascriptIsFun = true;
console.log(true);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Isa');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
javascriptIsFun = 123;
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
year = "Tiger";
console.log(typeof year);

console.log(typeof null); // object, this is a bug, it should return null


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; -> error, cannot reassign a const variable
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Santos';
console.log(lastName);

//Math Operators

const now = 2007

const ageAndrea = now -1991
const ageLisa = now - 2020
console.log(ageAndrea, ageLisa);

console.log (ageAndrea *2, ageAndrea /10, 2**3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Joao';
const lastName = 'Santos';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1
x --; // x = x - 1
x --; // x = x - 1
console.log(x)

//Comparison Operatos
console.log(ageAndrea > ageLisa); // >, <, >=, <=
console.log(ageLisa >= 18);

const isFullAge = ageLisa >= 18;
console.log(isFullAge)

console.log(now -1191 > now - 2020);
*/

// // Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);
// //It works because the precedence of the minus operator is higher than the comparison operator

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

/* Write your code below. Good luck! 🙂 */

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.76;

// // Calculate BMI
// const bmiMark = massMark / (heightMark ** 2);
// const bmiJohn = massJohn / (heightJohn ** 2);

// // Output results
// console.log(bmiMark);
// console.log(bmiJohn);


// Strings & Template Literals

// const firstName = 'Isabel';
// const job = "programer";
// const birthYear = 1991;
// const year = 2025;

// const isabel = "Im " + firstName + ", Im a " + (year - birthYear) + " years old  and I am a " + job + "!";
// console.log(isabel);

// const istabelNew = `Im ${firstName} Im a ${year - birthYear} year old ${job}!`;
// console.log(istabelNew)

// console.log(`String with \n
// multiple \n\
// lines` );

// console.log(`
// we \n\
// will \n\
// will \n\
// rock you`);    

// const age = 19;
// const isOldEnough= age >= 18;

// if(isOldEnough){
//     console.log("Isa can start driver licence 🚘")
// } else {
//     console.log("Isa is too young to start driving 🍼")
// }

// const age = 14;
// const minimumAgeToStartDriving = 18;

// if (age >= minimumAgeToStartDriving) {
//     console.log("Isa can drive ✅")
// } else {
//     const yearsLeft = minimumAgeToStartDriving - age;
//     console.log(`Isa cannot drive for the next ${yearsLeft} years ❌`)
// }

// const birthYear = 2014;

// let century;
// if(birthYear <= 2000) {
//  century = 20;
// } else {
//  century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
// } else{
//     console.log(`John's BMI (${massJohn}) is higher than Mark's!`);
// }

 //Type Conversion

//  const inputYear = '1991';
//  console.log(Number(inputYear), inputYear);
//  console.log(Number(inputYear) + 10);

//  console.log(Number('Isabel'));
//  console.log(typeof NaN);

//  console.log(String(123),1234);

//Type Cohercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('I am ' + String(23) + ' years old');
// console.log('23' - `10` - 3);
// console.log('23' + `10` + 3);
// console.log ('23' * 10);
// console.log ('23' / 10);

// let n = '1' + 1; // 1'11'
// n =(n - 1); // 10
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(" "));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean("isa"));

// const money = 100;
// console.log(typeof(money));

// if (money) {
//     console.log("Dont spend it all");

// } else {
//     console.log(typeof("You dont have any money to spend"))
// }

// let height;  
// console.log(typeof(height));
// if (height){
//     console.log("Height is defined");
// } else {
//     console.log("Height is undefined");
// }

// EQUALITY OPERATORS

// const age = '18';
// // if (age === 18) {
// //     console.log("You are an adult");
// // }

// if (age === 18) console.log("You are an adult (strict)");
// if (age === 18) console.log("You are an adult (loose)");


// const favourite = Number(prompt ("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof(favourite));

// if (favourite === 23) {
//     console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number")
// } else if (favourite === 9) {
//     console.log("9 is also a cool number")
// } else {
//     console.log("Number is not 23 or 7");
// }

  
// if (favourite !== 23) console.log("Why not 23?");

// Boolean Logic -  Logical Operators

// const age = 21;

// if (age >= 20 && age <=30) console.log ("Your age is between 20 and 30");
// if (age !== 23) console.log("You are not 23");
// if (age >= 20 || age <= 30) console.log("You are 20 or 30 years old");


// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive){
// //     console.log("Sarah is able to drive");
// // } else {
// //     console.log("Someone else should drive");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive");
// }

// const scoreDolphins =(96 + 108 + 89)/3;
// const scoreKoalas = (108 + 95 + 123)/3;

// if (scoreDolphins > scoreKoalas) {
// console.log("Dolphins win the trophy")
// } else if (scoreDolphins < scoreKoalas) {
//     console.log ("Koalas win the trophy")
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy")
// }

//THE SWITCH STATEMENT  

// const day = "thursday";

// switch(day){
//     case 'monday': // day === 'monday'
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples");
//         break;
//     case 'friday':
//         console.log("Record videos");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day");
// }

// if (day === 'monday') {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === 'tuesday') {
//     console.log("Prepare theory videos");
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log("Write code examples");
// } else if (day === 'friday') {   
//     console.log("Record videos");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("Enjoy the weekend");
// } else {
//     console.log("Not a valid day");
// }

// const day = "thursday";

// console.log(`today is ${day}`);

// CONDITIONAL (TERNARY) OPERATOR

// const age = 34;
// age >= 18 ? console.log("I like to drink Tequila! 🍷") : ("I like to drink watter 💧")

// const drink = age >= 18 ? " Wine 🍷" : "Water 💧"
// console.log(drink)

// let drink2;
// if (age >= 18) {
//     drink2 = "Wine 🍷"
// } else {
//  drink2 = "Water 💧"}
//  console.log(drink2);


//  console.log(`I like to drink ${drink2}`)

//CHALENGE 4
     
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? 0.15 : 0.20;

// console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill + (bill * tip)}`);

// console.log(tip)