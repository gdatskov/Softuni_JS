function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('sum');
    const sum = Number(num1) + Number(num2);
    resultElement.value = sum;
}
