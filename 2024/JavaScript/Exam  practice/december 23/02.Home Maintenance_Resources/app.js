window.addEventListener("load", solve);

function solve() {
    // Place, Action, and Person should be non-empty strings. 
    // If any of them are empty, the program should not do anything.

    const ulPendingElement = document.getElementById('task-list');
    const ulDoneElement = document.getElementById('done-list');
    const inputPlaceEl = document.getElementById('place');
    const inputActionEl = document.getElementById('action');
    const inputPersonEl = document.getElementById('person')
    const addButton = document.getElementById('add-btn')


    let editInProgress = false;


    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const place = inputPlaceEl.value;
        const action = inputActionEl.value;
        const person = inputPersonEl.value;

        if ([place, action, person].every(Boolean)) {
            handleAddButton();
        }
        
    });
    // add event.preventDefault to the button event

    function createLiEl() {
        const place = inputPlaceEl.value;
        const action = inputActionEl.value;
        const person = inputPersonEl.value;

        const newLi = document.createElement('li');
        const newArt = document.createElement('article');
        const pPlace = document.createElement('p');
        const pAction = document.createElement('p');
        const pPerson = document.createElement('p');
        const newDivButtons = document.createElement('div');
        const editButton = document.createElement('button');
        const doneButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        newLi.className = 'clean-task';
        pPlace.textContent = `Place:${place}`;
        pAction.textContent = `Place:${action}`;
        pPerson.textContent = `Place:${person}`;
        newDivButtons.className = 'buttons';
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        doneButton.className = 'done';
        doneButton.textContent = 'Done';
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete'

        newLi.appendChild(newArt);
        newLi.appendChild(newDivButtons);
        newArt.appendChild(pPlace);
        newArt.appendChild(pAction);
        newArt.appendChild(pPerson);
        newDivButtons.appendChild(editButton);
        newDivButtons.appendChild(doneButton);

        editButton.addEventListener('click', () => {
            if (editInProgress) return
            editInProgress = true;
            inputPlaceEl.value = place;
            inputActionEl.value = action;
            inputPersonEl.value = person;
            newLi.remove();
        })

        doneButton.addEventListener('click', () => {
            ulDoneElement.appendChild(newLi);
            newLi.removeChild(newDivButtons);
            newLi.appendChild(deleteButton);
        })

        return newLi
    }


    function clear() {
        inputPlaceEl.value = '';
        inputActionEl.value = '';
        inputPersonEl.value = '';
    }

    function handleAddButton() {
        ulPendingElement.appendChild(createLiEl());
        editInProgress = false;
        clear();
    }
}
