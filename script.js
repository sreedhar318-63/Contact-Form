    document.addEventListener('DOMContentLoaded', () => {
        const contactForm = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Reset error messages
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            successMessage.textContent = '';

            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate Message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                isValid = false;
            }

            // If all inputs are valid, show success message
            if (isValid) {
                successMessage.textContent = 'Form submitted successfully! (No actual sending)';
                contactForm.reset(); // Optionally clear the form
            }
        });
    });