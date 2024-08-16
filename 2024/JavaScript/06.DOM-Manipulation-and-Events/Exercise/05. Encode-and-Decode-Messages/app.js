function encodeAndDecodeMessages() {
    const [inputMessageElement, outputMessageElement] = document.querySelectorAll('#main div')
    const inputMessageButton = inputMessageElement.querySelector('button');
    const outputMessageButton = outputMessageElement.querySelector('button');
    
    inputMessageButton.addEventListener(
        'click',
        () => {
            console.log('input clicked');
            const inputMessage = inputMessageElement.querySelector('textarea').value;
            const outputMessage = [...inputMessage].map(char => String.fromCharCode(char.charCodeAt() + 1));
            outputMessageElement.querySelector('textarea').value = outputMessage.join('');
            inputMessageElement.querySelector('textarea').value = ''
        }
    )

    outputMessageButton.addEventListener(
        'click',
        () => {
            console.log('decode clicked');
            const receivedMessage = outputMessageElement.querySelector('textarea').value;
            const decodedMessage = [...receivedMessage].map(char => String.fromCharCode(char.charCodeAt() - 1));
            outputMessageElement.querySelector('textarea').value = decodedMessage.join('');
        }
    )
}