function attachEventsListeners() {
    const convertersParentElement = document.getElementsByTagName('main')[0];
    const secondsValueElement = convertersParentElement.querySelector('#seconds');
    const minutesValueElement = convertersParentElement.querySelector('#minutes');
    const hoursValueElement = convertersParentElement.querySelector('#hours');
    const daysValueElement = convertersParentElement.querySelector('#days');
    convertersParentElement.addEventListener(
        'click',
        (e) => {
            const clickedButton = e.target;
            if (clickedButton.type !== 'button') {
                return;
            };
            const convertButtonTextInputSiblingElement = clickedButton.parentElement.querySelector('input[type="text"]');
            const inputValue = convertButtonTextInputSiblingElement.value
            const convertFrom = convertButtonTextInputSiblingElement['id'];
            let entryValueInSeconds = Number(inputValue)
            switch (convertFrom) {
                case 'minutes':
                    entryValueInSeconds *= 60;
                    break;
                case 'hours':
                    entryValueInSeconds *= 60**2;
                    break;
                case 'days':
                    entryValueInSeconds *= 60**2*24;
                    break;
            }
            secondsValueElement.value = entryValueInSeconds;
            minutesValueElement.value = entryValueInSeconds/60;
            hoursValueElement.value = entryValueInSeconds/(60**2);
            daysValueElement.value = entryValueInSeconds/(60**2*24);
        }
    )
}