// const carousel = document.querySelector('.carousel');
// const articles = document.querySelectorAll('.article');

// let currentIndex = 0;
// const articleWidth = articles[0].offsetWidth;

// function showArticle(index) {
//   if (index < 0 || index >= articles.length) return;
//   currentIndex = index;
//   const offset = -currentIndex * articleWidth;
//   carousel.style.transform = `translateX(${offset}px)`;
// }

// document.getElementById('prev-button').addEventListener('click', () => {
//   showArticle(currentIndex - 1);
// });

// document.getElementById('next-button').addEventListener('click', () => {
//   showArticle(currentIndex + 1);
// });

const carousel = document.querySelector('.carousel');
const articles = document.querySelectorAll('.article');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;
const articleWidth = articles[0].offsetWidth;

function nextSlide() {
    if (currentIndex < articles.length - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(${-currentIndex * articleWidth}px)`;
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(${-currentIndex * articleWidth}px)`;
    }
}