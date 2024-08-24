function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook'

    const loadButton = document.getElementById('btnLoad');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');
    const createButton = document.getElementById('btnCreate');
    const phonebookUlElement = document.getElementById('phonebook');


    function createPersonInfoElement(person, phone, id) {
        const newLiElement = document.createElement('li');
        const newSpanElement = document.createElement('span');
        const newButton = document.createElement('button');

        newSpanElement.textContent = `${person}: ${phone}`
        newButton.style.display = 'inline';
        newButton.textContent = 'Delete';
        newButton.id = id;

        newButton.addEventListener('click', () => {
            fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
                })
        })


        newLiElement.append(newSpanElement, newButton);

        return newLiElement
    }

    function reloadPhonebook() {
        phonebookUlElement.textContent = ''
        fetch(BASE_URL).then((response) => response.json()).then(
            contentData => {
                Object.values(contentData).forEach(
                    (entry) => {
                        const { person, phone, _id: id } = entry;
                        phonebookUlElement.appendChild(createPersonInfoElement(person, phone, id));
                    }
                )
            }
        )
    }

    function postContact() {
        const person = personElement.value;
        const phone = phoneElement.value;

        const postRequestBody = { person, phone }

        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postRequestBody)
        });
    }

    loadButton.addEventListener('click', () => reloadPhonebook());
    createButton.addEventListener('click', () => postContact());

}

attachEvents();