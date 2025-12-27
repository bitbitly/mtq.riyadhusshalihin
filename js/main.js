const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// HERO SLIDESHOW

let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".slider-dots");
let currentIndex = 0;

// CREATE DOTS
slides.forEach((_, i) => {
    let dot = document.createElement("div");
    if(i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => showSlide(i));
});

let dots = dotsContainer.querySelectorAll("div");

// SHOW SLIDE
function showSlide(i) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = i;

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
}

// AUTO SLIDE EVERY 5s
setInterval(() => {
    let next = (currentIndex + 1) % slides.length;
    showSlide(next);
}, 5000);

// ARROW CONTROLS
document.querySelector(".next").onclick = () => {
    let next = (currentIndex + 1) % slides.length;
    showSlide(next);
};
document.querySelector(".prev").onclick = () => {
    let prev = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
};

// LIGHTBOX
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// DONATION SLIDER
let donationImages = document.querySelectorAll(".donation-slider .slider-images img");
let donationIndex = 0;

function showDonationSlide(index) {
    donationImages.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) img.classList.add("active");
    });
}

function nextSlide() {
    donationIndex = (donationIndex + 1) % donationImages.length;
    showDonationSlide(donationIndex);
}

function prevSlide() {
    donationIndex = (donationIndex - 1 + donationImages.length) % donationImages.length;
    showDonationSlide(donationIndex);
}

// Initialize first slide
showDonationSlide(donationIndex);


// AUTO SLIDE every 5s
setInterval(nextDonationSlide, 5000);
