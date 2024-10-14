// JavaScript to display the last modified date in a readable format
function formatLastModified() {
    // Get the last modified date of the document
    let lastModified = new Date(document.lastModified);
    
    // Format the date to a readable string (e.g., "October 11, 2024")
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = lastModified.toLocaleDateString('en-US', options);
    
    // Set the formatted date in the element with the id "lastModified"
    document.getElementById('lastModified').textContent = formattedDate;
}

// Call the function to update the date
formatLastModified();
