function solve() {
  const inputText = document.getElementById('input').value; // Get the input contents
  const outputElement = document.getElementById('output'); // Get the output element
  outputElement.innerHTML = ''; // Clear the output

  // Split the input into sentences if its not only whitespaces
  const sentenceList = inputText.trim() ? inputText.split('.') : []; 

  // Get the sentences list length as constant variable, as its used all over
  const sentenceListLength = sentenceList.length;

  // Check if the last sentence ends with a period
  const lastSentenceEndsWithDot = sentenceList[sentenceListLength-1] === '';

  // Get the actual index of an actual sentence ending with dot
  const actualLastSentenceIndex = lastSentenceEndsWithDot ? sentenceListLength-2 : sentenceListLength-1;
  
  // Define the number of sentences per paragraph
  const numberOfSentencesPerParagraph = 3;
  
  // Create empty container to be filled with sentences up until the required number of sentences
  const temporaryContainer = []; 

  let index = 0
  // Iterate over the sentence list
  while (index < sentenceListLength) { 
    // Iterate over the sentence list until the container is full or sentence list ends
    while (temporaryContainer.length < numberOfSentencesPerParagraph && index < sentenceListLength) { 
      if (sentenceList[index].trim()) { // Check if the sentence is not empty
        // check if a period has to be added to the sentence
        let endChar = index < actualLastSentenceIndex ? '.' : lastSentenceEndsWithDot ? '.' : ''; 
        temporaryContainer.push(sentenceList[index]+endChar) // Append the sentence to the temporary container
      }
      index++;
    }
    if (temporaryContainer.length) { // Check if the container actually contains something
      const threeSentences = temporaryContainer.map(sntns => (sntns.trim())).join(' '); // Form the paragraph text content
      temporaryContainer.length = 0; // Clear temporary container for next iteration
      const newParagraphElement = document.createElement('p'); // Create new paragraph element
      newParagraphElement.textContent = threeSentences; // Add the text content to the new paragraph element
      outputElement.appendChild(newParagraphElement); // Append the prepared paragraph to the output element
    }
  }
}