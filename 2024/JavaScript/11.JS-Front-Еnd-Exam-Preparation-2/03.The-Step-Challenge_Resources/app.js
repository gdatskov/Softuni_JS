function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/records/'

    const loadRecordsButton = document.getElementById('load-records');
    const exampleRecord = document.querySelector('.record');
    exampleRecord.remove();

    const recordsList = document.getElementById('list')

    const inputNameEl = document.getElementById('p-name');
    const inputStepsEl = document.getElementById('steps');
    const inputCalEl = document.getElementById('calories');

    const addButton = document.getElementById('add-record');
    const editButton = document.getElementById('edit-record');



    loadRecordsButton.addEventListener('click', refresh)

    addButton.addEventListener('click', handleAddButton);
    editButton.addEventListener('click', handleEditButton);

    let currentRecordId = ''

    function createRecord(obj) {
        const {name, steps, calories, _id} = obj

        currentRecordId = _id;

        const liEl = document.createElement('li');
        liEl.className = 'record';

        const infoDivEl = document.createElement('div');
        infoDivEl.className = 'info';
        const buttonDivEl = document.createElement('div');
        buttonDivEl.className = 'btn-wrapper';
        
        const pName = document.createElement('p');
        pName.textContent = name;
        const pSteps = document.createElement('p');
        pSteps.textContent = steps;
        const pCalories = document.createElement('p');
        pCalories.textContent = calories

        const changeButton = document.createElement('button');
        changeButton.className = 'change-btn';
        changeButton.textContent = 'Change';
        changeButton.addEventListener('click', handleChangeButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', handleDeleteButton);

        liEl.appendChild(infoDivEl);
        liEl.appendChild(buttonDivEl);
        infoDivEl.appendChild(pName);
        infoDivEl.appendChild(pSteps);
        infoDivEl.appendChild(pCalories);
        buttonDivEl.appendChild(changeButton);
        buttonDivEl.appendChild(deleteButton);

        function handleChangeButton() {
            currentRecordId = _id
            addButton.disabled = true;
            editButton.disabled = false;
            inputNameEl.value = name;
            inputStepsEl.value = steps;
            inputCalEl.value = calories;
        }

        async function handleDeleteButton() {
            await fetch(`${BASE_URL}${_id}`, {
                method: 'DELETE'
            })
            refresh();
        }
    


        return liEl
    }

    function clear() {
        inputNameEl.value = ''
        inputStepsEl.value = ''
        inputCalEl.value = ''
    }

    async function refresh() {
        recordsList.textContent = '';
        const response = await fetch(`${BASE_URL}`);
        const result = await response.json();
        Object.values(result).forEach((el) => {
            recordsList.appendChild(createRecord(el));
        });
        // await clear();
        addButton.disabled = false;
        editButton.disabled = true;
    }
    
    async function handleAddButton(ev) {
        ev.preventDefault();
        const name = inputNameEl.value;
        const steps = inputStepsEl.value;
        const calories = inputCalEl.value;
        if ([name, steps, calories].every(Boolean)) {
            // console.log(JSON.stringify({name, steps, calories}, null, 2));
            await fetch(BASE_URL, {
                method: 'POST',
                'Content-Type': 'application/json',
                body: JSON.stringify({name, steps, calories})
            })
            refresh();
        }
        clear();
        // if (name !== '' && steps !== '' && calories !== '') {
        // const headers = {
        //     method: 'POST',
        //     body: JSON.stringify({name, steps, calories})
        // };

        // fetch(BASE_URL, headers)
        //     .then(refresh())
        // clear();
    // }




    }

    async function handleEditButton() {
        const name = inputNameEl.value;
        const steps = inputStepsEl.value;
        const calories = inputCalEl.value;
        if (!name) return
        if (!steps) return
        if (!calories) return
        if (!Number(steps)) return
        if (!Number(calories)) return
        await fetch(`${BASE_URL}${currentRecordId}`, {
            method: 'PUT',
            'Content-Type': 'application/json',
            body: JSON.stringify({name, steps, calories})
        })
        refresh();
    }
}

solve();