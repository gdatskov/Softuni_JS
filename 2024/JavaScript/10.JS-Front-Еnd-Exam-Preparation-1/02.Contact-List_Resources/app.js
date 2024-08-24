window.addEventListener("load", solve);

function solve() {
	const inputNameElement = document.getElementById('name');
	const inputPhoneElement = document.getElementById('phone');
	const selectElement = document.getElementById('category');
	const checkListElement = document.getElementById('check-list');
	const contactListElement = document.getElementById('contact-list');
	const inputButton = document.getElementById('add-btn');

	// document.querySelector('select option[value=work]').value = 'Work'

	// console.log(document.getElementById("category"));


	inputButton.addEventListener(
		'click',
		() => {
			const newLi = document.createElement('li');
			const newArticle = document.createElement('article');
			const inputName = inputNameElement.value;
			const phoneNumber = inputPhoneElement.value;
			const selectedCategory = selectElement.value;
			const defaultCategory = selectElement.querySelector('option[disabled]');
			const allRequirements = [inputName, phoneNumber, selectedCategory];
			const allFulfilled = allRequirements.every(Boolean);

			if (allFulfilled) {
				const nameParagraphElement = document.createElement('p');
				const phoneParagraphElement = document.createElement('p');
				const categoryParagraphElement = document.createElement('p');

				nameParagraphElement.textContent = `name:${inputName}`;
				phoneParagraphElement.textContent = `phone:${phoneNumber}`;
				categoryParagraphElement.textContent = `category:${selectedCategory}`;

				newArticle.appendChild(nameParagraphElement);
				newArticle.appendChild(phoneParagraphElement);
				newArticle.appendChild(categoryParagraphElement);

				// reset fields
				// defaultCategory.selected = true; // second check - try with changing selected category with empty string
				selectElement.value = ''; // Same result
				inputNameElement.value = '';
				inputPhoneElement.value = '';
				
				
				const newDivEditButtons = document.createElement('div')
				newDivEditButtons.className = 'buttons';
				
				const editButton = document.createElement('button');
				editButton.className = 'edit-btn';
				
				const saveButton = document.createElement('button');
				saveButton.className = 'save-btn';

				// All fine until this moment

				// // newDivEditButtons.append(editButton, saveButton); // maybe doesnt work?
				// // newLi.append(newArticle, newDivEditButtons); // maybe doesnt work?
				newDivEditButtons.appendChild(editButton);
				newDivEditButtons.appendChild(saveButton);
				newLi.appendChild(newArticle)
				newLi.appendChild(newDivEditButtons)
				checkListElement.appendChild(newLi);

				// editButton.addEventListener('click', () => {
				// 	checkListElement.removeChild(newLi);
				// 	inputNameElement.value = inputName;
				// 	inputPhoneElement.value = phoneNumber;
				// 	selectElement.value = selectedCategory;
				// })

				// saveButton.addEventListener('click', () => {
				// 	const deleteButton = document.createElement('button');
				// 	deleteButton.className = 'del-btn';
				// 	deleteButton.addEventListener('click', () => {
				// 		contactListElement.removeChild(newLi);
				// 	})
				// 	// Next check:
				// 	newDivEditButtons.remove();
				// 	newLi.appendChild(deleteButton);
				// 	// newDivEditButtons.replaceChildren(deleteButton);

				// 	contactListElement.appendChild(newLi);
				// })



			}
		}
	)
}
