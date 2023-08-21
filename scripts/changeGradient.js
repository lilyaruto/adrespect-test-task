var button = document.querySelector(".more-btn");
var gradient = document.getElementById("gradient");


button.addEventListener("click", (event) => {
    if (!document.querySelector(".more-btn").classList.contains("collapsed")) {
        console.log(1);
        gradient.className = "hide-gradient";
    } else {
        gradient.className = "show-gradient";
    }
});
