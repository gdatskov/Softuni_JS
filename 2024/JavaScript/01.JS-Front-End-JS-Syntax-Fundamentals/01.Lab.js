// 1.	Multiply the Number by 2
// Write a function that receives a number and prints as result 
// that number multiplied by two.

function multiply2(number) {
    let result = number*2;
    console.log(result);
}

multiply2(0)
multiply2(2)
multiply2(3)
multiply2(-1)
multiply2(Infinity)
multiply2(null)


// 2.	Student Information
// You will be given 3 parameters – student name (string), age (number), and average grade (number). Your task is to print all the info about the student in the following format: 
// `Name: {student name}, Age: {student age}, Grade: {student grade}`
//  Note: The grade should be formatted to the second decimal point.

function studentInformation(studentName, age, avgGrade) {
    console.log(`Name: ${studentName}, Age: ${age}, Grade: ${avgGrade.toFixed(2)}`);
}

studentInformation('John', 15, 5.54678)
studentInformation('Steve', 16, 2.1426)
studentInformation('Marry', 12, 6.00)


// 3.	Excellent Grade
// Write a function that receives a single number and checks if the grade is excellent or not. 
// If it is, print "Excellent", otherwise print "Not excellent".

function excellent(grade) {
    if (grade >= 5.5) {
        console.log('Excellent')
    } else {
        console.log('Not excellent')
    }
}

excellent(5.5)
excellent('5.5')
excellent(4)
excellent('4')

// 4.	Month Printer
// Write a program, that takes an integer as a parameter and prints the corresponding month. If the number is more than 12 or less than 1 print "Error!"
// Input
// You will receive a single number.
// Output
// If the number is within the boundaries print the corresponding month, otherwise print "Error!"

function monthPrinter(month) {
    
    let castedMonth = Number(month)

    switch (castedMonth) {
        case 1: 
            console.log('January');
            break;
        case 2: 
            console.log('February');
            break;
        case 3: 
            console.log('March');
            break;
        case 4: 
            console.log('April');
            break;
        case 5: 
            console.log('May');
            break;
        case 6: 
            console.log('June');
            break;
        case 7: 
            console.log('July');
            break;
        case 8: 
            console.log('August');
            break;
        case 9: 
            console.log('September');
            break;
        case 10: 
            console.log('October');
            break;
        case 11: 
            console.log('November');
            break;
        case 12: 
            console.log('December');
            break;
        default:
            console.log('Error!');
    }
}

monthPrinter(1)
monthPrinter('1')
monthPrinter(2)
monthPrinter(3)
monthPrinter(4)
monthPrinter(5)
monthPrinter(6)
monthPrinter(7)
monthPrinter(8)
monthPrinter(9)
monthPrinter(10)
monthPrinter(11)
monthPrinter(12)
monthPrinter(0)
monthPrinter(-1)
monthPrinter(Infinity)
monthPrinter('-1')


// 5.	Math Operations
// Write a JS function that takes two numbers and a string as input. 

// The string may be one of the following: '+', '-', '*', '/', '%', '**'.

// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.

function mathOps(number1, number2, operator) {
    let num1 = Number(number1);
    let num2 = Number(number2);
    let result = Number;
    switch (operator) {
        case '+': {
            result = num1 + num2;
            break;
        };
        case '-': {
            result = num1 - num2;
            break;
        };
        case '*': {
            result = num1 * num2;
            break;
        };
        case '/': {
            result = num1 / num2;
            break;
        };
        case '%': {
            result = num1 % num2;
            break;
        };
        case '**': {
            result = num1 ** num2;
            break;
        };
        default: NaN;
    };
    console.log(result)
}

mathOps(1,1,'+')
mathOps(1,1,'-')
mathOps(1,1,'/')
mathOps(1,1,'*')
mathOps(8,2,'%')
mathOps(10,-1,'**')
mathOps(2,Infinity,'**')
mathOps(1,0,'/')
mathOps(1,1,'***')
mathOps(1,1,'asd')

// 6.	Largest Number
// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function largestNumber(number1, number2, number3){
    let num1 = Number(number1);
    let num2 = Number(number2);
    let num3 = Number(number3);
    let result;

    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num3) {
        result = num2;
    } else {
        result = num3;
    }

    console.log(`The largest number is ${result}.`)
}

largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)

// 7.	Theatre Promotions
// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:
// Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
// Weekday	12$	18$	12$
// Weekend	15$	20$	15$
// Holiday	5$	12$	10$
// Input
// The input comes in two parameters. The first one will be the type of day (string). The second – is the age of the person (number).
// Output
// Print the price of the ticket according to the table, or "Error!" if the age is not in the table.
// Constraints
// •	The age will be in the interval [-1000…1000].
// •	The type of day will always be valid. 

function theatre(dayType, age) {
    let price;
    let ageGroup;

    if (0 <= age && age <= 18) {
        ageGroup = 'Kid';
    };
    if (18 < age && age <= 64) {
        ageGroup = 'Adult';
    };
    if (64 < age && age <= 122) {
        ageGroup = 'Elder';
    };

    if (dayType == 'Weekday') {
        if (ageGroup == 'Adult') {
            price = 18;
        } else if (ageGroup) {
            price = 12
        }
    };
    
    if (dayType == 'Weekend') {
        if (ageGroup == 'Adult') {
            price = 20;
        } else if (ageGroup) {
            price = 15
        }

    };
    
    if (dayType == 'Holiday') {
        if (ageGroup == 'Kid') {
            price = 5;
        };
        if (ageGroup == 'Adult') {
            price = 12;
        };
        if (ageGroup == 'Elder') {
            price = 10
        }
    };

    if (dayType && price) {
        console.log(`${price}$`)
    } else {
        console.log('Error!')
    }
    
}

theatre('Weekday', 42)
theatre('Holiday', -12)
theatre('Holiday', 15)

// 8.	Circle Area
// Write a function that takes a single argument as input. Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.
// If the argument type is NOT a number, print the following text on the console: 
// `We can not calculate the circle area, because we receive a {type of argument}.`
// The input comes as a single argument passed to your function.
// The output should be printed on the console.

function A2(radius) {
    let radiusType = typeof radius;
    let radiusValue = Number(radius);
    let area;

    if (radiusValue || radiusValue == 0) {
        area = (Math.PI * radiusValue**2).toFixed(2)
    } else {
        let errorMessage;
        if (!radius) {
            errorMessage = radius
        } else {
            errorMessage = radiusType
        }
        area = `We can not calculate the circle area, because we receive a ${errorMessage}.`
    }
    console.log(area);
}

A2(2)
A2('2')
A2(NaN)
A2('asd')
A2(-1)
A2(0)
A2(Infinity)
A2(undefined)

// 9.	Numbers from 1 to 5
// Write a function that prints all the numbers from 1 to 5 (inclusive) each on a separate line.


function numbers1to5() {
    for (let number = 1; number <= 5; number++) {
        console.log(number);
    }
}

numbers1to5()


// 10.	Numbers from M to N
// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N.

function numbersMtoN(M, N) {
    console.log(`Print numbers from ${M} to ${N}`);
    for (let number = M; number >= N; number--) {
        console.log(number);
    }
}

numbersMtoN(6, 2)
numbersMtoN(4, 1)
numbersMtoN(6, 2)