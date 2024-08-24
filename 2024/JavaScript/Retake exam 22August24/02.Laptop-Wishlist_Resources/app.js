window.addEventListener("load", solve);

function solve() {
	// Laptop Model, Storage Space, and Price should be non-empty strings. 
	// If any of them are empty, the program should not do anything.
	const modelInputEl = document.getElementById('laptop-model');
	const storageInputEl = document.getElementById('storage');
	const priceInputEl = document.getElementById('price');
	const addButton = document.getElementById('add-btn');
	const checkListUlEl = document.getElementById('check-list')
	const wishListUlEl = document.getElementById('laptops-list')
	const clearButton = document.querySelector('.clear')
	// let editInProgress = false
	clear();

	addButton.addEventListener('click', (e) => {
		// e.preventDefault();
		const model = modelInputEl.value;
		const storage = storageInputEl.value;
		const price = priceInputEl.value;
		if (![model, storage, price].every(Boolean)) return
		checkListUlEl.appendChild(createLiEl(model, storage, price));
		clear();
		// editInProgress = false
		addButton.disabled = true
	})

	function clear() {
		modelInputEl.value = ''
		storageInputEl.value = ''
		priceInputEl.value = ''
	}


	function createLiEl(model, storage, price) {
		const liEl = document.createElement('li');
		const articleEl = document.createElement('article');
		const pModel = document.createElement('p');
		const pStorage = document.createElement('p');
		const pPrice = document.createElement('p');
		const editButton = document.createElement('button');
		const okButton = document.createElement('button');

		liEl.className = 'laptop-item';
		editButton.className = 'btn edit';
		okButton.className = 'btn ok';

		pModel.textContent = model;
		pStorage.textContent = `Memory: ${storage} TB`;
		pPrice.textContent = `Price: ${price}$`;
		editButton.textContent = 'edit';
		okButton.textContent = 'ok';

		liEl.appendChild(articleEl);
		liEl.appendChild(editButton);
		liEl.appendChild(okButton);
		articleEl.appendChild(pModel);
		articleEl.appendChild(pStorage);
		articleEl.appendChild(pPrice);

		editButton.addEventListener('click', handleEditButton);
		okButton.addEventListener('click', handleOkButton);

		function handleEditButton() {
			// if (editInProgress) return
			// editInProgress = true
			addButton.disabled = false
			modelInputEl.value = model
			storageInputEl.value = storage
			priceInputEl.value = price
			liEl.remove()
		}

		function handleOkButton() {
			liEl.removeChild(editButton);
			liEl.removeChild(okButton);
			// liEl.appendChild(clearButton);
			// checkListUlEl.removeChild(liEl);
			wishListUlEl.appendChild(liEl);
			addButton.disabled = false
			clear();
		}
		
		return liEl
	}

	clearButton.addEventListener('click', handleClearButton);
	function handleClearButton() {
		clear();
		wishListUlEl.textContent = ''
		checkListUlEl.textContent = ''
		addButton.disabled = false
		window.location.reload()
	}
}
