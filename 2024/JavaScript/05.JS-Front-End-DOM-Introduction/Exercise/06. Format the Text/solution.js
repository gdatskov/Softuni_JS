function solve() {
  const inputText = document.getElementById('input').value;
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = ''; // Clear output
  const sentenceList = inputText ? inputText.split('.') : [];
  const sentenceStep = 3;
  for (let index = 0; index < sentenceList.length; index+=sentenceStep) {
    const listOf3 = []
    for (let i = index; ((i < sentenceList.length) && (i < index + sentenceStep)); i++) {
      if (sentenceList[i]) {listOf3.push(sentenceList[i])}
    }
    const threeSentences = listOf3.map(sntns => (sntns.trim() + '.')).join(' ');
    const newParagraphElement = document.createElement('p');
    // debugger;
    newParagraphElement.textContent = threeSentences
    outputElement.appendChild(newParagraphElement)
  }
}