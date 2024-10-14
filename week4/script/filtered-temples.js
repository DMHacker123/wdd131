// Get the temple container element from the DOM
const templeContainer = document.getElementById('temple-container');

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Brigham City Utah",
    location: "Brigham City, Utah, United States",
    dedicated: "2012, May, 6",
    area: 85000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
  },
  {
    templeName: "Denver Colorado",
    location: "Denver, Colorado, United States",
    dedicated: "1959, February, 2",
    area: 185000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455-main.jpg"
  },
];

// Function to display temples
function displayTemples(templesToDisplay) {
  templeContainer.innerHTML = ''; // Clear previous content

  templesToDisplay.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;
    card.appendChild(name);

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;
    card.appendChild(location);

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
    card.appendChild(area);

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    card.appendChild(img);

    templeContainer.appendChild(card);
  });
}

// Display all temples on initial load
displayTemples(temples);

// Navigation event listeners
document.getElementById('navMenu').addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName === 'A') {
    event.preventDefault(); // Prevent default anchor behavior
    const action = target.textContent.trim();

    switch (action) {
      case 'Home':
        displayTemples(temples);
        break;
      case 'Old':
        const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        displayTemples(oldTemples);
        break;
      case 'New':
        const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        displayTemples(newTemples);
        break;
      case 'Large':
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
        break;
      case 'Small':
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
        break;
    }
  }
});

// Get the last modified date of the page
const lastModifiedElement = document.getElementById('last-modified');
if (lastModifiedElement) {  // Check if element exists
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;
}
