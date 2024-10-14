document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements for better performance
    const currentYearEl = document.getElementById('current-year');
    const lastModifiedEl = document.getElementById('last-modified');
    const windChillEl = document.getElementById('windchill');
    
    // Get current year and last modified date
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    // Set current year and last modified date
    currentYearEl.textContent = currentYear;
    lastModifiedEl.textContent = lastModified;

    // Wind chill calculation
    const temperature = 18;  // Example temperature in °C
    const windSpeed = 2;     // Example wind speed in km/h

    const windChillFactor = calculateWindChill(temperature, windSpeed);
    
    // Only update the DOM if necessary
    if (windChillFactor === "N/A") {
        windChillEl.textContent = "Wind Chill: N/A";
    } else {
        windChillEl.textContent = `Wind Chill: ${windChillFactor} °C`;
    }
});

/**
 * Optimized windchill function
 * Caches repetitive calculations for better performance
 */
function calculateWindChill(temp, windSpeed, unit = 'C') {
    const windFactor = Math.pow(windSpeed, 0.16);
    return unit === 'C' 
        ? 13.12 + 0.6215 * temp - 11.37 * windFactor + 0.3965 * temp * windFactor
        : 35.74 + 0.6215 * temp - 35.75 * windFactor + 0.4275 * temp * windFactor;
}
