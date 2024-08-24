window.addEventListener("load", solve);

function solve() {
	const eventNameElement = document.getElementById('name');
	const eventTimeElement = document.getElementById('time');
	const eventDescriptionElement = document.getElementById('description');
	const eventAddButton = document.getElementById('add-btn');
	const previewListElement = document.getElementById('preview-list');
	const archiveListElement = document.getElementById('archive-list');
	const form = document.querySelector('form')

	eventAddButton.addEventListener('click', eventAddButtonListener)

	function eventAddButtonListener() {
			form.addEventListener('submit', function(event) {
				event.preventDefault();
			});

			const eventName = eventNameElement.value;
			const eventTime = eventTimeElement.value;
			const eventDescription = eventDescriptionElement.value;
			const inputValuesList = [eventName, eventTime, eventDescription]
			const checkAll = inputValuesList.every(element => Boolean(element));
			
			if (!checkAll) return
			
			const newArticle = document.createElement('article');
			const newLi = document.createElement('li');

			let paragraphNumber = 1

			for (const input of inputValuesList) {
				const newParagraph = document.createElement('p');
				newParagraph.textContent = input;
				newParagraph.id = `paragraph${paragraphNumber}`
				paragraphNumber +=1
				newArticle.appendChild(newParagraph);
			}


			const buttonDivElement = document.createElement('div');
			buttonDivElement.className = 'buttons';
			const editButton = document.createElement('button');
			editButton.className = 'edit-btn';
			editButton.textContent = 'Edit'
			const saveButton = document.createElement('button');
			saveButton.className = 'save-btn';
			saveButton.textContent = 'Next'
			buttonDivElement.appendChild(editButton);
			buttonDivElement.appendChild(saveButton);
			newLi.appendChild(newArticle)
			newLi.appendChild(buttonDivElement)
			previewListElement.appendChild(newLi)

			eventNameElement.value = '';
			eventTimeElement.value = '';
			eventDescriptionElement.value = '';

			editButton.addEventListener(
				'click',
				() => {
					eventNameElement.value = newArticle.querySelector('#paragraph1').textContent;
					eventTimeElement.value = newArticle.querySelector('#paragraph2').textContent;
					eventDescriptionElement.value = newArticle.querySelector('#paragraph3').textContent;
					newLi.parentElement.removeChild(newLi)
					eventAddButton.addEventListener('click', eventAddButtonListener)
				}
			)

			saveButton.addEventListener(
				'click', () => {
					newLi.parentElement.removeChild(newLi)
					const deleteButton = document.createElement('button');
					deleteButton.className = 'archive-btn';
					deleteButton.textContent = 'Archive'
					buttonDivElement.appendChild(deleteButton);
					buttonDivElement.removeChild(editButton);
					buttonDivElement.removeChild(saveButton);
					archiveListElement.appendChild(newLi)

					deleteButton.addEventListener('click', () =>
						newLi.parentElement.removeChild(newLi)
					)
				}

			)
			// eventAddButton.removeEventListener('click', eventAddButtonListener);
			
		}
}




