function solve() {
	const inputButtonElement = document.querySelector('#exercise > button:first-of-type');
	const outputButtonElement = document.querySelector('#exercise > button:last-of-type');


	inputButtonElement.addEventListener(
		'click',
		() => {
			console.log(inputButtonElement);
			const inputElement = document.querySelector('#exercise > textarea:first-of-type');
			const input = inputElement.value;
			// inputElement.value = '' // clear the input, it is already stored in variable
			const furnitureObjects = JSON.parse(input);
			const tableBodyElement = document.querySelector('.table tbody')
		
		
			function createTagElement(key, value) {
				let newTagElement;  // Declare the variable outside the if-else block
			
				if (key === 'img') {
					newTagElement = document.createElement('img');
					newTagElement.src = value;  // Set the src attribute instead of textContent
				} else {
					newTagElement = document.createElement('p');
					newTagElement.textContent = value;
				}
			
				return newTagElement;  // If you intend to use the element later
			}
		
			furnitureObjects.forEach((obj) => {
				const trElement = document.createElement('tr');
		
				Object.keys(obj).forEach((key) => {
					const tdElement = document.createElement('td');
					const tagElement = createTagElement(key, obj[key]);
					tdElement.appendChild(tagElement)
					obj[key] = tdElement
					tdElement.className = `item-${key}`;
				});
		
				const checkboxInputElement = document.createElement('input');
				checkboxInputElement.type = 'checkbox';
				
				const checkboxTdElement = document.createElement('td');
				checkboxTdElement.appendChild(checkboxInputElement);
		
				trElement.append(
					obj['img'],
					obj['name'],
					obj['price'],
					obj['decFactor'],
					checkboxTdElement,
				);
		
				tableBodyElement.appendChild(trElement)
			});
		}
	)
	
	outputButtonElement.addEventListener(
		'click',
		() => {
			const tableBodyElement = document.querySelector('.table tbody');
			let furnitureList = [];
			let totalPrice = 0;
			let totalDecorationFactor = 0;
			tableBodyElement
			.querySelectorAll('input[type="checkbox"]:checked')
			.forEach(
				(e) => {
					const currentTrElement = e.closest('tr');
					furnitureList.push(currentTrElement.querySelector('.item-name p').textContent);
					totalPrice += Number(currentTrElement.querySelector('.item-price p').textContent);
					totalDecorationFactor += Number(currentTrElement.querySelector('.item-decFactor p').textContent);
				}
			)
			
			const outputFieldElement = document.querySelector('#exercise > textarea:last-of-type');
			outputFieldElement.value = [
				`Bought furniture: ${furnitureList.join(', ')}`,
				`Total price: ${totalPrice.toFixed(2)}`,
				`Average decoration factor: ${totalDecorationFactor/furnitureList.length}`,
			].join('\n')
		}
	)
}