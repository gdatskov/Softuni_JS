// 1.	Car Wash
// Write a JS function that receives some commands. 
// Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty. 
// Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//              `The car is {value}% clean.`
//   Note: The value should be rounded to the second decimal point.
// Examples
// Input	Output
// ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']	The car is 39.00% clean.
// ["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]	The car is 13.12% clean.

function carWash(listOfProcedures) {
    let carCleaniness = 0; // percent
    const soapTreatment = start => start + 10; // percent
    const waterTreatment = start => start * 1.2;
    const vacuumTreatment = start => start * 1.25; // percent
    const mudTreatment = start => start * 0.9  // percent

    for (const treatment of listOfProcedures) {
        if (treatment === 'soap') carCleaniness = soapTreatment(carCleaniness);
        if (treatment === 'water') carCleaniness = waterTreatment(carCleaniness);
        if (treatment === 'vacuum cleaner') carCleaniness = vacuumTreatment(carCleaniness);
        if (treatment === 'mud') carCleaniness = mudTreatment(carCleaniness);
    }
    console.log(`The car is ${carCleaniness.toFixed(2)}% clean.`);
}

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']); // The car is 39.00% clean.
// carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]) // The car is 13.12% clean.


// 2.	Number Modification
// Write a JS program that changes a number until the average of all its digits is not higher than 5. 
// To modify the number, your program should append a 9 to the end of the number, 
// when the average value of all its digits is higher than 5 the program should stop appending.
// 
// The input is a single number.
// The output should consist of a single number - the final modified number 
// which has an average value of all its digits higher than 5. 
//
// The output should be printed on the console.
// Constraints
// •	The input number will consist of no more than 6 digits.
// •	The input will be a valid number (there will be no leading zeroes).

// Examples
// Input	Output
// 101	    1019999
// 5835	    5835

function numberModification(number) {
    let average = 0;
    let sum = 0;
    const numberList = number.toString().split('');
    const howToSum = (a, b) => Number(a) + Number(b)
    
    while (average <= 5) {
        sum = numberList.reduce(howToSum);
        average = sum / numberList.length;
        if (average <= 5) {
            numberList.push('9');
        }
    }
    
    console.log(numberList.join(''));
}

numberModification(101);
numberModification(5835);
