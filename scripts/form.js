// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Function to dynamically populate product options
function populateProductOptions() {
    const selectElement = document.getElementById('product-select');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;  // Use product id as the value
        option.textContent = product.name;  // Use product name as display text
        selectElement.appendChild(option);
    });
}

// Call the function when the page loads
window.onload = populateProductOptions;
