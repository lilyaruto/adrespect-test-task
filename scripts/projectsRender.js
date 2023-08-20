var data = [
    {
        img: "assets/img/projects/picture-9.jfif"
    },
    {
        img: "assets/img/projects/picture-8.jfif"
    },
    {
        img: "assets/img/projects/picture-7.jfif"
    },
    {
        img: "assets/img/projects/picture-6.jfif"
    },
    {
        img: "assets/img/projects/picture-5.jfif"
    },
    {
        img: "assets/img/projects/picture-4.jfif"
    },
    {
        img: "assets/img/projects/picture-3.jfif"
    },
    {
        img: "assets/img/projects/picture-2.jfif"
    },
    {
        img: "assets/img/projects/picture-1.jfif"
    }
];

document.querySelector(".g").innerHTML = data.map(project => 
    `<div class="grid-item">
        <img class="img" src=${project.img} alt="">
    </div>`        
).join("")