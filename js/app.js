//VARIABLES
const txtDestinatario   = document.getElementById('email');
const txtAsunto         = document.getElementById('asunto');
const txtMensaje        = document.getElementById('mensaje');
const btnEnviar         = document.getElementById('enviar');
const btnReset          = document.getElementById('resetBtn');
const frmEnviar         = document.getElementById('enviar-mail');
const loader            = document.getElementById('loaders');



//Listeners
eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', AppIniciada);

    txtDestinatario.addEventListener('blur', validarCampo);
    txtAsunto.addEventListener('blur', validarCampo);
    txtMensaje.addEventListener('blur', validarCampo);
    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetFrm);
}

//funciones
function AppIniciada() {
    btnEnviar.disabled = true;
}

function validarCampo(){
    validarLongitud(this);
    if(txtDestinatario.value!=='' && txtAsunto.value!=='' && txtMensaje.value!==''){
        btnEnviar.disabled=false;
    }else{
        btnEnviar.disabled=true;
    }
}

function validarLongitud(campo) {
    if(campo.value.length>0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function enviarEmail(e) {
    btnEnviar.disabled=true;
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    setTimeout(function (){
        spinnerGif.style.display = 'none';
        loader.appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            frmEnviar.reset();
        },5000)
    },3000);
  e.preventDefault();

}

function resetFrm(e) {
  e.preventDefault()
  frmEnviar.reset();
  btnEnviar.disabled=true;

}
