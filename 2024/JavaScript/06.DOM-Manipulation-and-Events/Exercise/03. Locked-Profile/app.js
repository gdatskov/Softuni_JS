function lockedProfile() {
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
            const currentUserHiddenFieldElement = user.querySelector('[id*="HiddenFields"]');

            // Just add event listeners to the already retrieved/created buttons
            showMoreButton.addEventListener(
                'click', 
                () => {
                    const unlocked = isUnlocked();
                    console.log(unlocked ? 'Unlocked' : 'Locked');
                    if (unlocked) {
                        console.log('more clicked');
                        currentUserHiddenFieldElement.style.display = 'initial';
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