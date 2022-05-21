const btnMobile = document.querySelector("#btnMobile");
const nav = document.getElementById("navHeader");
const btnLinks = document.querySelectorAll(".linkMenu");

//função que adiciona ou elimina classe active do menu
function toggleMenu() {
    nav.classList.toggle('active');
}

//Recolhe ou abre o menu ao clicar no botão menu
btnMobile.addEventListener("click", toggleMenu);

//Recolhe menu ao clicar nos items
btnLinks.forEach((element) => element.addEventListener('click', toggleMenu));