// 1.	Employees
// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name 
// and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 
// Examples
// Input	                    Output
// [
// 'Silas Butler',              Name: Silas Butler -- Personal Number: 12
// 'Adnaan Buckley',            Name: Adnaan Buckley -- Personal Number: 14
// 'Juan Peterson',             Name: Juan Peterson -- Personal Number: 13    
// 'Brendan Villarreal'         Name: Brendan Villarreal -- Personal Number: 18
// ]	                        

function employees(listOfEmployees) {
    listOfEmployees.forEach(
        employee => {
            console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
        }
    )
}

// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]
//     )

// 2.	Towns
// You’re tasked to create and print objects from a text table. 
// You will receive the input as an array of strings, where each string represents a table row, 
// with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
// The latitude and longitude columns will always contain valid numbers. 
// Check the examples to get a better understanding of your task.
// The output should be objects. 
// Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

// Examples
// Input
// ['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
// Output
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }

function towns(listOfTowns) {
    listOfTowns.forEach(
        townEntry => {
            let [town, latitude, longitude] = townEntry.split(' | ')
            latitude = parseFloat(latitude).toFixed(2);
            longitude = parseFloat(longitude).toFixed(2),
            console.log(`{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }`);
        }
    )
}

// towns(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
// )

// 3.	Store Provision
// You will receive two arrays. The first array represents the current stock of the local store. 
// The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product. 
// The second array could contain products that are already in the local store. 
// If that happens increase the quantity for the given product. 
// You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.

// Examples
// Input	
// [
// 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
// ],
// [
// 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
// ]	

// Output
// Chips -> 5
// CocaCola -> 9
// Bananas -> 44
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70

function storeProvision(stockList, orderList) {
    let stock = {}
    for (let num = 0; num < stockList.length; num+=2) {
        stock[stockList[num]] = Number(stockList[num+1]);
    }
    for (let num = 0; num < orderList.length; num+=2) {
        let currentItem = orderList[num];
        let itemInStock = stock[currentItem];
        let quantity = Number(orderList[num+1]);
        if (!itemInStock) {stock[currentItem] = 0};
        stock[currentItem] += quantity;
    }
    let allItems = Object.entries(stock)
    allItems.forEach(
        item => {console.log(`${item[0]} -> ${item[1]}`)}
    )
}

// storeProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
//     )

// 4.	Movies
// Write a function that stores information about movies inside an array. 
// The movie's object info must be name, director, and date. 
// You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, 
// name, or date, don’t print it) in JSON format.

// Examples
// Input	
// [
// 'addMovie Fast and Furious',
// 'addMovie Godfather',
// 'Inception directedBy Christopher Nolan',
// 'Godfather directedBy Francis Ford Coppola',
// 'Godfather onDate 29.07.2018',
// 'Fast and Furious onDate 30.07.2018',
// 'Batman onDate 01.08.2018',
// 'Fast and Furious directedBy Rob Cohen'
// ]
// Output
// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}

function movies(infoArray) {
    let moviesDB = {}
    let directedPattern = /directedBy/
    let datePattern = /onDate/
    infoArray.forEach(
        movie => {
            let instructions = movie.split(' ');
            let [firstWord, ...rest] = instructions;
            if (firstWord === 'addMovie') {
                let movieName = rest.join(' ');
                moviesDB[movieName] = {name: movieName,};
            } else {
                let directedCommand = directedPattern.test(movie);
                let dateCommand = datePattern.test(movie);
                if (directedCommand) {
                    let [movieName, director] = movie.split(directedPattern).map(part => part.trim());
                    if (moviesDB[movieName]) {
                        moviesDB[movieName]['director'] = director;
                    }
                }
                if (dateCommand) {
                    let [movieName, date] = movie.split(datePattern).map(part => part.trim());
                    if (moviesDB[movieName]) {
                        moviesDB[movieName]['date'] = date;
                    }
                }
            }
        }
    )

    
    for (const movie in moviesDB) {
        let movieDetails = moviesDB[movie]
        if (Object.keys(movieDetails).length > 1) {
            console.log(JSON.stringify(movieDetails));
        }
    }   
}

// movies(
//     [
//         'addMovie The Avengers',
//         'addMovie Superman',
//         'The Avengers directedBy Anthony Russo',
//         'The Avengers onDate 30.07.2010',
//         'Captain America onDate 30.07.2010',
//         'Captain America directedBy Joe Russo'
//         ]
        
// )

// 5.	Inventory
// Create a function, which creates a register for heroes, with their names, 
// level, and items (if they have such). 
// The input comes as an array of strings. 
// Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// You must store the data about every hero. 
// The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. 
// The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}

// Examples
// Input	
// [
// 'Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'
// ]	

// Output
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun

function inventory(heroEntry = []) {
    const heroList = [];

    heroEntry.forEach(hero => {
        let [heroName, heroLevel, ...rest] = hero.split(' / ');
        heroList.push({
            heroName,
            level: Number(heroLevel),
            items: rest,
        });
    });

    // Sort the heroList array by level
    const sortedHeroList = heroList.sort((a, b) => a.level - b.level);

    // Output the sorted list
    sortedHeroList.forEach(
        hero => {
            console.log(`Hero: ${hero['heroName']}`);
            console.log(`level => ${hero['level']}`);
            console.log(`items => ${hero['items'].join(', ')}`);
        }
        );
}


// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]
//     )

// 6.	Words Tracker
// Write a function that receives an array of words 
// and finds occurrences of given words in that sentence. 
// The input will come as an array of strings. 
// The first string will contain the words you will be looking for separated by a space. 
// All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. 
// The words should be sorted by count in descending.
// Example
// Input	Output
// [
// 'this sentence', 
// 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]	
// this - 3
// sentence - 2
// [
// 'is the', 
// 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']	
// the – 3
// is - 1

function countWords(entry) {
    let [searchWords, ...rest] = entry
    searchWords = searchWords.split(' ')
    const wordCount = {}
    rest.forEach(
        word => {
            let lower = word//.toLowerCase()
            if (word in wordCount) {
                wordCount[lower] += 1
            } else {
                wordCount[lower] = 1
            }
        }
    );

    const result = []

    searchWords.forEach(
        word => {
            result.push(word)//.toLowerCase())
        }
    );
    
    result
    .sort((a, b) => wordCount[b] - wordCount[a])
    .forEach(
        word => {
            if (word in wordCount) {
                console.log(`${word} - ${wordCount[word]}`)
            }
        }
    )
}

countWords([
    '', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )


// 7.	Odd Occurrences
// Write a function that extracts the elements of a sentence, 
// if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.
// Example
// Input	                                            Output
// 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'	            c# php 1 5
// 'Cake IS SWEET is Soft CAKE sweet Food'	            soft food

function oddOccurences(entry) {
    const isOdd = {};
    const order = entry.split(' ').map(word => word.toLowerCase());
    const result = [];
    order.forEach(
        word => isOdd[word] = !Boolean(isOdd[word])
    );
    order.forEach(
        word => {
            if (isOdd[word]) {
                result.push(word)
                delete isOdd[word]
            }
        }
    )
    console.log(result.join(' '));
}

// oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

// 8.	Piccolo
// Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".
// Examples
// Input	                Output
// ['IN, CA2844AA',         CA2822UU
// 'IN, CA1234TA',          CA2844AA
// 'OUT, CA2844AA',         CA9876HH
// 'IN, CA9999TT',          CA9999TT
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']	        
//                          
// ['IN, CA2844AA',         Parking Lot is Empty
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']	        

function piccolo(inputList) {
    const record = {};
    const result = [];

    inputList.forEach(
        entry => {
            let [direction, plateNumber] = entry.split(', ');
            if (direction === 'IN') {
                record[plateNumber] = true;
            } else {
                delete record[plateNumber];
            }
        }
    );

    for (plateNumber in record) {result.push(plateNumber)}

    if (result.length > 0) {
        result
            .sort((a, b) => a.localeCompare(b))
            .forEach(plateNumber => console.log(plateNumber));
    } else {
        console.log('Parking Lot is Empty');
    }
}

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']
// )

// 9.	Make a Dictionary
// You will receive an array with strings in the form of JSON's. 
// You have to parse these strings and combine them into one object. 
// Every string from the array will hold terms and a description. 
// If you receive the same term twice, replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
// Examples
// Input	
// [
// '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
// '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
// '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
// '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
// '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]	
// Output
// Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
// Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
// Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
// Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
// Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.

// function dictionary(listOfJSONs) {
//     const dict = {}
    
//     listOfJSONs.forEach(
//         entry => {dict.push(JSON.parse(entry))}
//     )

//     const result = [];

//     result
//         .sort(
//             (a, b) => {
//                 const keyA = Object.keys(a)[0];
//                 const keyB = Object.keys(b)[0];
//                 return keyA.localeCompare(keyB);
//             }
//         )
//         .forEach(
//             entry => {
//                 const key = Object.keys(entry)[0];
//                 const value = entry[key];
//                 console.log(`Term: ${key} => Definition: ${value}`);
//             }
//     )
// }

function dictionary(listOfJSONs) {
    const dict = {};

    listOfJSONs.forEach(entry => {
        const parsedEntry = JSON.parse(entry);
        const key = Object.keys(parsedEntry)[0];
        dict[key] = parsedEntry[key];
    });

    Object.keys(dict)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            console.log(`Term: ${key} => Definition: ${dict[key]}`);
        });
}

// dictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
//     '{"Microphone":"Mic Drop."}'
//     ]
//     )

// 10.Class Vehicle
// Create a class with the name Vehicle that has the following properties:
// •	type – a string
// •	model – a string
// •	parts – an object that contains:
//      o	engine – number (quality of the engine)
//      o	power – number
//      o	quality – engine * power
// •	fuel – a number
// •	drive – a method that receives fuel loss and decreases the fuel of the vehicle by that number
// The constructor should receive the type, the model, the parts as an object, and the fuel
// In judge post your class (Note: all names should be as described)

// Example
// Test your Vehicle class.

// Input	                                                            Output
// let parts = { engine: 6, power: 100 };                               100
// let vehicle = new Vehicle('a', 'b', parts, 200);                     600
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);	                                
//                                                                      
// let parts = {engine: 9, power: 500};                                 820
// let vehicle = new Vehicle('l', 'k', parts, 840);
// vehicle.drive(20);
// console.log(vehicle.fuel);	                                        

class Vehicle {
    constructor(
        type = '', 
        model = '', 
        parts = { engine: 0, power: 0, quality: 0 }, 
        fuel = 0
    ) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = this.parts.quality || this.parts.engine * this.parts.power;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

let parts2 = {engine: 9, power: 500};
let vehicle2 = new Vehicle('l', 'k', parts, 840);
vehicle2.drive(20);
console.log(vehicle2.fuel);
