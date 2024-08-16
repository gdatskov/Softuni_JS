function attachEventsListeners() {
    infoToMeters = {
        km: 1000,
        m:   1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    const convertButton = document.getElementById('convert');

    convertButton.addEventListener(
        'click',
        () => {
            const selectedInput = document.querySelector('#inputUnits option:checked').value;
            const inputValue = Number(document.querySelector('#inputDistance').value);
            const selectedOutput = document.querySelector('#outputUnits option:checked').value;
            const outputValueElement = document.querySelector('#outputDistance')
        
            const convertInputToMeters = infoToMeters[selectedInput]
            const convertMetersToSelected = inputValue * convertInputToMeters / infoToMeters[selectedOutput]
        
            outputValueElement.value = convertMetersToSelected;
        }
    )

    

}

