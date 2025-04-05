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


//Search Bar Toggling
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-toggle");
    const searchBox = document.getElementById("search-box");

    // Toggle search box visibility
    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchBox.classList.toggle("show");
        searchBox.focus();
    });

    // Search functionality
    searchBox.addEventListener("input", function () {
        const query = searchBox.value.toLowerCase();
        const games = document.querySelectorAll(".game-item");

        games.forEach(game => {
            const title = game.querySelector("h3").textContent.toLowerCase();
            game.style.display = title.includes(query) ? "block" : "none";
        });
    });
});