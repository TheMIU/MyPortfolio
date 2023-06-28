const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderImg = document.querySelector('.slider-img');

const images = ['assets/images/gallery/g1.jpg', 'assets/images/gallery/g2.jpg', 'assets/images/gallery/g3.jpg' , 'assets/images/gallery/g4.jpg' , 'assets/images/gallery/g5.jpg'];
let currentIndex = 0;

function showImage(index) {
    sliderImg.classList.remove('active');
    setTimeout(() => {
        sliderImg.src = images[index];
        sliderImg.classList.add('active');
    }, 300);
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);
