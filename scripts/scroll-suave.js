let menuItems = document.querySelectorAll('#menu a');

menuItems.forEach((item) => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {

    //Previne o comportamento padrão
    event.preventDefault();

    let element = event.target;

    let id = element.getAttribute('href');

    let section = document.querySelector(id);
    
    //pega distancia/posição da section em
    //relação ao documento ou elemento pai
    let to = section.offsetTop; 

    //faz rolar a página até 
    //a posição indicada, de maneira suave
    window.scroll({
        top: to,
        behavior: 'smooth'
      });
}