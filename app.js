// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarMensajeTemporal(selector, mensaje, duracion = 1000) {
    let elementoHTML = document.querySelector(selector);
    const mensajeOriginal = elementoHTML.innerHTML;
    
    asignarTextoElemento(selector, mensaje);
    
    setTimeout(() => {
        asignarTextoElemento(selector, mensajeOriginal);
    }, duracion);
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo === " ") {
        asignarTextoElemento('h2','Por favor escribe un nombre válido');
        return 
    }

    if (!isNaN(amigo)) {
        asignarTextoElemento('h2','Por favor escribe un nombre válido');
        return 
    }
    nombreAmigos.push(amigo);
    console.log(nombreAmigos);
    console.log(nombreAmigos.length)
    limpiarCaja();
    mostrarMensajeTemporal('h2', '¡Amigo agregado exitosamente!', 1000);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
