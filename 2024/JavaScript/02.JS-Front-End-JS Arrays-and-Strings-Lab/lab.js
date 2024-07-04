// 1.	Sum First and Last Array Elements
// Write a function that receives an array of numbers and prints the sum of the first and last element in that array.
// Examples
// Input	            Output
// [20, 30, 40]	        60
// [10, 17, 22, 33]	    43
// [11, 58, 69]	        80

function sumFirstandLastOfArray(array) {
    // console.log(array[0]);
    // console.log(array[array.length - 1]);
    const sum = array[0] + array[array.length - 1];
    console.log(sum);
}

// sumFirstandLastOfArray([20, 30, 40])
// sumFirstandLastOfArray([10, 17, 22, 33])
// sumFirstandLastOfArray([11, 58, 69])

// 2.	Reverse an Array of Numbers
// Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.
// Examples
// Input	                    Output
// 3, [10, 20, 30, 40, 50]  	30 20 10
// 4, [-1, 20, 99, 5]       	5 99 20 -1
// 2, [66, 43, 75, 89, 47]     	43 66

function reverseArray(number, array) {
    const newArray = array.splice(0, number).reverse();
    console.log(newArray.join(' '));
}

// reverseArray(3, [10, 20, 30, 40, 50]);
// reverseArray(4, [-1, 20, 99, 5]);
// reverseArray(2, [66, 43, 75, 89, 47]);

function reverseArray2(number, array) {
    const newArray = array.slice(0, number).reverse();
    console.log(newArray.join(' '));
}

// reverseArray2(3, [10, 20, 30, 40, 50]);
// reverseArray2(4, [-1, 20, 99, 5]);
// reverseArray2(2, [66, 43, 75, 89, 47]);

// 3.	Even and Odd Subtraction
// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
// Examples
// Input	        Output	    Comments
// [1,2,3,4,5,6]	3	        2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3
// [3,5,7,9]	    -24	
// [2,4,6,8,10]	    30	

function evenOddSubtractor(array) {
    let odd = 0;
    let even = 0;
    for (let x of array) {
        if (x % 2 == 0) even += x
        else odd += x
    };
    console.log(even - odd);
}

// evenOddSubtractor([1,2,3,4,5,6]);
// evenOddSubtractor([3,5,7,9]);
// evenOddSubtractor([2,4,6,8,10]);

// 4.	Substring
// Write a function that receives a string and two numbers. 
// The numbers will be a starting index and count of elements to substring. Print the result.
// Examples
// Input	            Output
// 'ASentence', 1, 8	Sentence
// 'SkipWord', 4, 7	    Word

function sub(input, from, to) {
    console.log(input.substring(from, to+from));
}

// sub('ASentence', 1, 8);
// sub('SkipWord', 4, 7);

// 5.	Censored Words
// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
// Examples
// Input	                                        Output
// 'A small sentence with some words', 'small'	    A ***** sentence with some words
// 'Find the hidden word', 'hidden'	                Find the ****** word


function censored(sentence, censoredWord) {
    const pattern = new RegExp(censoredWord, 'gi');
    const censoredSentence = sentence.replace(pattern, match => '*'.repeat(match.length));
    console.log(censoredSentence);
}
// censored('A small sentence with some words', 'small');
// censored('Find the hidden word', 'hidden')

// 6.	Count String Occurrences
// Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.
// Examples
// Input	                                                                    Output
// 'This is a word and it also is a sentence', 'is'                             2
// 'softuni is great place for learning new programming languages', 'softuni'	1

function countOccurence(sentence, word) {
    const pattern = new RegExp(`\\b${word}\\b`, 'g');
    const result = sentence.match(pattern)
    const count = result ? result.length : 0
    console.log(count);
}

function countOccurence2(sentence, word) {
    let counter = 0
    for (x of sentence.split(' ')) {
        if (x === word) counter++
    }

    console.log(counter);
}

countOccurence2('This is a word and it also is a sentence', 'is');
countOccurence2('softuni is great place for learning new programming languages', 'softuni');
countOccurence2('softuni is great place for learning new programming languages', 'erg3ewhg34');