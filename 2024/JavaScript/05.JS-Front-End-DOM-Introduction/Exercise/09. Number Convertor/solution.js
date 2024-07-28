function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', onClick);
    const selectionToElement = document.getElementById('selectMenuTo');
    
    const options = [
        { value: 'binary', text: 'Binary' },
        { value: 'octal', text: 'Octal' },
        { value: 'hexadecimal', text: 'Hexadecimal' }
    ];
    
    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.textContent = option.text;
        selectionToElement.appendChild(newOption);
    });
    
    
    function onClick () {
        // debugger;
        const entryNumberValue = Number(document.getElementById('input').value);
        const selectionFromElement = document.getElementById('selectMenuFrom');
        const selectionToElement = document.getElementById('selectMenuTo');
        const selectedFromValue = selectionFromElement.selectedOptions[0].value;
        const selectedToValue = selectionToElement.selectedOptions[0].value;
        const outputElement = document.getElementById('result')
        
        console.log(selectedToValue);
        let convertedNumber;
        if (selectedFromValue === 'decimal') {
            if (selectedToValue === 'binary') {
                convertedNumber = entryNumberValue.toString(2);
            }
            if (selectedToValue === 'hexadecimal') {
                convertedNumber = entryNumberValue.toString(16).toUpperCase();
            }
            if (selectedToValue === 'octal') {
                convertedNumber = entryNumberValue.toString(8);
            }
        }


        outputElement.value = convertedNumber;
    }
}