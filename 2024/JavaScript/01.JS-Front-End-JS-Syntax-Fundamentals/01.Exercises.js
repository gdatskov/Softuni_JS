// 1.	Ages
// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:
// ·	0-2 (age) – is a baby;   
// ·	3-13 (age) – is a child; 
// ·	14-19 (age) – is a teenager;
// ·	20-65 (age) – is an adult;
// ·	>=66 (age) – is an elder; 
// ·	In all other cases print – "out of bounds";
// The output should be printed to the console.

function ages(age) {
    let result;
    if (age < 0) {
        result = 'out of bounds'
    } else if (age <= 2) {
        result = 'baby'
    } else if (age <= 13) {
        result = 'child'
    } else if (age <= 19) {
        result = 'teenager'
    } else if (age <= 65) {
        result = 'adult'
    } else {
        result = 'elder'
    };
    console.log(result);
}

// console.log('Task 1. Ages');
// ages(20)
// ages(1)
// ages(100)
// ages(-1)


// 2.	Vacation
// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.
// 	Friday	Saturday	Sunday
// Students	8.45	9.80	10.46
// Business	10.90	15.60	16
// Regular	15	20	22.50

// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.

function vacation(groupNumber, groupType, dayOfWeek) {
    let price;
    let total;
    let discountCoef = 1;

    let studentsDiscount = 0.15;
    let regularsDiscount = 0.05;
    let businessDiscount = 10;


    if (groupNumber >= 30 && groupType == 'Students') {
        discountCoef = 1 - studentsDiscount
    };

    if (groupNumber >= 10 && groupNumber <= 20 && groupType == 'Regular') {
        discountCoef = 1 - regularsDiscount
    };

    if (groupNumber >= 100 && groupType == 'Business') {
        groupNumber -= businessDiscount
    };

    if (dayOfWeek == 'Friday') {
        if (groupType == 'Students') {
            price = 8.45
        }
        if (groupType == 'Business') {
            price = 10.90
        }
        if (groupType == 'Regular') {
            price = 15
        }
    }
    if (dayOfWeek == 'Saturday') {
        if (groupType == 'Students') {
            price = 9.8
        }
        if (groupType == 'Business') {
            price = 15.6
        }
        if (groupType == 'Regular') {
            price = 20
        }
    }
    if (dayOfWeek == 'Sunday') {
        if (groupType == 'Students') {
            price = 10.46
        }
        if (groupType == 'Business') {
            price = 16
        }
        if (groupType == 'Regular') {
            price = 22.5
        }
    }

    total = groupNumber * price * discountCoef

    console.log(`Total price: ${total.toFixed(2)}`);
}

// console.log('Task 2. Vacation');
// vacation(30,
//     "Students",
//     "Sunday"
//     );
// vacation(40,
//     "Regular",
//     "Saturday"
//     )
// vacation(110,
//     "Business",
//     "Sunday"
//     )


// 3.	Leap Year
// Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. The output should be following:
// •	If the year is a leap, print: "yes"
// •	Otherwise, print: "no"

function leapYear(year) {
    let leap = 'no';
    if (year % 4 == 0 && year % 100 != 0) {
        leap = 'yes'
    };
    if (year % 400 == 0) {
        leap = 'yes'
    };
    console.log(leap);
}

// console.log('Task 3. Leap Year');
// leapYear(1984)
// leapYear(2003)
// leapYear(4)



// 4.	Print and Sum
// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:
// Examples
// Input	Output
// 5, 10	5 6 7 8 9 10
// Sum: 45
// 0, 26	0 1 2 … 26
// Sum: 351
// 50, 60	50 51 52 53 54 55 56 57 58 59 60
// Sum: 605

function printAndSum(from, to) {
    let sum = 0;
    let numString = '';
    for (num = from; num <= to; num++) {
        sum += num
        numString += num;
        if (num < to) {
            numString += ' '
        }
    };
    console.log(numString);
    console.log(`Sum: ${sum}`);
}
// printAndSum(5, 10)
// printAndSum(0, 26)
// printAndSum(50, 60)


// 5.	Multiplication Table
// You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.
// Output
// Print every row of the table in the following format:
// {number} X {times} = {product}
// Constraints
// ·	The number will be an integer will be in the interval [1…100].
// Examples
// Input	Output
// 5   5 X 1 = 5
//     5 X 2 = 10
//     5 X 3 = 15
//     5 X 4 = 20
//     5 X 5 = 25
//     5 X 6 = 30
//     5 X 7 = 35
//     5 X 8 = 40
//     5 X 9 = 45
//     5 X 10 = 50		
// 2   2 X 1 = 2
//     2 X 2 = 4
//     2 X 3 = 6
//     2 X 4 = 8
//     2 X 5 = 10
//     2 X 6 = 12
//     2 X 7 = 14
//     2 X 8 = 16
//     2 X 9 = 18
//     2 X 10 = 20

function multiplicationTable(num) {
    let first = num;
    let second = 1;
    while (second <= 10) {
        console.log(`${first} X ${second} = ${first * second}`);
        second++
    }
}
// multiplicationTable(5)

// 6.	Sum Digits
// Write a function, which will be given a single number. Your task is to find the sum of its digits.
// Examples
// Input	Output
// 245678	32
// 97561	28
// 543	12


function sumDigits(num) {
    let str = String(num)
    let sum = 0
    for (let i = 0; i <= str.length; i++) {
        sum += Number(str.charAt(i))
    }
    console.log(sum);
}

// sumDigits(555)

// 7.	Chars to String
// Write a function, which receives 3 parameters. Each parameter is a single character. Combine all the characters into one string and print it on the console.
// Examples
// Input	Output
// 'a',
// 'b',
// 'c'	abc
// '%',
// '2',
// 'o'	%2o
// '1',
// '5',
// 'p'	15p

function charsToString(char1, char2, char3) {
    console.log(String(char1) + String(char2) + String(char3));
}

// charsToString('a',
// 'b',
// 'c'
// )
// charsToString('%',
// '2',
// 'o'
// )
// charsToString('1',
// '5',
// 'p'
// )


// 8.	Reversed Chars
// Write a program that takes 3 parameters (characters) and prints them in reversed order with a space between them.
// Examples
// Input	Output
// 'A',
// 'B',
// 'C'	C B A
// '1',
// 'L',
// '&'	& L 1


function reversedChars(char1, char2, char3) {
    console.log(String(char3) + ' ' + String(char2) + ' ' + String(char1));
}

// reversedChars('A',
// 'B',
// 'C'
// )
// reversedChars('1',
// 'L',
// '&'
// )



// 9.	Fruit
// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.
// Examples
// Input	Output
// 'orange', 2500, 1.80	I need $4.50 to buy 2.50 kilograms orange.

// Input	Output
// 'apple', 1563, 2.35	I need $3.67 to buy 1.56 kilograms apple.

function fruit(fruitType, grams, pricePerKG) {
    let weight = grams / 1000;
    let money = weight * pricePerKG
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);
}

// fruit('orange', 2500, 1.80)
// fruit('apple', 1563, 2.35)


// 10.	Same Numbers
// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.
// Examples
// Input	Output
// 2222222	true
//          14		
// 1234	false
//      10

function sameNumbers(num) {
    let str = String(num)
    let sum = 0
    let equal = true
    let lastDigit = Number(str.charAt(0))
    for (let i = 0; i < str.length; i++) {
        let currDigit = Number(str.charAt(i))
        sum += currDigit
        if (lastDigit != currDigit) {
            equal = false
        }
    }
    console.log(equal);
    console.log(sum);
}

// sameNumbers(2222222);
// sameNumbers(1234);


// 11.	Road Radar
// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
//                 `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.
// Examples
// Input	Output
// 40, 'city'	Driving 40 km/h in a 50 zone
// 21, 'residential'	The speed is 1 km/h faster than the allowed speed of 20 - speeding
// 120, 'interstate'	The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
// 200, 'motorway'	The speed is 70 km/h faster than the allowed speed of 130 - reckless driving

function roadRadar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    
    const speedingThreshold = 20;
    const excessiveSpeedingThreshold = 40;

    let limit;
    if (area == 'motorway') {
        limit = motorwayLimit
    }
    if (area == 'interstate') {
        limit = interstateLimit
    }
    if (area == 'city') {
        limit = cityLimit
    }
    if (area == 'residential') {
        limit = residentialLimit
    }

    let status;
    const speeding = speed <= limit + speedingThreshold
    const excessiveSpeeding = speed <= limit + excessiveSpeedingThreshold
    const recklessDriving = speed > limit + excessiveSpeedingThreshold

    if (speeding) {
        status = 'speeding'
    }
    else if (excessiveSpeeding) {
        status = 'excessive speeding'
    }
    else if (recklessDriving) {
        status = 'reckless driving'
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')



// 12.	Cooking by Numbers
// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.
// Examples
// Input	
// '32', 'chop', 'chop', 'chop', 'chop', 'chop'
// Output	
// 16
// 8
// 4
// 2
// 1

// Input
// '9', 'dice', 'spice', 'chop', 'bake', 'fillet'	
// Output
// 3
// 4
// 2
// 6
// 4.8


function numberCooking(number, action1, action2, action3, action4, action5) {
    function cookingAction(number, action) {
        if (action == 'chop') {
            return number / 2
        };
        if (action == 'dice') {
            return Math.sqrt(number)
        };
        if (action == 'spice') {
            return number + 1
        };
        if (action == 'bake') {
            return number * 3
        };
        if (action == 'fillet') {
            return number * 0.8
        };
    }

    let num = Number(number)
    num = cookingAction(num, action1)
    console.log(num);

    num = cookingAction(num, action2)
    console.log(num);

    num = cookingAction(num, action3)
    console.log(num);

    num = cookingAction(num, action4)
    console.log(num);

    num = cookingAction(num, action5)
    console.log(num);
}

// numberCooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// numberCooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')