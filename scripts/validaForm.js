//Objeto Mensagem
let mensagem = {};

//Evento click botão enviar
document.getElementById('btnEnviar').addEventListener('click', enviaForm);

//função que valida e armazena a mensagem
function enviaForm() {

    let formContato = document.getElementsByClassName('form');

    if (formContato[0].value == "" || formContato[1].value == "" || formContato[2].value == "" || formContato[3].value == "") {

        if (formContato[0].value == "") {
            formContato[0].style.border = 'solid 2px red';
        }
        else {formContato[0].style.border = 'none';}

        if (formContato[1].value == "") {
            formContato[1].style.border = 'solid 2px red';
        }
        else {formContato[1].style.border = 'none';}

        if (formContato[2].value == "") {
            formContato[2].style.border = 'solid 2px red';
        }
        else {formContato[2].style.border = 'none';}

        if (formContato[3].value == "") {
            formContato[3].style.border = 'solid 2px red';
        }
        else {formContato[3].style.border = 'none';}
        
    }

    if (formContato[0].value != "" && formContato[1].value != "" && formContato[2].value != "" && formContato[3].value) {

        mensagem = {nome: formContato[0].value, email: formContato[1].value, telefone: formContato[2].value, mensagem: formContato[3].value };

        console.log(mensagem);
        console.log("Enviado com Sucesso");
        document.getElementById("confirmaEnvio").style.display = "block";
        document.getElementById("erroCampos").style.display = "none";

        formContato[0].style.border = 'none';
        formContato[1].style.border = 'none';
        formContato[2].style.border = 'none';
        formContato[3].style.border = 'none';

        }
    else{
        console.log("Prencha todos os campos");
        document.getElementById("erroCampos").style.display = "block";
        document.getElementById("confirmaEnvio").style.display = "none";
    }
}

