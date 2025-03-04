document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll untuk Navbar
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Highlight Navbar saat Scroll
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;

        links.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop - 60 <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                link.style.color = "#FFD700"; // Warna emas untuk menu aktif
            } else {
                link.style.color = "white";
            }
        });
    });

    // Animasi Fade-in saat Scroll
    const fadeElements = document.querySelectorAll(".card, aside");

    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Panggil saat pertama kali load
});
