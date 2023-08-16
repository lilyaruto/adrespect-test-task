var field = document.querySelector(".col");

var data = [
    {
        title: "Projekty",
        message: "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
        img: "assets/img/cards-img/pencil.png"
    },
    {
        title: "Wizualizacje",
        message: "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
        img: "assets/img/cards-img/eye.png"
    },
    {
        title: "Realizacje",
        message: "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
        img: "assets/img/cards-img/stars.png"
    }
];

document.querySelector(".row").innerHTML = data.map(card => 
    `<div class="col">
        <div class="card">
            <div class="card_upper">
                <img src=${card.img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">
                        ${card.message}
                    </p>
                </div>
            </div>
            <a href="#" class="card_btn">
                Dowiedz się więcej<img class="card_btn_img" src="assets/img/cards-img/arrow.svg" alt="">
            </a>
        </div>
    </div>`        
).join("")