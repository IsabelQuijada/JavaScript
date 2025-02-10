'use strict';

//STRICT NAME

// let hasDriversLicense = false
// const passtest = true;


// if(passtest) hasDriversLicense = true; 
// if(hasDriversLicense) console.log ('I can drive');

// const private = 345;
// const interface = 'Audio';
// const if = 23;


//FUNCTIONS

// function logger(times,) {
//     console.log("My name is Ethan");
// }
 
// // calling / running / invoking function
// logger();
// // logger();
// // logger();
// // logger();

//  function fruitProcessor(apples, bananas) {
//     // console.log(apples, bananas);
//     const juice = `Juice with ${apples} apples and ${bananas} bananas`;
//     return juice
//  }

// const appleJuice =  fruitProcessor(10, 5)
// console.log(appleJuice);
// // console.log(fruitProcessor(10, 5));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// const num = Number ('23');
// console.log(typeof(num));


// function printCustomerName(firstName, LastName){
//     const fullname = `Customers full name is ${firstName} ${LastName} `;
//     return fullname
// }

// // console.log( printCustomerName('Ethan', 'Hunt'));

// let fullName = printCustomerName('Ethan', 'Hunt');
// console.log(fullName);

//FUNCTION DECLARATION  VS EXPRESSION

//Function Declaration

// const age3 = callAge1(1999);
// console.log(age3);

// function callAge1 (birthYear) {
//     return 2020 - birthYear;
// }

// const age1 = callAge1(1999);
// console.log(age1);

//Function Expression

// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear;
// }


// const age2 = calcAge2(1999);
// console.log(age2);

//ARROW FUNCTIONS

//Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1954);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName, LastName) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} ${LastName} will retire in ${retirement} years`;
// }


// // console.log (yearsUntilRetirement(1999, 'Ethan'));
// const retirement = (yearsUntilRetirement(1989, 'Ethan', 'Smith'));
//     console.log(retirement)

//FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitInPieces(fruit){
//     return fruit * 4;
// }


//  function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitInPieces(apples);
//     const orangesPieces = cutFruitInPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of bananas`;
//     return juice
//  }

// console.log(fruitProcessor(2, 3));

// const calculateAge = function(year) {
//     return 2037 - year;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calculateAge(birthYear);
//     const retirement = 65 - age;

//     retirement > 0 ? 
//     console.log(`${firstName} will retire in ${retirement} years`) : 
//     console.log(`${firstName} is already retired`);

//     return retirement;
// }


// console.log(yearsUntilRetirement(1999, 'Ethan'));
// console.log(yearsUntilRetirement(1970, 'Anna'));


// CODING CHALLENGE



// Function to calculate average score
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Calculate average scores for both teams (Test Data 1)
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// // Function to check the winner
// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// };

// // Run checkWinner function with Test Data 1
// checkWinner(scoreDolphins, scoreKoalas);

// // Calculate average scores for both teams (Test Data 2)
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// // Run checkWinner function with Test Data 2
// checkWinner(scoreDolphins, scoreKoalas);

// //INTRODUCTION TO ARRAYS

// const friend1 = 'Andrea';
// const friend2 = 'Charles';
// const friend3 = 'Peter';

// const friends = ['Andrea', 'Charles', 'Peter', 'Hannah'];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 2]);


// friends[2] = 'Jay';
// console.log(friends);
// console.log(friends[2] = 'Andrew');

// friends = ['Bob', 'Alice', 'Martha', 'Esther'];

// const firstName = 'Ethan';
// const ethan = ['firstName', 'Schmidt', 2037 - 1991, 'teacher', friends];
// console.log(ethan);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

//EXERCISE

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const years = [1990, 1967, 2023, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//BASIC ARRAY OPERATIONS (METHODS)

// Adss Element

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLenght = friends.push('Jay', 'John', `Ian`);
//  console.log(friends);
//  console.log(newLenght);

//  friends.unshift('Elisabeth');
//  console.log(friends);

//  //Remove Elements

//  friends.pop(); //Last
//  const popeed = friends.pop(); //Last
//  console.log(popeed);
//  console.log(friends);

//  friends.shift(); //First
//  console.log(friends);


//  //Index of

//  console.log(friends.indexOf('Steven'));
//  console.log(friends.indexOf('Bobo'));


// friends.push(23);
//  console.log(friends.includes('Steven'));
//  console.log(friends.includes('Bob'));
//  console.log(friends.includes(23));
//  console.log(friends)

//  if (friends.includes('Steven')) {
//      console.log('You have a friend called Steven');
//  }



// CHALLENGE #2

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
// BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.// 




// function calcTip ( bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }


// const bills = [125, 555, 44];
// const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]
// console.log(tips);

//OBJECTS

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);


//DOT VS BRACKET NOTATION

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey])

// console.log(jonas.'last' + nameKey);//This will not work

// const intetestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas[intetestedIn]);

// if (jonas[intetestedIn]) {
//     console.log(jonas[intetestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }


jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


//Challenge
// "Jonas has 3 friends, and this best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length } friends, and his best friend is called ${jonas.friends[0]}.` )
