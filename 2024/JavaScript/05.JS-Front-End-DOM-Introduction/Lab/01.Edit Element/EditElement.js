function editElement(reference, matchValue, replaceValue) {
    const content = reference.textContent;
    const edited = content.replace(matchValue, replaceValue);
    reference.textContent = edited
}