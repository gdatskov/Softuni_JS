// 1. Smallest of Three Numbers
// Write a function that receives three integers and 
// prints the smallest number. Use an appropriate name for the function.
// Examples
// Input	Output
// 2,
// 5,
// 3	    2

// 600,
// 342,
// 123	    123

// 25,
// 21,
// 4	    4

// 2,
// 2,
// 2	    2

function getSmallestNumber(...args) {
    return console.log(args.sort((a, b) => (a - b))[0])
}

// getSmallestNumber(25,21,4)


// 2. Add and Subtract
// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers 
// and a function subtract(), which subtracts the result of the function the sum() 
// and the third integer.
// Examples
// Input	Output
// 23,
// 6,
// 10	    19

// 1,
// 17,
// 30	    -12

// 42,
// 58,
// 100	    0

function addSubtract(num1, num2, num3) {
    const sum = (arg1, arg2) => (arg1 + arg2);
    const subtract = (arg1, arg2) => (arg1 - arg2);
    const sumResult = sum(num1, num2);
    const subtractResult = subtract(sumResult, num3);

    return subtractResult
    // return console.log(subtractResult)
}

// addSubtract(23, 6, 10);	    // 19
// addSubtract(1, 17, 30);	    // -12
// addSubtract(42, 58, 100);	// 0

// 3. Characters in Range
// Write a function that receives two characters and prints on a single line
// all the characters in between them according to the ASCII code. 
// Keep in mind that the second character code might be before the 
// first one inside the ASCII table.
// Examples
// Input	Output
// 'a',
// 'd'	    b c
// '#',
// ':'	    $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
// 'C',
// '#'	    $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B


function charsInRange(charA, charB) {
    const asciiCode = char => char.charCodeAt()
    const asciiChar = num => String.fromCharCode(num)
    if (asciiCode(charA) > asciiCode(charB)) {
        [charA, charB] = [charB, charA];
    }
    const result = []
    for (let index = asciiCode(charA) + 1; index < asciiCode(charB); index++) {
        result.push(asciiChar(index));
    }
    console.log(result.join(' '));
}

// charsInRange('a','d');
// charsInRange('#',':');
// charsInRange('C','#');
// charsInRange('c', 'a');


// 4. Odd and Even Sum
// You will receive a single number. 
// You have to write a function, that 
// returns the sum of all even and all odd digits from that number. 
// Examples
// Input	            Output
// 1000435	            Odd sum = 9, Even sum = 4
// 3495892137259234	    Odd sum = 54, Even sum = 22

function oddEvenSum1(number) { // sum by odd or even index
    let odds = 0;
    let evens = 0;
    let index = 2;
    number = number.toString();
    const numberLength = number.length;
    const resultString = (oddSum, evenSum) => (`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    function printResult(oddSum, evenSum) {
        console.log(resultString(oddSum, evenSum));
        console.log(' ');
    }
    if (numberLength <= 0) {
        return printResult(odds, evens)
    }
    if (numberLength <= 1) {
        odds = number
        return printResult(odds, evens)
    }
    while (index + 2 <= numberLength + 2) {
        evens += Number(number[index - 1]);
        odds += Number(number[index - 2]);
        index += 2
    }
    if (numberLength % 2 === 1) {
        odds += Number(number[numberLength - 1])
    }
    return printResult(odds, evens)
}

// oddEvenSum1('');            
// oddEvenSum1(3);           
// oddEvenSum1(12345);            
// oddEvenSum1(1000345);           
// oddEvenSum1(3495892137259234);   


function oddEvenSum2(number) { //sum by the fact if the number is odd or even
    let odds = 0
    let evens = 0
    number = number.toString();
    for (let index = 0; index < number.length; index++) {
        digit = Number(number[index]);
        if (digit % 2 === 0) {
            evens += digit;
        } else {
            odds += digit;
        }
    }
    console.log(`Odd sum = ${odds}, Even sum = ${evens}`);
}
// oddEvenSum2(1000345);            // Odd sum = 9, Even sum = 4
// oddEvenSum2(3495892137259234);   // Odd sum = 54, Even sum = 22


// 5. Palindrome Integers
// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
// Write a function, which receives an array of positive integers and 
// checks if each integer is a palindrome or not.
// Output
// •	If the current integer is a palindrome, print: "true"
// •	Otherwise, print: "false"
// Examples
// Input	        	Output
// [123,323,421,121]	false
//                      true
//                      false
//                      true
//
// [32,2,232,1010]	    false
//                      true
//                      true
//                      false
// Hints
// •	Read more about palindromes: https://en.wikipedia.org/wiki/Palindrome

function palindromeNumberCheck(numbers) {
    for (let number of numbers) {
        number = number.toString()
        const numberLenght = number.length
        let result = true
        for (let index = 0; index < numberLenght / 2; index++) {
            if (number[index] !== number[numberLenght - 1 - index]) {
                result = false
            }
        }
        console.log(result);
    }
    // console.log(' ');
}

// palindromeNumberCheck([123,323,421,121]);
// palindromeNumberCheck([32,2,232,1010]);

// 6. Password Validator
// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"
// Examples
// Input	    Output
// 'logIn'	    Password must be between 6 and 10 characters
//              Password must have at least 2 digits
//
// 'MyPass123'	Password is valid
//
// 'Pa$s$s'	    Password must consist only of letters and digits
//              Password must have at least 2 digits

function passwordValidator(password) {
    const checkMinLength = password.length >= 6;
    const checkMaxLength = password.length <= 10;
    const checkLength = checkMinLength && checkMaxLength;

    const lettersAndDigitsOnlyPattern = /^[a-zA-Z0-9]+$/;
    const checkSymbols = lettersAndDigitsOnlyPattern.test(password);

    const atLeast2DigitsPattern = /.*\d.*\d.*/;
    const checkAtLeast2Digits = atLeast2DigitsPattern.test(password);

    const checkAll = checkLength && checkSymbols && checkAtLeast2Digits

    if (checkAll) {
        console.log('Password is valid');
    } else {
        if (!checkLength) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!checkSymbols) {
            console.log('Password must consist only of letters and digits');
        }
        if (!checkAtLeast2Digits) {
            console.log('Password must have at least 2 digits');
        }
    }
}

// passwordValidator('logIn');
// console.log(' ');
// passwordValidator('MyPass123');
// console.log(' ');
// passwordValidator('Pa$s$s');


// 7. NxN Matrix
// Write a function that receives a single integer number n and prints nxn matrix with that number.
// Examples
// Input	Output
// 3	    3 3 3
//          3 3 3
//          3 3 3
//
// 7	    7 7 7 7 7 7 7
//          7 7 7 7 7 7 7
//          7 7 7 7 7 7 7
//          7 7 7 7 7 7 7
//          7 7 7 7 7 7 7
//          7 7 7 7 7 7 7
//          7 7 7 7 7 7 7
//
// 2	    2 2
//          2 2

function NxNMatrix(number) {
    for (let index = 0; index < number; index++) {
            console.log(`${number + (` ${number}`).repeat(number-1)}`);
    }
}

// NxNMatrix(3);
// console.log(' ');
// NxNMatrix(7);
// console.log(' ');
// NxNMatrix(2);

// 8. Perfect Number 
// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Output
// •	If the number is perfect, print: "We have a perfect number!"
// •	Otherwise, print: "It's not so perfect."
// Examples
// Input	Output 	Comments
// 6	 We have a perfect number!	 1 + 2 + 3
// 28	 We have a perfect number!	 1 + 2 + 4 + 7 + 14
// 1236498	 It's not so perfect.	
// Hint
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors 
// (including itself) => 6 is a perfect number because 
// it is the sum of 1 + 2 + 3 (all of which are divided without residue).
// •	Read about the Perfect number here: https://en.wikipedia.org/wiki/Perfect_number

function perfectNumber(number) {
    const divisors = [1,];
    for (let divisor = 2; divisor <= number/2; divisor++) {
        if (number % divisor === 0) {
            divisors.push(divisor)
        }
    }
    const sum = divisors.reduce((sum, next) => (sum + next))
    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

// perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);


// 9. Loading Bar
// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
// Examples
// Input	Output
// 30	    30% [%%%.......]
//          Still loading...
// 50	    50% [%%%%%.....]
//          Still loading...
// 100	    100% Complete!
//          [%%%%%%%%%%]

function loadingBar(percent) {
    const loaded = percent/10
    const showloaded = '%'.repeat(loaded)
    const showLeft = '.'.repeat(10-loaded)
    const total = `[${showloaded+showLeft}]`
    const loadedOutput = loaded*10;
    const status = showLeft ? 'Still loading...' : 'Complete!'
    if (!showLeft) {
        console.log(`100% ${status}`);
        console.log(total);
    } else {
        console.log(`${loadedOutput}% ${total}`);
        console.log(`${status}`);
    }
}

// loadingBar(30);
// loadingBar(50);
// loadingBar(100);


// 10. Factorial Division
// Write a function that receives two integer numbers. 
// Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.
// Examples
// Input	Output
// 5,
// 2	    60.00	
//	
// 6,
// 2	    360.00

// Hints
// •	Read more about factorial here: https://en.wikipedia.org/wiki/Factorial
// •	You can use recursion

function factorialDivision(num1, num2) {
    const factorialCalculations = {0: 0, 1: 1,};
    const startingNumber = 2;
    [num1, num2] = num1 >= num2 ? [num1, num2] : [num2, num1]; //Assign the greater number to num1 and the lesser to num2
    let result = 1;
    for (let currentNumber = startingNumber; currentNumber <= num1; currentNumber++) {
        result *= currentNumber;
        if (currentNumber === num1 || currentNumber === num2) { // add to memory only what we care about, not all. Remove if statement to store all
            factorialCalculations[currentNumber] = result;
        }
    }
    const output = factorialCalculations[num1] / factorialCalculations[num2];
    console.log(output.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
factorialDivision(2, 6);

