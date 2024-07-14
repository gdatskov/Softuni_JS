// 1. Format Grade
// Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"
// Examples
// Input	Output
// 3.33	    Poor (3.33)
// 4.50	    Very good (4.50)
// 2.99	    Fail (2)

function formatGrade(grade) {
    let result = '';
    const gradeValid = grade >= 2 && grade <= 6 && Number.isFinite(grade) ? true : false

    if (grade < 3) {
        result = 'Fail'
    } else if (grade < 3.5) {
        result = 'Poor'
    } else if (grade < 4.5) {
        result = 'Good'
    } else if (grade < 5.5) {
        result = 'Very good'
    } else if (grade <= 6) {
        result = 'Excellent'
    };

    if (result === 'Fail' && gradeValid) {
        console.log(`${result} (2)`);
    } else if (gradeValid) {
        console.log(`${result} (${grade.toFixed(2)})`);
    };
}

// formatGrade(2.66);
// formatGrade(6.66);
// formatGrade(3.33);
// formatGrade(4.50);
// formatGrade(5.55);
// formatGrade(-2);
// formatGrade(0);


// 2. Math Power
// Write a function that calculates and print the value of a number raised to a given power:
// Examples
// Input	Output
// 2,8	256
// 3,4	81
// Hints
// •	Create a function that will have two parameters - the number and the power.
// •	Print the result to the console.

function mathPower(number, power) {
    let result = 1;
    if (power > 0) {
        while (power) {
            result *= number
            power -= 1
        }
    } else {
        while (power) {
            result /= number
            power += 1
        }
    }
    console.log(result);
}

// mathPower(2,8);
// mathPower(3,4);
// mathPower(3,-1);
// mathPower(1,-1);
// mathPower(1,0);

// 3. Repeat String
// Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).
// Examples
// Input	Output
// "abc", 3	abcabcabc
// "String", 2	StringString
// Hints
// 1.	Use a loop or another method to repeat the input string.
// 2.	Use the return operator to produce the result.

function repeatString(string, times) {
    return string.repeat(times)
}


// 4. Orders
// Write a function that calculates the total price of an order and prints it on the console. 
// The function should receive one of the following products: 
// coffee, coke, water, snacks; and a quantity of the product. 
// The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.
// Example
// Input	    Output
// "water", 5	5.00
// "coffee", 2	3.00
// Hints
// •	Create a function and pass the two variables in.
// •	Print the result in the function.

function orders(product, quantity) {
    let price = 0
    switch (product) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2;
            break;
    }
    const total = price * quantity;
    console.log(total.toFixed(2));
}

// orders("water", 5);
// orders("coffee", 2);


// 5. Simple Calculator
// Write a function that receives three parameters – two numbers and an operator (string) –
//  and calculates the result depending on the operator. 
// Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.
// Bonus
// Solve this task without using any conditional statements 
// (no if or switch statements or ternary operators).
// Input
// The input comes as parameters named numOne, numTwo, operator.
// Examples
// Input	        Output
// 5,
// 5,
// 'multiply'	    25
// 40,
// 8,
// 'divide'	        5
// 12,
// 19,
// 'add'	        31
// 50,
// 13,
// 'subtract'	    37

function calc(numOne, numTwo, operator) {
    const operators = {
        multiply: (a, b) => (a * b),
        divide: (a, b) => (a / b),
        add: (a, b) => (a + b),
        subtract: (a, b) => (a - b),
    }

    console.log(operators[`${operator}`](numOne, numTwo));
}

// calc(2,3,'multiply')


// 6. Sign Check
// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree 
// is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// •	If the result is positive, print on the console -> "Positive"
// •	Otherwise, print -> "Negative"
// Example
// Input	Output
//  5,
//  12,
// -15	    Negative
// -6,
// -12,
//  14	    Positive
// -1,
// -2,
// -3	    Negative
// -5,
//  1,
//  1	    Negative
// Hints
// •	Consider how the sign of each of the three input parameters will affect their product.
// •	Check all the different combinations for the three numbers.

function signCheck(numOne, numTwo, numThree) {
    let positive = true;
    for (const num of [numOne, numTwo, numThree]) {
        if (num < 0) {
            positive = !positive;
        }
    }
    console.log(positive ? 'Positive' : 'Negative');
}

signCheck(5, 12, -15); // Negative
signCheck(-6, -12, 14); // Positive
signCheck(-5, 1, 1); // Negative
signCheck(-1, -2, -3) // Negative


