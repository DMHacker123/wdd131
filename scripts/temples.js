document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navMenu = document.getElementById('navMenu');

    // Toggle the navigation menu visibility and icon
    hamburgerButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        // Toggle the icon between ☰ and ✖
        hamburgerButton.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
    });

    function updateFooter() {
        const currentYearElement = document.getElementById('currentYear');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }

        const lastModifiedElement = document.getElementById('last-modified');
        if (lastModifiedElement) {
            lastModifiedElement.textContent = document.lastModified;
        }
    }

    updateFooter();
});
