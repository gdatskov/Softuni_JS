// 1.	Array Rotation
// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.
// Examples
// Input	                    Output
// [51, 47, 32, 61, 21], 2	    32 61 21 51 47
// [32, 21, 61, 1], 4	        32 21 61 1
// [2, 4, 15, 31], 5	        4 15 31 2

function rotateArray(array, rotations) {
    for (let move = 0; move < rotations; move++ ) {
        array.push(array.shift()) 
    }
    console.log(array.join(' '))
} // Working

function rotateArray2(array, rotations) {
    const actualRotations = rotations % array.length
    const arrayStart = array.slice(0, actualRotations);
    const arrayEnd = array.slice(actualRotations);
    const newArray = arrayEnd.concat(arrayStart)
    console.log(newArray.join(' '))
}

function rotateArrayOneRow(array, rotations) { // stoobid
    console.log(array.slice(rotations % array.length).concat(array.slice(0, rotations % array.length)).join(' '))
}

// rotateArray([51, 47, 32, 61, 21], 2) // 32 61 21     51 47
// rotateArray([32, 21, 61, 1], 4) // 32 21 61 1
// rotateArray([2, 4, 15, 31], 5) // 4 15 31 2

// rotateArray2([51, 47, 32, 61, 21], 2)
// rotateArray2([32, 21, 61, 1], 4)
// rotateArray2([2, 4, 15, 31], 5)

// rotateArrayOneRow([51, 47, 32, 61, 21], 2)
// rotateArrayOneRow([32, 21, 61, 1], 4)
// rotateArrayOneRow([2, 4, 15, 31], 5)

// 2.	Print Every N-th Element from an Array 
// The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.
// The output is every element on the N-th step starting from the first one. If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. 
// The output is the return value of your function and must be an array.
// Example
// Input	                                    Output		            
// ['5', '20', '31', '4', '20'], 2	            ['5', '31', '20']
//['dsa','asd', 'test', 'tset'], 2              ['dsa', 'test']
//['1', '2','3', '4', '5'], 6	                ['1']

function NthElement(array, step) {
    let newArr = []
    for (let i = 0; i < array.length; i+=step) {
        newArr.push(array[i])
    }
    return newArr
}

// NthElement(['5', '20', '31', '4', '20'], 2)
// NthElement(['dsa','asd', 'test', 'tset'], 2)
// NthElement(['1', '2','3', '4', '5'], 6)


// 3.	List of Names
// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
// Example
// Input	                                    Output
// ["John", "Bob", "Christina", "Ema"]	        1.Bob
//                                              2.Christina
//                                              3.Ema
//                                              4.John

function orderNames(array) {
    let number = 1
    for (person of array.sort()) {
        console.log(`${number}.${person}`);
        number++;
    };
} // 80/100
function orderNames2(array) {
    let number = 1
    for (person of array.sort((a, b) => a.localeCompare(b))) {
        console.log(`${number}.${person}`);
        number++;
    };
}
// orderNames(["John", "Bob", "Christina", "Ema"])
// orderNames(["John", "Jbhn", "Bob", "Christina", "Ema", "Emma"])
// orderNames([1, "John", "Bob", "Christina", "Ema"])
// orderNames([])
orderNames2(["John", "Bob", "Christina", "Ema", "Георги", "Georgi"])

// 4.	Sorting Numbers
// Write a function that sorts an array of numbers so that 
// the first element is the smallest one, 
// the second is the biggest one, 
// the third is the second smallest one, 
// the fourth is the second biggest one, and so on. 
// Return the resulting array.
// Input	                                Output
// [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]	[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

function sortNumbers(array = []) {
    const sortedArray = array.sort((a, b) => a - b);
    let newArray = [];
    const arrayLen = array.length - 1;
    for (let i = 0; i <= arrayLen/2; i++) {
        let lastOdd = arrayLen <= i*2
        newArray.push(sortedArray[i]);
            if (!lastOdd) {
            newArray.push(sortedArray[arrayLen-i])
        }
    }
    console.log(newArray);
    // return newArray
}

// sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// sortNumbers([1]);
// sortNumbers([]);
// sortNumbers([1,1,1,1,2,2,2]);
// sortNumbers([1,2,3,4,5,6,7]);

// 5.	Reveal Words
// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.
// Example
// Input	Output
// 'great',
// 'softuni is ***** place for learning new programming languages'	softuni is great place for learning new programming languages
// 'great, learning',
// 'softuni is ***** place for ******** new programming languages'	softuni is great place for learning new programming languages

function revealWords(words, sentence) {
    const wordList = words.split(', ');
    const cleanPattern = /\*+|\w+/g
    const asteriskPattern = /\*+/g
    let newSentence = sentence.split(' ');
    for (const wordTarget of wordList) {
        let tempSentence = [];
        for (let wordOfSentence of newSentence) {
            const cleanWord = wordOfSentence.match(cleanPattern)[0]
            const asterisksInWord = asteriskPattern.test(cleanWord)
            if (asterisksInWord && cleanWord.length === wordTarget.length) {
                wordOfSentence = wordOfSentence.replace(cleanWord, wordTarget)
            }
            tempSentence.push(wordOfSentence)
        }
        newSentence = tempSentence
    }
    console.log(newSentence.join(' '));
}

// revealWords('great, learning, languages', 'softuni is ***** place for ******** new programming *********.')

// 6.	Modern Times of #(HashTag)
// The input will be a single string.
// Find all special words starting with #. 
// If the found special word does not consist only of letters, then it is invalid and should not be printed. 
// Finally, print out all the special words you found without the label (#) on a new line.
// Example
// Input	                                                            Output
// 'Nowadays everyone uses # to tag a #special word in #socialMedia'	special
//                                                                      socialMedia
//
// 'The symbol # is known #variously in                                 variously
// English-speaking #regions as the #number sign'	                    regions
//                                                                      number

function hashTag(sentence) {
    let pattern = /(?:^|\s|^[\r\n])#([A-Za-z]+)\b/g;
    let matches = [];
    let match;
    
    while ((match = pattern.exec(sentence)) !== null) {
        console.log(match[1]);
    }
}

// hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')

// 7.	String Substring
// The input will be given as two separated strings (a word as a first parameter and a text as a second).
// Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program. 
// If you don't find the word print: "{word} not found!"
// Example
// Input	                                        Output
// 'javascript',
// 'JavaScript is the best programming language'	javascript
// 'python',
// 'JavaScript is the best programming language'	python not found!

function stringSubstring(word, sentence) {
    let pattern = new RegExp(`${word}`, 'gim');
    if (pattern.test(sentence) && word) console.log(word);
    else console.log(`${word} not found!`);
}

// stringSubstring('javascript', 'JavaScript is the best programming language');
// stringSubstring('python', 'JavaScript is the best programming language');
// stringSubstring('javascript', 'Javascript javascript');
// stringSubstring('javascript asd', 'Javascript javascript');
// stringSubstring('', 'Javascript javascript');
// stringSubstring(1, 'Javascript javascript');

// 8.	Pascal-Case Splitter
// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.
// Examples
// Input	Output
// 'SplitMeIfYouCanHaHaYouCantOrYouCan'	Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
// 'HoldTheDoor'	Hold, The, Door
// 'ThisIsSoAnnoyingToDo'	This, Is, So, Annoying, To, Do

function PascalCaseSplitter(text) {
    let transformedString = text.replace(/([A-Z][a-z]*)/g, '$1, ').slice(0, -2);
    console.log(transformedString);
}

// PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// PascalCaseSplitter('HoldTheDoor');
// PascalCaseSplitter('ThisIsSoAnnoyingToDo');
// PascalCaseSplitter('TBD');



