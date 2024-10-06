// Task 2
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let fb = document.getElementById("throughputValidation");
    fb.textContent = "Form submitted successfully, please check console log for user input object";
    fb.className = "success";
    let userInput = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    console.log(userInput);

    document.getElementById("form").reset();
});

