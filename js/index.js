let loadingInterval;

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitButton = document.getElementById("submitButton");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let isValid = true;

    // Clear previous error messages
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    // Validate name field
    if (!name) {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    }

    // Validate email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // RFC 5322 standard
    if (!email) {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate message field
    if (!message) {
        messageError.textContent = "Message is required.";
        messageError.style.display = "block";
        isValid = false;
    }

    // Enable or disable the submit button
    submitButton.disabled = !isValid;
}




function sendMail(event) {
    event.preventDefault();
    console.log("Send button clicked");
    validateForm();

    const submitButton = document.getElementById("submitButton");

    // Disable button and maintain style
    submitButton.disabled = true;

    // Store original button text
    const originalText = submitButton.innerHTML;
    
    let dots = 0;
    submitButton.innerHTML = `<span>Loading</span>`;
    
    // Animate the dots without affecting button state
    loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        submitButton.querySelector("span").textContent = "Loading" + ".".repeat(dots);
    }, 500);

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_pes7cg6";
    const templateID = "template_c8t4p5c";

    // Simulate a delay for testing
    // setTimeout(() => {
    //     $('#successModal').modal('show');
    //     resetSubmitButton(submitButton, originalText);
    // }, 3000);

    // Uncomment for actual email submission
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            console.log("Email sent:", res);
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            $('#successModal').modal('show');
            resetSubmitButton(submitButton, originalText);
        })
        .catch((err) => {
            console.error("Error occurred:", err);
            alert("Oops! Something went wrong. Please try again.");
            resetSubmitButton(submitButton, originalText);
        });
}

function resetSubmitButton(button, originalText) {
    clearInterval(loadingInterval);
    button.innerHTML = originalText;
    button.disabled = false;
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitButton = document.getElementById("submitButton");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let isValid = true;

    // Clear previous error messages
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    // Validate name field
    if (!name) {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    }

    // Validate email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // RFC 5322 standard
    if (!email) {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate message field
    if (!message) {
        messageError.textContent = "Message is required.";
        messageError.style.display = "block";
        isValid = false;
    }

    // Enable or disable the submit button
    submitButton.disabled = !isValid;
}

// Highlight active menu item
// const currentPage = window.location.pathname.split('/').pop();
// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//   if (link.getAttribute('href') === currentPage) {
//     link.classList.add('active');
//   }
// });






  