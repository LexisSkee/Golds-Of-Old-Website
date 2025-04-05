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


    // Search functionality
    document.addEventListener("DOMContentLoaded", function () {
        const searchIcon = document.querySelector(".SearchIcon");
        const searchBox = document.getElementById("search-box");
    
        searchIcon.addEventListener("click", function () {
            searchBox.classList.toggle("show");
        });
    
        document.addEventListener("click", function (event) {
            if (!searchIcon.contains(event.target) && !searchBox.contains(event.target)) {
                searchBox.classList.remove("show");
            }
        });
    });
    