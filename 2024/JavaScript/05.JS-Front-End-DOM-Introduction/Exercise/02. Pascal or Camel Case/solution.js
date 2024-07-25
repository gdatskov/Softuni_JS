function solve() {
  const inputText = document.getElementById('text').value.toLowerCase();
  const inputNamingConvention = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');
  const wordList = inputText.split(' ');
  let index = 0;
  if (inputNamingConvention === 'Camel Case') {
    index = 1;
  } else if (inputNamingConvention !== 'Pascal Case'){
    resultElement.textContent = 'Error!';
    return
  };
  for (let i = index; i<wordList.length; i++){
    wordList[i] = wordList[i][0].toUpperCase() + wordList[i].slice(1);
  }
  resultElement.textContent = wordList.join('')
}