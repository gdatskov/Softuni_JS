function create(words) {
   const contentElement = document.getElementById('content');
   words.forEach(word => {
      const newParagraph = document.createElement('p');
      const newDiv = document.createElement('div');
      newParagraph.textContent = word;
      newParagraph.setAttribute('style', 'display:none');
      newDiv.addEventListener(
         'click',
         (e) => { 
            const divChildP = e.currentTarget.querySelector('p:first-child');
            divChildP.removeAttribute('style', 'display:none');
         });
      newDiv.appendChild(newParagraph);
      contentElement.appendChild(newDiv);
   });
}