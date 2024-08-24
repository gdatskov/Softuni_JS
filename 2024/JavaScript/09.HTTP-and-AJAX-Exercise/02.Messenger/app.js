function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger/'
    
    
    const messagesElement = document.getElementById('messages');
    const authorElement = document.querySelector('input[name=author]');
    const messageElement = document.querySelector('input[name=content]');
    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');

    
    function fetchAllPosts() {
        fetch(BASE_URL).then((response) => response.json()).then(
            (data) => {
                messagesElement.value = ''
                Object.values(data).forEach(
                    (post) => {
                        const {author, content: message} = post;
                        messagesElement.value += `${author}: ${message}\n`
                    }
                )
                messagesElement.value =  messagesElement.value.slice(0, -1);
            }
        )
    }

    function sendPost() {
        const userName = authorElement.value;
        const userMessage = messageElement.value;


        const postRequestBody = {
            author: userName,
            content: userMessage,
        }


        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postRequestBody)
        })

        // clear cells
        authorElement.value = ''
        messageElement.value = ''
    }

    refreshButton.addEventListener(
        'click',
        () => fetchAllPosts()
    )

    sendButton.addEventListener(
        'click',
        () => sendPost()
    )
}

attachEvents();