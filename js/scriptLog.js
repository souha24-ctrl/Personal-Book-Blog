//welcome message + gif
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("exampleInputUsername").value;
    const welcomeMessageDiv = document.getElementById("welcomeMessage");
    const userWelcome = document.getElementById("userWelcome");
    const gifContainer = document.getElementById("gifContainer");

    userWelcome.textContent = `Welcome back, ${username}!`;
    const gifUrl = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmhuNXhlbnc5NnJwNTM2eGV0anJsajRkano3NHVqeDl0dmQ3ZnV2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jnf482UXAJ4E1Ojcf2/giphy.webp"; // Example GIF URL
    gifContainer.src = gifUrl;

    welcomeMessageDiv.style.display = "block";
    
    // Redirect to the blog section after 2 seconds
    setTimeout(() => {
        window.location.href = "../index.html#Blog";
    }, 3000);
});


