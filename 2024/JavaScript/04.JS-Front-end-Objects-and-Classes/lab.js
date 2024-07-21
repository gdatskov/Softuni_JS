function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person['lastName'] = lastName;
    person.age = age
    return person;
    }

// console.log(personInfo('Pesho', 'Stamatov', 33));

// function printObjectPairs(obj) {
//     for (let key of Object.keys(obj)) {
//         console.log(`${key} -> ${obj[key]}`);
//     }
// }

// printObjectPairs(
//     {
//         name: "Sofia",
//         area: 492,
//         population: 1238438,
//         country: "Bulgaria",
//         postCode: "1000"
//     }
// )

function convertToObject(json) {
    function printObjectPairs(obj) {
        for (let key of Object.keys(obj)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
    let parsedObj = JSON.parse(json);
    printObjectPairs(parsedObj);
}

// convertToObject(
//     '{"name": "George", "age": 40, "town": "Sofia"}'
// )

function convertToJson(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName,
        hairColor,
    }

    let json = JSON.stringify(person)
    console.log(json);
}

// convertToJson('George', 'Jones', 'Brown');

function phoneBook(list) {
    let bookMap = new Map();
    list.forEach((entry) => {
        let [firstName, phone] = entry.split(' ');
        bookMap.set(firstName, phone)
        }
    )
    for (let [firstName, phone] of bookMap.entries()) {
        console.log(`${firstName} -> ${phone}`);
    }
}

// phoneBook([
//     'Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344',
//     ]
// );

// 6.	Meetings
// Write a function that manages meeting appointments. 
// The input comes as an array of strings. 
// Each string contains a weekday and person’s name. 
// For each successful meeting, print a message. 
// If you receive the same weekday twice, 
// the meeting cannot be scheduled so print a conflicting message. 
// In the end, print a list of all successful meetings.

function meetings(list) {
    let schedule = {};
    list.forEach(
        (meeting) => {
            let [weekday, personName] = meeting.split(' ');
            let free = !(weekday in schedule);
            if (free) {
                console.log(`Scheduled for ${weekday}`);
                schedule[weekday] = personName;
            } else {
                console.log(`Conflict on ${weekday}!`);
            }
        }
    );
    Object.keys(schedule)
        .forEach(
            (weekday) => 
            console.log(`${weekday} -> ${schedule[weekday]}`)
        );
}

// meetings([
//     'Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim',
//     ]
// )


// 7.	Address Book
// Write a function that stores information about a person’s name and his address. 
// The input comes as an array of strings. Each string contains the name and the address separated by a colon. 
// If you receive the same name twice just replace the address. 
// In the end, print the full list, sorted alphabetically by the person’s name.

function addressBook(list) {
    let book = {};
    list.forEach(
        (person) => {
            let [personName, address] = person.split(':');
                book[personName] = address;
            }
    );
    Object.keys(book)
        .sort((a, b) => a.localeCompare(b))
        .forEach(
            (weekday) => 
            console.log(`${weekday} -> ${book[weekday]}`)
        );
}

// addressBook(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']
// )

// 8.	Cats
// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input. 
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.

function cats(catsList) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        
        meow() {
           return console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    catsList.forEach(
        (cat) => {
            let [catName, catAge] = cat.split(' ');
            let newCat = new Cat(catName, catAge);
            newCat.meow();
        }
    )
}

// cats(['Mellow 2', 'Tom 5']);


// 9.	Songs
// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. 
// Next n elements will be the songs data in the following format: 
// "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). 
// If the value of the last element is "all", print the names of all the songs.

function songs(entry) {
    let [_, ...rest] = entry;
    let songsList = rest;
    let typeList = rest.pop();
    songsList.forEach(
        song => {
            [songType, songName, _] = song.split('_')
            if (typeList.toLowerCase() === 'all') {
                console.log(songName);
            } else {
                if (songType === typeList) {
                    console.log(songName);
                }
            }
        }
    )
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );


