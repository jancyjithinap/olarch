// script.js

document.addEventListener("DOMContentLoaded", function() {
    const profileButton = document.getElementById("profileButton");
    const profileSection = document.getElementById("profileSection");

    profileButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action of the link
        profileSection.classList.toggle("hidden"); // Toggle the visibility of the profile section
    });
});
