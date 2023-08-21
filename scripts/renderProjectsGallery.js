const images = [
    "assets/img/projects/picture-9.jfif",
    "assets/img/projects/picture-8.jfif",
    "assets/img/projects/picture-7.jfif",
    "assets/img/projects/picture-6.jfif",
    "assets/img/projects/picture-5.jfif",
    "assets/img/projects/picture-4.jfif",
    "assets/img/projects/picture-3.jfif",
    "assets/img/projects/picture-2.jfif",
    "assets/img/projects/picture-1.jfif"
];

// todo (open image from clicked link first)
// var link = document.querySelectorAll(".project_link");

// document.querySelectorAll('.project_link').forEach(link => {
//     link.addEventListener('click', (e) => {
//       link_src = String(link.href).substring(22)
//     });
// });

const carouselInner = document.querySelector('.carousel-inner');

images.forEach((image, index) => {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    
    if (index === 0) {
        item.classList.add('active');
    }
    
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Image ${index + 1}`;
    img.classList.add('carousel-img', 'd-block', 'w-100');
    
    item.appendChild(img);
    carouselInner.appendChild(item);
});