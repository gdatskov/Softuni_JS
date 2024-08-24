function attachEvents() {
	const BASE_URL = 'http://localhost:3030/jsonstore/collections/students'

	const tableBodyElement = document.querySelector('#results tbody');
	const firstNameInputElement = document.querySelector('input[name=firstName]');
	const lastNameInputElement = document.querySelector('input[name=lastName]');
	const facultyNumberInputElement = document.querySelector('input[name=facultyNumber]');
	const gradeInputElement = document.querySelector('input[name=grade]');
	const notificationElement = document.querySelector('p.notification');
	const submitButton = document.getElementById('submit')

	function createStudentInfoElement(firstName, lastName, facultyNumber, grade, id) {
		const newTableRowElement = document.createElement('tr');
		[firstName, lastName, facultyNumber, grade].forEach((el) => {
			const newTableDataElement = document.createElement('td')
			newTableDataElement.textContent = el;
			newTableRowElement.appendChild(newTableDataElement);
		});
		return newTableRowElement
	}


	function reloadStudentsList() {
		fetch(BASE_URL).then((response) => response.json()).then(
			contentData => {
				Object.values(contentData).forEach(
					(entry) => {
						const { firstName, lastName, facultyNumber, grade, _id: id } = entry;
						tableBodyElement.appendChild(
							createStudentInfoElement(firstName, lastName, facultyNumber, grade, id)
						);
					}
				)
			}
		)
	}

	function postNewStudent() {
        const firstName = firstNameInputElement.value;
        const lastName = lastNameInputElement.value;
        const facultyNumber = facultyNumberInputElement.value;
        const grade = gradeInputElement.value;

        const postRequestBody = {firstName, lastName, facultyNumber, grade}
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postRequestBody)
        })
		.then(() => {
			tableBodyElement.innerHTML = ''
			reloadStudentsList()
		});

		return `${firstName} ${lastName} added.`
    }

	window.onload = () => reloadStudentsList()

	submitButton.addEventListener('click', () => {
		notificationElement.textContent = postNewStudent();
		[firstNameInputElement, lastNameInputElement, facultyNumberInputElement, gradeInputElement].forEach(
			(el) => el.value = ''
			)
	})


}

attachEvents();