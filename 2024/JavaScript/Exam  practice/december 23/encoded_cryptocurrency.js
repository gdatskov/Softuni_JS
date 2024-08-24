function solve(inputList) {
    let string = inputList.shift();
    inputList.forEach(
        item => {
            const commandList = item.split('?');
            const command = commandList.shift();
            if (command === 'TakeEven') {
                const newList = []
                let i=0
                while (i < string.length) {
                    if (i % 2 !== 1) {
                        newList.push(string[i])
                    }
                    i++;
                }
                string = newList.join('');
                console.log(string);
            }
            if (command === 'ChangeAll') {
                const [substring, replacement] = commandList
                const changeRegex = new RegExp(substring, 'g');
                string = string.replace(changeRegex, replacement);
                console.log(string);
            }
            if (command === 'Reverse') {
                let [substring] = commandList;
                const reverseRegex = new RegExp(substring)
                const test = reverseRegex.test(string)
                if (test) {
                const reversedSubstringList = substring.split('').reverse();
                const stringWithRemovedSubstring = string.replace(reverseRegex, '');
                const cleanedStringFromSubstringList = string.replace(substring, '').split('');
                cleanedStringFromSubstringList.push(...reversedSubstringList);
                string = cleanedStringFromSubstringList.join('');
                console.log(string);
                }
                else {
                    console.log('error');
                }
            }
            if (command === 'Buy') {
                console.log(`The cryptocurrency is: ${string}`);
            }
        }
    )
}

// solve(["asdWTFasd", "Reverse?WTF"])
solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"]))
// input
// (["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
// "TakeEven",
// "Reverse?!nzahc",
// "ChangeAll?m?g",
// "Reverse?adshk",
// "ChangeAll?z?i",
// "Buy"])

//output
// ztsnotBztcoznztsVe!nzahc
// ztsnotBztcoznztsVechazn!
// ztsnotBztcoznztsVechazn!
// error
// itsnotBitcoinitsVechain!
// The cryptocurrency is: itsnotBitcoinitsVechain!

