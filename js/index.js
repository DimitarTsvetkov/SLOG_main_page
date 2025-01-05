let loadingInterval;

function sendMail(event) {
    event.preventDefault();
    console.log("Send button clicked");

    const submitButton = document.getElementById("submitButton");
    const spinner = document.getElementById("loadingOverlay");

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
