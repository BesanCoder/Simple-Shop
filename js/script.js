document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const navList = document.getElementById('header-nav-list');

    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});

//Show Slides
const items = document.querySelectorAll('.special-category-section-item-container');
const dots = document.querySelectorAll('.dot');
const itemsPerSlide = 4;
let currentSlideIndex = 1;

function showSlide(slideIndex) {
    items.forEach(item => {
        item.style.display = 'none';
    });

    let start = (slideIndex - 1) * itemsPerSlide;
    let end = start + itemsPerSlide;

    if (slideIndex === 1) {
        start = 0;
        end = itemsPerSlide;
    } else if (slideIndex === 2) {
        start = itemsPerSlide;
        end = itemsPerSlide * 2;
    }

    items.forEach((item, index) => {
        if (index >= start && index < end) {
            item.style.display = 'flex';
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === (slideIndex - 1)) {
            dot.classList.add('active');
        }
    });
}

function currentSlide(slideIndex) {
    currentSlideIndex = slideIndex;
    showSlide(slideIndex);
}

showSlide(currentSlideIndex);
