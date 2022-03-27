document.addEventListener('DOMContentLoaded', () => {
    populaProjects();
});

let titleProjeto = document.querySelectorAll('.titleProjeto');
let descProjeto = document.querySelectorAll('.descProjeto');
let headerProjeto = document.querySelectorAll('.headerProjeto');
let btnProjeto = document.querySelectorAll('.btnProjeto');

let projetos = [
    {
        id:1231231,
        nome: "Landind Page Advogado Online",
        description: "Landing page desenvolvida para advogados, com intuito de captar clientes e passar mais confiança aos mesmos.",
        capa: "/assets/images/capa-1.jpg",
        link: "https://pauloguedes96.github.io/Landing-Page-Advogado/"
    },
    {
        id:423423,
        nome: "Consulta CEP",
        description: "Projeto desenvolvido para que pessoas possam com facilidade consultar o cep de qualquer cidade do Brasil.",
        capa: "/assets/images/capa-2.jpg",
        link: "https://pauloguedes96.github.io/Consulta-CEP/"
    },
    {
        id:25345,
        nome: "Conversor de Moedas",
        description: "Projeto desenvolvido para que de maneira simplificada se possa fazer a conversão de moedas.",
        capa: "/assets/images/capa-3.jpg",
        link: "https://pauloguedes96.github.io/Conversor-de-Moedas/"
    },
    {
        id:534534,
        nome: "CRUD",
        description: "CRUD criado com javascript, com fins de estudo, armazenando dados no local storage do navegador.",
        capa: "/assets/images/capa-4.jpg",
        link: "https://pauloguedes96.github.io/CRUD/"
    }
];

function populaProjects() {

    projetos.forEach((element, index, array) => {
        titleProjeto[index].innerText = element.nome;
        descProjeto[index].innerHTML = element.description;
        headerProjeto[index].style.backgroundImage = `url('${element.capa}')`;
        btnProjeto[index].id = element.id;
    });
}



