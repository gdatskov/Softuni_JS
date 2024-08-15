function lockedProfile() {
    const users = document.querySelectorAll('div.profile')
    users.forEach(user => {
        function revealInfo() {
            console.log('function called');
            const currentUserHiddenFieldElement = user.querySelector('[id*="HiddenFields"]');
            currentUserHiddenFieldElement.style.display = 'initial';
            buttonToHideInfo.textContent = 'Hide it';
            buttonToHideInfo.addEventListener(
                'click', 
                () => {
                    currentUserHiddenFieldElement.style.display = 'none';
                    user.appendChild(showMoreButton);

                    TODO: // This problem shouldnt exist anyway...
                    if (buttonToHideInfo?.parentNode === user) {
                        user.removeChild(buttonToHideInfo);
                    }
                }
            );
            user.removeChild(showMoreButton);
            user.appendChild(buttonToHideInfo);
        }

        function hideInfo() 

        const unlockElement = user.querySelector('input[value=unlock]');
        const lockElement = user.querySelector('input[value=lock]');
        let showMoreButton = user.querySelector('button');
        let buttonToHideInfo = document.createElement('button');
        let isLocked = lockElement.checked

        if (!isLocked) {
            revealInfo();
        }
        
        function removeAllEventListeners(element) {
            // Clone the element (true means deep clone, which includes child elements)
            const clone = element.cloneNode(true);
            // Replace the original element with the clone
            // element.parentNode.replaceChild(clone, element);
            // Return the new cloned element (if you need to keep using it)
            return clone;
        }
        
        unlockElement.addEventListener('click', () => {
            showMoreButton.addEventListener('click', revealInfo);
            buttonToHideInfo?.addEventListener('click', hideInfo);
        });
        
        lockElement.addEventListener('click', () => {
            showMoreButton = removeAllEventListeners(showMoreButton);
            buttonToHideInfo = removeAllEventListeners(buttonToHideInfo);
        });


    })
}