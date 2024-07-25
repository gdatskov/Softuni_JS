function search() {
   const townListElements = document.getElementById('towns').children;
   const searchInput = document.getElementById('searchText').value;
   const searchPattern = new RegExp(searchInput, 'i')
   const resultElement = document.getElementById('result');
   let matchCount = 0;
   for (const town of townListElements) {
      // debugger;
      if (town.textContent.match(searchPattern)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchCount++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   resultElement.textContent = `${matchCount} matches found`
}
