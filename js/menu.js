
function openClose() {
    // Selects the element with the class 'header-nav'
    let elements = document.querySelector('.header-nav');
    
    // Checks if the 'header-nav' element already has the class 'open'
    if (elements.classList.contains('open')) {
        // If the class 'open' is present, remove it (close the menu)
        elements.classList.remove('open');
    } else {
        // If the class 'open' is not present, add it (open the menu)
        elements.classList.add('open');
    }
}
