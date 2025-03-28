document.addEventListener("DOMContentLoaded", function () {
    const genreBtn = document.getElementById("genre-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle dropdown visibility on click
    genreBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!genreBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
