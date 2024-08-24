window.addEventListener("load", solve);

function solve() {
	const animalTypeInputElement = document.getElementById('type');
	const ageInputElement = document.getElementById('age');
	const genderSelectInputElement = document.getElementById('gender');
	const adoptButton = document.getElementById('adopt-btn');
	const adoptionInfoListElement = document.getElementById('adoption-info');
	const adoptedListElement = document.getElementById('adopted-list');
	
	// 13. Prevent Consequent edits
	// const adoptSectionElement = document.getElementById('adopt-pet');
	// adoptSectionElement.addEventListener('click', () => {

	// })
	let editButtonClicked = false;
	
	adoptButton.addEventListener('click', (event) => {
		editButtonClicked = false;

		// Prevent the Form sending a request, which is the default operation (which should not happen in this case)
		event.preventDefault()

		// Get input values when button is clicked
		const animalTypeInputValue = animalTypeInputElement.value;
		const ageInputValue = ageInputElement.value;
		const genderInputValue = genderSelectInputElement.value;

		console.log('test');

		// Type Of Animal, Age, and Gender should be non-empty strings. If any of them are empty, the program should not do anything.
		// if ( ![animalTypeInputValue, ageInputValue, genderInputValue].every(Boolean) ) return

		// Create DOM structure to add
		function createLiElement(type, age, gender) {
			// 1. Create Elements
			const newLi = document.createElement('li');
			const newArticle = document.createElement('article');
			const newDiv = document.createElement('div')
			const pAnimalType = document.createElement('p');
			const pGender = document.createElement('p');
			const pAge = document.createElement('p');
			const saveButton = document.createElement('button');
			const editButton = document.createElement('button');

			// 2. Assign values/text to the new elements
			pAnimalType.textContent = `Pet:${type}`;
			pGender.textContent = `Gender:${gender}`;
			pAge.textContent = `Age:${age}`;
			editButton.textContent = 'Edit';
			saveButton.textContent = 'Done';

			// 3. Assign classes to the new elements
			newDiv.className = 'buttons';
			editButton.className = 'edit-btn';
			saveButton.className = 'done-btn';

			// 4. Construct the new DOM structure
			newArticle.appendChild(pAnimalType);
			newArticle.appendChild(pGender);
			newArticle.appendChild(pAge);
			newDiv.appendChild(editButton);
			newDiv.appendChild(saveButton);
			newLi.appendChild(newArticle);
			newLi.appendChild(newDiv);


			// 5. Add event listeners to buttons
			editButton.addEventListener('click', (e) => {
				if (editButtonClicked) return;
				editButtonClicked = true;
				newLi.remove();
				animalTypeInputElement.value = type;
				ageInputElement.value = age;
				genderSelectInputElement.value = gender;
			});
			saveButton.addEventListener('click', () => {
				newLi.removeChild(newDiv);
				const deleteButton = document.createElement('button');
				deleteButton.className = 'clear-btn';
				deleteButton.textContent = 'Clear';
				deleteButton.addEventListener('click', () => {
					newLi.remove()
				});
				newLi.appendChild(deleteButton)
				adoptedListElement.appendChild(newLi);
			});
			return newLi
		}
		
		// 11. Create the element to add
		const newListElementWithValues = createLiElement(animalTypeInputValue, ageInputValue, genderInputValue);
		// 11. Add the new element to DOM (when the button is clicked)
		adoptionInfoListElement.appendChild(newListElementWithValues);

		// 12. Clear input fields
		animalTypeInputElement.value = '';
		ageInputElement.value = '';
		genderSelectInputElement.value = '';
		
		// let editButtonClicked = false;
	})


}
