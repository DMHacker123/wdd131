// Function to convert letter grades to GPA points
function getGpaPoints(grade) {
    switch (grade) {
        case 'A':
            return 4;
        case 'B':
            return 3;
        case 'C':
            return 2;
        case 'D':
            return 1;
        case 'F':
            return 0;
        default:
            return "Invalid grade";
    }
}

// Function to convert letter grades array to GPA points array and calculate the GPA
function calculateGpa() {
    let grades = ['A', 'B', 'A']; // Array of letter grades
    let gpaPoints = grades.map(getGpaPoints); // Convert to GPA points

    // Calculate the average GPA using reduce
    let totalGpaPoints = gpaPoints.reduce((sum, gradePoint) => sum + gradePoint, 0);
    let averageGpa = totalGpaPoints / gpaPoints.length;

    document.getElementById("output").innerText = 
        "GPA Points: " + gpaPoints.join(", ") + "\nAverage GPA: " + averageGpa.toFixed(2);
}