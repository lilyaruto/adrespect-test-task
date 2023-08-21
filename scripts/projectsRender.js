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
    },
];

document.querySelector(".grid").innerHTML = data.map(project => 
    `            <div class="grid-item">
    <a href=${project.img} data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img class="img" src=${project.img} alt="">
    </a>
</div>`        
).join("")