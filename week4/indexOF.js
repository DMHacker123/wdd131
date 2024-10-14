        // JavaScript code to check if luckyNumber is in the array
        window.onload = function() {
            const numbers = [12, 34, 21, 54];
            const luckyNumber = 21;

            const index = numbers.indexOf(luckyNumber);

            if (index !== -1) {
                document.getElementById('result').innerText = `Lucky number ${luckyNumber} is found at index ${index}.`;
            } else {
                document.getElementById('result').innerText = `Lucky number ${luckyNumber} is not found in the array.`;
            }
        };