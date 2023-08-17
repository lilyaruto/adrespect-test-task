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
            <span class="mask">
                <div class="link-container">
                    <span class="link-title1 title">Dowiedz się więcej</span>
                    <span class="link-title2 title">Dowiedz się więcej</span>
                </div>
            </span>
            <div class="link-icon">
                <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M7.99528 -1.20755e-06L7.09959 0.895696L13.5769 7.36358L-7.5502e-07 7.36358L-6.43745e-07 8.63642L13.5675 8.63642L7.09959 15.1043L7.99529 16L16 7.99529L7.99528 -1.20755e-06Z" fill="#1B5B31"/>
                </svg>
                <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M7.99528 -1.20755e-06L7.09959 0.895696L13.5769 7.36358L-7.5502e-07 7.36358L-6.43745e-07 8.63642L13.5675 8.63642L7.09959 15.1043L7.99529 16L16 7.99529L7.99528 -1.20755e-06Z" fill="#1B5B31"/>
                </svg>
            </div>
        </a>
        </div>
    </div>`        
).join("")