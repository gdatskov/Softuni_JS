function subtract() {
    const firstNumberValue = document.getElementById('firstNumber').value;
    const secondNumberValue = document.getElementById('secondNumber').value;
    const resultElement = document.getElementById('result');
    const result = Number(firstNumberValue) - Number(secondNumberValue);
    resultElement.textContent = result//.toFixed(2)
}