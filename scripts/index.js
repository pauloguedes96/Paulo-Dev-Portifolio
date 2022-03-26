let titleProjeto = document.querySelectorAll('.titleProjeto');
let descProjeto = document.querySelectorAll('.descProjeto');
let headerProjeto = document.querySelectorAll('.headerProjeto');
let btnProjeto = document.querySelectorAll('.btnProjeto a');

let projetos = [
    {
        nome: "Landind Page Advogado Online",
        description: "Landing page desenvolvida para advogados, com intuito de captar clientes e passar mais confiança aos mesmos.",
        capa: "/assets/images/capa-1.jpg",
        /*         link:"https://pauloguedes96.github.io/Landing-Page-Advogado/" */
        link: "#"
    },
    {
        nome: "Consulta CEP",
        description: "Projeto desenvolvido para que pessoas possam com facilidade consultar o cep de qualquer cidade do Brasil.",
        capa: "/assets/images/capa-2.jpg",
        /*         link:"https://pauloguedes96.github.io/Consulta-CEP/" */
        link: "#"
    },
    {
        nome: "Conversor de Moedas",
        description: "Projeto desenvolvido para que de maneira simplificada se possa fazer a conversão de moedas.",
        capa: "/assets/images/capa-3.jpg",
        /*         link:"https://pauloguedes96.github.io/Conversor-de-Moedas/" */
        link: "#"
    },
    {
        nome: "CRUD",
        description: "CRUD criado com javascript, com fins de estudo, armazenando dados no local storage do navegador.",
        capa: "/assets/images/capa-4.jpg",
        /*         link:"https://pauloguedes96.github.io/CRUD/" */
        link: "#"
    }
];

function populaProjects() {

    projetos.forEach((element, index, array) => {
        titleProjeto[index].innerText = element.nome;
        descProjeto[index].innerHTML = element.description;
        headerProjeto[index].style.backgroundImage = `url('${element.capa}')`;
        btnProjeto[index].href = element.link;
    });
}

document.addEventListener('DOMContentLoaded', () => {

    populaProjects();
});

