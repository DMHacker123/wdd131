// Declare variables to reference the input, button, and list elements
const inputElement = document.querySelector('input');   // Reference to the input field
const buttonElement = document.querySelector('button'); // Reference to the button
const listElement = document.querySelector('ul');       // Reference to the unordered list (ul)

// Function to add a new chapter entry with a delete button
function addChapterEntry(chapterTitle) {
    // Create a new li element
    const li = document.createElement('li');

    // Populate the li element with the chapter title from input
    li.textContent = chapterTitle; // Set the text of the li to the chapter title

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; // Set the button's text to a cross mark

    // Add an event listener to the delete button to remove the li when clicked
    deleteButton.addEventListener('click', function() {
        li.remove(); // Remove the entire list item when delete is clicked
    });

    // Append the delete button to the li
    li.appendChild(deleteButton); // Append the delete button to the li

    // Append the li to the unordered list (ul)
    listElement.appendChild(li); // This line appends the li to the ul
}

// Example usage: Add a chapter entry when the button is clicked
buttonElement.addEventListener('click', function() {
    const chapterTitle = inputElement.value.trim(); // Get input value and trim whitespace
    if (chapterTitle !== '') { // Only add if input is not empty
        addChapterEntry(chapterTitle); // Call the function to add the chapter
        inputElement.value = ''; // Clear the input field
    }
});
