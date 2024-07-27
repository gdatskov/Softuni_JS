function extractText() {
    const getItems = document.getElementById('items').innerText;
    const textArea = document.getElementById('result');
    console.log(textArea);
    textArea.value = getItems
    console.log(getItems);

}