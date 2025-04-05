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



document.addEventListener("DOMContentLoaded", () => {
    // Sign-in form validation
    document.getElementById("signin-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
        } else {
            alert("Sign-in successful!");
        }
    });

    // Sign-up form validation
    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const phone = document.getElementById("signup-phone").value;
        const password = document.getElementById("signup-password").value;
        
        if (username === "" || email === "" || phone === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Sign-up successful!");
        }
    });

    // Download button functionality
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Download started!");
        });
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


//Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider-item");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;
    let slideWidth = slides[0].offsetWidth + 20;
    let cloneSlides = [...slides];

    // Clones slides for infinite loop effect
    cloneSlides.forEach(slide => {
        let clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    function moveSlide(direction) {
        if (direction === "next") {
            index++;
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(-${index * slideWidth}px)`;

            setTimeout(() => {
                if (index >= slides.length) {
                    track.style.transition = "none";
                    track.style.transform = `translateX(0px)`;
                    index = 0;
                }
            }, 500);
        } else {
            if (index <= 0) {
                index = slides.length;
                track.style.transition = "none";
                track.style.transform = `translateX(-${index * slideWidth}px)`;
            }
            index--;
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(-${index * slideWidth}px)`;
        }
    }

    next.addEventListener("click", () => moveSlide("next"));
    prev.addEventListener("click", () => moveSlide("prev"));

    // Auto-slide every 3 seconds
    setInterval(() => moveSlide("next"), 3000);
});
