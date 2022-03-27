document.addEventListener('DOMContentLoaded', () => {

    let btnTopFloat = document.querySelector('#topFloat');

    btnTopFloat.addEventListener('click', scrollToIdOnClick);

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

    /* Quando chegar no final faz o botão aparecer */
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 2800) {
            btnTopFloat.classList.add('activeTop');
        }else{
            btnTopFloat.classList.remove('activeTop');
        }
    });

});