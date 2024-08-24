function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/appointments/'

    const loadButton = document.getElementById('load-appointments');
    const appointmentsListEl = document.getElementById('appointments-list');
    const modelInputEl = document.getElementById('car-model');
    const serviceInputEl = document.getElementById('car-service');
    const dateInputEl = document.getElementById('date');
    const addButton = document.getElementById('add-appointment');
    const editButton = document.getElementById('edit-appointment');

    let currentRecordId = ''

    loadButton.addEventListener('click', reload)

    function reload() {
        appointmentsListEl.textContent = ''
        fetch(BASE_URL).then(resolve => resolve.json()).then(result => {
            Object.values(result).forEach(el => {
                const {model, service, date, _id} = el
                const newLiEl = createAppointmentEl(model, date, service, _id);
                appointmentsListEl.appendChild(newLiEl)

            })
        })
        clearInputs();
    }

    function clearInputs() {
        modelInputEl.value = ''
        serviceInputEl.value = ''
        dateInputEl.value = ''
    }

    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        const model = modelInputEl.value
        const service = serviceInputEl.value
        const date = dateInputEl.value

        const postBody = {
            model,
            service,
            date
        }

        clearInputs();
        
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postBody)
        }).then(() => {
            reload();
        })
    })

    function createAppointmentEl(model, date, service, id) {
        currentRecordId = id;

        const liEl = document.createElement('li');
        const h2ModelEl = document.createElement('h2');
        const h3DateEl = document.createElement('h3');
        const h3ServiceEl = document.createElement('h3');
        const divEl = document.createElement('div');
        const changeButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        liEl.className = 'appointment';
        divEl.className = 'buttons-appointment';
        changeButton.className = 'change-btn';
        deleteButton.className = 'delete-btn';

        h2ModelEl.textContent = model;
        h3DateEl.textContent = date;
        h3ServiceEl.textContent = service;
        changeButton.textContent = 'Change';
        deleteButton.textContent = 'Delete';

        liEl.appendChild(h2ModelEl);
        liEl.appendChild(h3DateEl);
        liEl.appendChild(h3ServiceEl);
        liEl.appendChild(divEl);
        divEl.appendChild(changeButton);
        divEl.appendChild(deleteButton);

        changeButton.addEventListener('click', handleChangeButton)
        deleteButton.addEventListener('click', handleDeleteButton)

        function handleChangeButton() {
            currentRecordId = id
            console.log(id);
            addButton.disabled = true;
            editButton.disabled = false;
            modelInputEl.value = model;
            serviceInputEl.value = service;
            dateInputEl.value = date;
        }

        async function handleDeleteButton() {
            await fetch(`${BASE_URL}${id}`, {
                method: 'DELETE'
            })
            reload();
        }

        return liEl
    }

    editButton.addEventListener('click', handleEditButton)

    async function handleEditButton() {
        const model = modelInputEl.value;
        const service = serviceInputEl.value;
        const date = dateInputEl.value;
        console.log(currentRecordId);

        await fetch(`${BASE_URL}${currentRecordId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({model, service, date, id: currentRecordId})
        }).then(() => {
            editButton.disabled = true;
            addButton.disabled = false;
        })
        
        reload();
    }

}
solve()