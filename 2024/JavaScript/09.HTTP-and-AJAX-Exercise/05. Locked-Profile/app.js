function lockedProfile() {
	const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles'
    const mainElement = document.getElementById('main')

    function makeUser(username, email, age, baseUserElement) {
        // Clone the base element each time to ensure a fresh copy
        const userElement = baseUserElement.cloneNode(true);
        
        const userClassName = `${username}Username`;
        const userInfoElement = userElement.querySelector('div');
    
        userElement.querySelector('input[value=lock]').name = `${username}Locked`;
        userElement.querySelector('input[value=unlock]').name = `${username}Locked`;
        userElement.querySelector('input[type=text]').name = `${username}Username`;
        userElement.querySelector('input[type=text]').value = `${username}`;
    
        userInfoElement.className = userClassName;
        userInfoElement.style.display = 'none';
    
        userInfoElement.querySelector('div input[type=email]').name = `${username}Email`;
        userInfoElement.querySelector('div input[type=text]').name = `${username}Age`;
        userInfoElement.querySelector(`.${userClassName} input[type=email]`).value = `${email}`;
        userInfoElement.querySelector(`.${userClassName} input[type=text]`).value = `${age}`;
    
        return userElement;
    }
    
    function reloadUsers() {
        return fetch(BASE_URL)
            .then((response) => response.json())
            .then((contentData) => {
                // Select the base user profile template
                const baseUserElement = mainElement.querySelector('.profile:first-of-type');
                
                // Clear existing user profiles
                mainElement.innerHTML = ''; 
    
                Object.values(contentData).forEach((entry) => {
                    const { username, email, age } = entry;
                    const currentUser = makeUser(username, email, age, baseUserElement);
                    mainElement.appendChild(currentUser);
                });

                setupProfiles()

            });
    }

    function setupProfiles() {
        const users = document.querySelectorAll('div.profile')
        // document.preventDefault()
        users.forEach(
            user => {
                // Key to resolve is to dynamically check if operation is allowed
                const isUnlocked = () => user.querySelector('input[value=unlock]').checked; 
    
    
                // Then just get or create the buttons
                let showMoreButton = user.querySelector('button');
                let showLessButton = document.createElement('button');
                showLessButton.textContent = 'Hide it';
    
                // Do that for each user
                const currentUserHiddenFieldElement = user.querySelector('[class*="Username"]');
    
                // Just add event listeners to the already retrieved/created buttons
                showMoreButton.addEventListener(
                    'click', 
                    () => {
                        const unlocked = isUnlocked();
                        console.log(unlocked ? 'Unlocked' : 'Locked');
                        if (unlocked) {
                            console.log('more clicked');
                            currentUserHiddenFieldElement.style.display = 'block';
                            user.removeChild(showMoreButton);
                            user.appendChild(showLessButton);
                        }
                    }
                )
    
                showLessButton.addEventListener(
                    'click', 
                    () => {
                        const unlocked = isUnlocked();
                        console.log(unlocked ? 'Unlocked' : 'Locked');
                        if (unlocked) {
                            console.log('less clicked');
                            currentUserHiddenFieldElement.style.display = 'none';
                            user.appendChild(showMoreButton);
                            user.removeChild(showLessButton);
                        }
                    }
                )
            }
        )
    }

    // reloadUsers().then(() => setupProfiles());
    reloadUsers()
    
}