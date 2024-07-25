function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchInput = document.getElementById('searchField').value;
      const searchPattern = new RegExp(searchInput, 'i');
      const items = document.getElementsByTagName('tbody')[0].children;
      const itemsArray = Array.from(items)
      itemsArray.forEach(row => {
         // console.log(element.innerText);
         if (searchPattern.test(row.innerText)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
   }
}