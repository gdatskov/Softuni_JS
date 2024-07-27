function sumTable() {
    const tableData = document.getElementsByTagName('td');
    let sum = 0
    for (let dataPoint = 1; dataPoint < tableData.length - 1; dataPoint+=2) {
        let dataValue = tableData[dataPoint].textContent
        sum += Number(dataValue);
    }
    const sumElement = document.getElementById('sum')
    sumElement.textContent = sum
}