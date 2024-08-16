function addItem() {
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');
    const dropDownMenuElement = document.getElementById('menu');

    const inputText = inputTextElement.value;
    const inputValue = inputValueElement.value;

    const newOptionElement = document.createElement('option');
    newOptionElement.textContent = inputText;
    newOptionElement.value = inputValue;
    dropDownMenuElement.appendChild(newOptionElement);

    inputTextElement.value = '';
    inputValueElement.value = '';


}