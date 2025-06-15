document.addEventListener ("DOMContentLoaded", function (){
    const form = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        console.log(`Username: ${username}`);
        
        const email = document.getElementById("email").value.trim();
        console.log(`Email: ${email}`);

        const password = document.getElementById("password").value.trim();
        console.log(`Password: ${password}`);

        //Initialize validation variables
        let isValid = true;

        let messages = [];

        //Make feedbackDiv visible
        feedbackDiv.style.display = "block";
        feedbackDiv.innerHTML = ""; //Clear previous messages
        feedbackDiv.style.color = "#dc3545"; //set text color to red
        feedbackDiv.style.backgroundColor = "#ffbaba)"; //set background color to red

        if (username.length < 3){
            isValid = false;

            messages.push("Username needs to be three characters or more");
        
        } 
        
        if (!email.includes("@") || !email.includes(".")){
            isValid = false;

            messages.push("email needs to contain @ and '.' (fullstop)");

        } 
        
        if (password.length < 8){
            isValid = false;

            messages.push("Password needs to be 8 characters or more.");
        } 
        
        if (isValid){
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "rgb(142, 230, 163)";

            messages.push("Registration successful!");
        } else {
            feedbackDiv.style.color = "#dc3545"; //set text color to red
            feedbackDiv.style.backgroundColor = "#ffbaba)"; //set background color to red
        }

        //Display messages
        feedbackDiv.innerHTML = messages.join("<br>");
    })

});