// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Insert the current year into the <span> with id="currentyear"
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document using document.lastModified
const lastModified = document.lastModified;

// Insert the last modified date into the <p> with id="lastModified"
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
