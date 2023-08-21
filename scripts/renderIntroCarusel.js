const introImages = [
    "assets/img/intro-img.jfif",
    "assets/img/intro-img.jfif",
    "assets/img/intro-img.jfif"
];

const carouselIntoInner = document.querySelector('.intro_carousel-inner');

introImages.forEach((image, index) => {
    const item = document.createElement('div');
    item.classList.add('carousel-item', 'carousel-item-intro');
    item.setAttribute("data-bs-interval", 3000)
    
    if (index === 0) {
        item.classList.add('active');
    }
    
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Image ${index + 1}`;
    img.classList.add('carousel-intro-img', 'd-block', 'w-100');
    
    item.appendChild(img);
    carouselIntoInner.appendChild(item);
});