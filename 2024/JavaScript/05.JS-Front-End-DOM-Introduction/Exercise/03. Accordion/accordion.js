function toggle() {
    const moreOrLessElement = document.getElementsByClassName('button')[0];
    const moreOrLessValue = moreOrLessElement.textContent;
    const accordionElement = document.getElementById('extra');

    if (moreOrLessValue === 'More') {
        moreOrLessElement.textContent = 'Less';
        accordionElement.style.display = 'block';
    } else {
        moreOrLessElement.textContent = 'More';
        accordionElement.style.display = 'none';
    }
}