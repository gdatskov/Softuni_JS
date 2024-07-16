const fs = require('fs');

// Read the content of 'test.json' synchronously
const json = fs.readFileSync('04.JS-Front-end-Objects-and-Classes/test.json');

// Parse the JSON data
const data = JSON.parse(json);

// Parse the JSON data and print it
console.log(JSON.stringify(data, null, 2));