text = 'text notext Text more text'
expr = '[A-Z][a-z]+'
let smth = text.match(expr)
console.log(smth);

function solve(text, word) {
    let expr = new RegExp(`\\b${word}\\b`, 'gi')
    console.log(expr)
    let find = text.match(expr)
    // console.log(`Something and ${find}`);
    console.log(find.length);
}

solve(text, 'Text')