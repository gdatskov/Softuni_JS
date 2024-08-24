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

	function eventAddButtonListener(event) {
			event.preventDefault();

			const eventName = eventNameElement.value;
			const eventTime = eventTimeElement.value;
			const eventDescription = eventDescriptionElement.value;
			const inputValuesList = [eventName, eventTime, eventDescription]
			const checkAll = inputValuesList.every(element => Boolean(element));
			
			// if (!checkAll) return
			
			const newArticle = document.createElement('article');
			const newLi = document.createElement('li');

			const eventNameParagraph = document.createElement('p');
			const eventTimeParagraph = document.createElement('p');
			const eventDescriptionParagraph = document.createElement('p');

			eventNameParagraph.textContent = eventName;
			eventTimeParagraph.textContent = eventTime;
			eventDescriptionParagraph.textContent = eventDescription;

			newArticle.appendChild(eventNameParagraph);
			newArticle.appendChild(eventNameParagraph);
			newArticle.appendChild(eventDescriptionParagraph);


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
					eventNameElement.value = eventName;
					eventTimeElement.value = eventTime;
					eventDescriptionElement.value = eventDescription;
					newLi.remove()
				}
			)

			saveButton.addEventListener(
				'click', () => {
					newLi.parentElement.removeChild(newLi)
					const deleteButton = document.createElement('button');
					deleteButton.className = 'archive-btn';
					deleteButton.textContent = 'Archive'
					archiveListElement.appendChild(newLi)
					archiveListElement.appendChild(deleteButton);
					deleteButton.addEventListener('click', () =>
						newLi.parentElement.removeChild(newLi)
					)
				}

			)
			
		}
}




