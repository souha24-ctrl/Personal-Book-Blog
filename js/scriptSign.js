document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    
    const username = document.getElementById("exampleInputUsername").value;
    const dobInput = document.getElementById("exampleInputDate").value;

    // Age validation (must be +13)
    const dob = new Date(dobInput);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age < 13) {
        alert("You must be at least 13 years old to sign up.");
        return; // Exit if age validation fails
    }

    // welcome message + gif
    const welcomeMessageDiv = document.getElementById("welcomeMessage");
    const userWelcome = document.getElementById("userWelcome");
    const gifContainer = document.getElementById("gifContainer");

    userWelcome.textContent = `Welcome to the community, ${username}!`;
    const gifUrl = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanYwNWw1dWxmdmY3NjNvZXR4eDRiNm12NWxmODdpbWxxYnZzZXI4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DPH2d2WQsvTVEDVa2p/giphy.webp"; // Example GIF URL
    gifContainer.src = gifUrl;

    welcomeMessageDiv.style.display = "block"; // Show the welcome message

    // Redirect to the blog section after 3 seconds
    setTimeout(() => {
        window.location.href = "../index.html#Blog";
    }, 3000);
    
    
});

