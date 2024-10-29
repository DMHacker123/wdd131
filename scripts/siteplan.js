        // Function to validate the form input and save it to localStorage
        function validateForm() {
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim(),
                referral: document.querySelector('input[name="referral"]:checked')
            };

            let feedbackMessages = [];
            const feedback = document.getElementById('feedback');
            feedback.innerText = ''; // Clear previous feedback

            // Name validation
            if (formData.name === '') {
                feedbackMessages.push(`Please enter your name.`);
            } else if (formData.name.length < 3) {
                feedbackMessages.push(`Your name must be at least 3 characters long.`);
            }

            // Email validation using regular expression
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (formData.email === '') {
                feedbackMessages.push(`Email is required.`);
            } else if (!emailPattern.test(formData.email)) {
                feedbackMessages.push(`Please enter a valid email address.`);
            }

            // Message validation
            if (formData.message === '') {
                feedbackMessages.push(`Please enter your message.`);
            } else if (formData.message.length < 10) {
                feedbackMessages.push(`Message must be at least 10 characters long.`);
            }

            // Referral validation
            if (!formData.referral) {
                feedbackMessages.push(`Please select how you heard about us.`);
            }

            // Display feedback messages
            if (feedbackMessages.length > 0) {
                feedback.innerText = `${feedbackMessages.join('\n')}`;
                feedback.style.color = 'red';
                return false; // Form is invalid
            }

            // Save data to localStorage
            localStorage.setItem('formData', JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                referral: formData.referral ? formData.referral.value : null
            }));

            // Success message
            feedback.innerText = `Thank you for your message, ${formData.name}! We will get back to you soon.`;
            feedback.style.color = 'green';

            return true; // Form is valid
        }

        // Function to reset the form and clear localStorage
        function resetForm() {
            document.getElementById('contactForm').reset();
            document.getElementById('feedback').innerText = ''; // Clear feedback message
            localStorage.removeItem('formData'); // Remove saved form data from localStorage
        }

        // Function to prefill the form with localStorage data
        function prefillForm() {
            const savedFormData = localStorage.getItem('formData');
            if (savedFormData) {
                const formData = JSON.parse(savedFormData);
                
                document.getElementById('name').value = formData.name || '';
                document.getElementById('email').value = formData.email || '';
                document.getElementById('message').value = formData.message || '';
                
                if (formData.referral) {
                    document.querySelector(`input[name="referral"][value="${formData.referral}"]`).checked = true;
                }
            }
        }

        // Function to change button text on hover
        function changeButtonText(button) {
            button.innerText = `Hovering!`;
        }

        // Function to revert button text when not hovered
        function revertButtonText(button) {
            button.innerText = `Send Message`;
        }

        // Display recent pages (example of object and array usage)
        function displayRecentPages() {
            const recentPages = ['Home', 'Decluttering Tips', 'Mindfulness & Well-being', 'Contact Us'];
            const recentPagesList = document.getElementById('recentPages');
            recentPagesList.innerHTML = '';
            recentPages.forEach(function(page) {
                const li = document.createElement('li');
                li.innerText = `${page}`;
                recentPagesList.appendChild(li);
            });
        }

        // Add event listener to load data on page load
        window.onload = function() {
            const sendButton = document.getElementById('sendButton');
            console.log(sendButton); // This will log 'null' if the element is not found
        
            if (sendButton) { // Proceed only if the button exists
                sendButton.addEventListener('mouseover', function() {
                    changeButtonText(sendButton);
                });
                sendButton.addEventListener('mouseout', function() {
                    revertButtonText(sendButton);
                });
            } else {
                console.error("Send button not found in the DOM.");
            }
        
            displayRecentPages();
        };
        