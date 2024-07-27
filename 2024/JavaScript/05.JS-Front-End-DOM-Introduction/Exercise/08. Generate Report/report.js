function generateReport() {
    const tableHeaders = document.querySelectorAll('thead tr th');
    const headerInfo = [];
    // console.log(tableHeaders);
    tableHeaders.forEach(th => {
        const currentHeaderTitle = th.textContent;
        const thChildrenInputArray = Array.from(th.children)
        thChildrenInputArray.forEach(child => {
            const currentHeaderName = child.name;
            const currentHeaderChecked = child.checked;
            const headerObject = {
                fieldTitle: currentHeaderTitle,
                fieldName: currentHeaderName,
                fieldStatus: currentHeaderChecked
            }
            headerInfo.push(headerObject)
        });
    });
    // console.log(headerInfo);

    const tableRecords = document.querySelectorAll('tbody tr');
    const recordsArray = Array.from(tableRecords);
    const result = []
    for (const record of recordsArray) {
        const thisRecordObject = {}
        for (let index = 0; index < headerInfo.length; index++) {
            const headerField = headerInfo[index];
            const isNeeded = headerField.fieldStatus
            if (isNeeded) {
                thisRecordObject[headerField.fieldName] = record.children[index].textContent;
            }
        }
        result.push(thisRecordObject)
    }

    const outputField = document.getElementById('output')
    outputField.value = JSON.stringify(result, null, 2)
}