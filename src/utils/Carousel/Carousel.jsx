import './Carousel.scss'

const el = (sel, par) => (par || document).querySelector(sel);
const els = (sel, par) => (par || document).querySelectorAll(sel);

// Helper functions:

const mod = (n, m) => (n % m + m) % m;

// Task: Carousel:

export const carousel = (elCarousel) => {

const animation = 500;
const pause = 5000;
// Or use something like: const animation = Math.abs(elCarousel.dataset.carouselAnimation ?? 500);

const elCarouselSlider = el(".carousel-slider", elCarousel);
const elsSlides = els(".carousel-slide", elCarouselSlider);
const elsBtns = [];

let itv; // Autoslide interval
let tot = elsSlides.length; // Total slides
let c = 0;

if (tot < 2) return; // Not enough slides. Do nothing.

// Methods:
const anim = (ms = animation) => {
    const cMod = mod(c, tot);
    // Move slider
    elCarouselSlider.style.transitionDuration = `${ms}ms`;
    elCarouselSlider.style.transform = `translateX(${(-c) * 17}%)`;
    // Handle active classes (slide and bullet)
    elsSlides.forEach((elSlide, i) => elSlide.classList.toggle("is-active", cMod === i));
    elsBtns.forEach((elBtn, i) => elBtn.classList.toggle("is-active", cMod === i));
};

const prev = () => {
    if (c <= -1) return; // prevent blanks on fast prev-click
    c -= 1;
    anim();
};

const next = () => {
    if (c >= tot) return; // prevent blanks on fast next-click
    c += 1;
    anim();
};



// Events:

// Infinite slide effect:
elCarouselSlider.addEventListener("transitionend", () => {
    if (c <= -1) c = tot - 1;
    if (c >= tot) c = 0;
    anim(0); // quickly switch to "c" slide (with animation duration 0)
});

document.querySelector('.Right').addEventListener('click', next);
document.querySelector('.Left').addEventListener('click', prev);

// Clone first and last slides (for "infinite" slider effect)
elCarouselSlider.append(elsSlides[0].cloneNode(true));
elCarouselSlider.append(elsSlides[1].cloneNode(true));
elCarouselSlider.append(elsSlides[2].cloneNode(true));
elCarouselSlider.append(elsSlides[3].cloneNode(true));
elCarouselSlider.append(elsSlides[4].cloneNode(true));
elCarouselSlider.append(elsSlides[5].cloneNode(true));

};
