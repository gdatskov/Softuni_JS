// window.addEventListener('load', solve())

function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/games';

    const loadGamesButton = document.getElementById('load-games');
    const gamesListElement = document.getElementById('games-list')
    const defaultBoardGameElement = gamesListElement.querySelector('.board-game');
    const defaultBoardGameElementCopy = defaultBoardGameElement.cloneNode(true);
    defaultBoardGameElement.remove();

    const addGameNameElement = document.getElementById('g-name');
    const addGameTypeElement = document.getElementById('type');
    const addGamePlayersElement = document.getElementById('players');
    const addGameButton = document.getElementById('add-game');
    const editGameButton = document.getElementById('edit-game');

    let editGameInProcess = false
    let currentEditId = ''

    clearInputs();


    function createGameListDiv(obj) {
        const { name, type, players, _id } = obj;

        const divBoardGameElement = document.createElement('div');
        const divGameContentElement = document.createElement('div');
        const divGameButtonContainerElement = document.createElement('div');

        const pGameName = document.createElement('p');
        const pGamePlayers = document.createElement('p');
        const pGameType = document.createElement('p');

        const changeButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        divBoardGameElement.className = 'board-game';
        divGameContentElement.className = 'content';
        divGameButtonContainerElement.className = 'buttons-container';

        changeButton.className = 'change-btn';
        deleteButton.className = 'delete-btn';

        pGameName.textContent = name;
        pGamePlayers.textContent = players;
        pGameType.textContent = type;
        changeButton.textContent = 'Change';
        deleteButton.textContent = 'Delete';

        divGameContentElement.appendChild(pGameName);
        divGameContentElement.appendChild(pGameType);
        divGameContentElement.appendChild(pGamePlayers);
        divGameButtonContainerElement.appendChild(changeButton);
        divGameButtonContainerElement.appendChild(deleteButton);
        divBoardGameElement.appendChild(divGameContentElement);
        divBoardGameElement.appendChild(divGameButtonContainerElement);

        return divBoardGameElement
    }

    function copyEditGameListDiv(sourceDiv, obj) {
        const { name, type, players, _id } = obj;
        const divBoardGameElement = sourceDiv.cloneNode(true);
        const divGameContentElement = divBoardGameElement.querySelector('.content');
        const pElements = Array.from(divGameContentElement.querySelectorAll('p'));

        const [pGameName, pGameType, pGamePlayers] = pElements;
        pGameName.textContent = name;
        pGameType.textContent = type;
        pGamePlayers.textContent = players;
        // ...or with forEach:
        // const pContent = [name, type, players]
        // const pClasses = ['game-name', 'game-type', 'game-players']
        // pElements.forEach((pElement, index) => {
        //         pElement.textContent = pContent[index];
        //         pElement.className = pClasses[index];
        // });

        const changeButton = divBoardGameElement.querySelector('.change-btn');
        const deleteButton = divBoardGameElement.querySelector('.delete-btn');


        changeButton.addEventListener('click', () => {
            // editGameInProcess = true;
            currentEditId = _id
            console.log(_id);

            addGameButton.disabled = true;
            editGameButton.disabled = false;

            addGameNameElement.value = name;
            addGameTypeElement.value = type;
            addGamePlayersElement.value = players;
        })

        deleteButton.addEventListener('click', () => {
            postDelete(_id).then(() => fetchGames())

        })


        return divBoardGameElement
    }

    // const handleEditClick = () => handleEditGameClick(currentEditId)
    // editGameButton.addEventListener('click', handleEditClick)
    editGameButton.addEventListener('click', handleEditGameClick)

    function clearInputs() {
        addGameNameElement.value = ''
        addGameTypeElement.value = ''
        addGamePlayersElement.value = ''
    }

    // function handleEditGameClick(id) {
        function handleEditGameClick() {
        console.log('edit clicked');
        const gameName = addGameNameElement.value;
        const gameType = addGameTypeElement.value;
        const gamePlayers = addGamePlayersElement.value;

        clearInputs();

        const postBody = {
            // _id: id,
            _id: currentEditId,
            name: gameName,
            type: gameType,
            players: gamePlayers,
        }

        // fetch(`${BASE_URL}/${id}`, {
        fetch(`${BASE_URL}/${currentEditId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postBody)
        }).then(() => {
                fetchGames();
                currentEditId = '';
                addGameButton.disabled = false;
                editGameButton.disabled = true;
            });
    }

    function postDelete(id) {
        // return fetch(`${BASE_URL}/${id}`, {
        console.log('test');
        fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })
    }

    function fetchGames() {
        gamesListElement.textContent = '';
        fetch(BASE_URL)
            .then(response => response.json())
            .then(contentData => {
                Object.values(contentData).forEach((entry) => {
                    gamesListElement.appendChild(
                        copyEditGameListDiv(defaultBoardGameElementCopy, entry)
                    )
                })
            })
    }

    loadGamesButton.addEventListener('click', fetchGames)

    addGameButton.addEventListener(('click'), (ev) => {
        ev.preventDefault();
        const gameName = addGameNameElement.value;
        const gameType = addGameTypeElement.value;
        const gamePlayers = addGamePlayersElement.value;
        clearInputs();

        const postBody = {
            name: gameName,
            type: gameType,
            players: gamePlayers,
        }

        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postBody)
        }).then(() => {
            // editGameInProcess = false;
            fetchGames();
        })
    })
}

solve();