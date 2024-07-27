function extract(content) {
    const text = document.getElementById(content).textContent;
    const words = [];
    let index = 0;
    let start = false;
    let word = '';
    while (index < text.length) {
        let char = text[index++];
        if (char === '(') {
            start = true;
            continue;
        } else if (char === ')') {
            start = false;
            words.push(word);
            word = '';
        } else if (start) {
            word += char;
        }
    }
    console.log(words);
    return words.join('; ');
}