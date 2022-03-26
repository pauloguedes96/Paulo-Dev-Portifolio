const btnMobile = document.getElementById("btnMobile");

//Evento clique menu mobile
btnMobile.addEventListener("click", toggleMenu);

//função que adiciona ou elimina classe active no elemento html
function toggleMenu() {
    const nav = document.getElementById("navHeader");
    nav.classList.toggle('active');
}