let modal = document.querySelector('#modal');
modal.style.display = 'none';

let titleProjetoModal = document.querySelector('#titleProjetoModal');
let descProjetoModal = document.querySelector('#descProjetoModal');
let headerProjetoModal = document.querySelector('#headerProjetoModal');
let btnProjetoModal = document.querySelector('#btnProjetoModal a');

function mostraModal(e) {

    if (modal.style.display == 'none') {
        modal.style.display = 'flex';
        populaModal(e.id)
    }
    else {
        modal.style.display = 'none';
    }
}

function populaModal(id) {

    /* retorna somente o projeto clicado  */
    let projClicado = projetos.filter((projeto) => { return projeto.id == id });

    titleProjetoModal.innerHTML = projClicado[0].nome;

    descProjetoModal.innerHTML = projClicado[0].description;

    headerProjetoModal.style.backgroundImage = `url('${projClicado[0].capa}')`;

    btnProjetoModal.href = projClicado[0].link;
}