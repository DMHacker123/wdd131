// temples.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navMenu = document.getElementById('navMenu');

    hamburgerButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});



function updateFooter() {
    // Get the current year and display it
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {  // Check if element exists
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }

    // Get the last modified date of the page
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {  // Check if element exists
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = lastModifiedDate;
    }
}


updateFooter();
alert('JavaScript is working!');


