function colorize() {
    const table = document.getElementsByTagName('tr');
    for (let row = 1; row < table.length; row+=2) {
        table[row].style = 'background-color: teal'
    }
}