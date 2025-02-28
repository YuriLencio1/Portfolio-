document.addEventListener("DOMContentLoaded", function () {

    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Criador de Experiências", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    if (typeof particlesJS !== "undefined") {
        particlesJS("home", {
            particles: {
                number: { value: 50 },
                size: { value: 3 },
                move: { speed: 1 },
                line_linked: { enable: true, distance: 150 }
            }
        });
    }
});

window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    let profileImage = document.querySelector(".profile-image img");

    if (profileImage) {
        profileImage.style.transform = `translateY(${scroll * 0.2}px)`;
    }
});
