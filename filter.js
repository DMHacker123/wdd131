        // Function to filter fruits longer than 6 characters
        function filterFruits() {
            let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
            let longFruits = fruits.filter(fruit => fruit.length > 6);
            
            // Displaying the results
            let resultList = document.getElementById('result');
            resultList.innerHTML = ''; // Clear previous results
            longFruits.forEach(fruit => {
                let listItem = document.createElement('li');
                listItem.textContent = fruit;
                resultList.appendChild(listItem);
            });
        }