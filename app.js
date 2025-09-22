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

    // Regex: solo letras (mayúsculas, minúsculas, acentos y espacios)
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regexNombre.test(amigo) || amigo.length < 2) {
        asignarTextoElemento('h2','Por favor escribe un nombre válido');
        return;
    }

    // Agregar a la lista
    nombreAmigos.push(amigo);

    // Mostrar en pantalla
    mostrarLista();

    limpiarCaja();
    mostrarMensajeTemporal('h2', '¡Amigo agregado exitosamente!', 1000);
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpiar antes de volver a mostrar
    nombreAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    if (nombreAmigos.length === 0) {
        asignarTextoElemento('h2','Agrega al menos un nombre antes de sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSecreto = nombreAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    alert(`🎉 Tu amigo secreto es: ${amigoSecreto}`);

    // Reiniciar juego
    reiniciarJuego();
}

function reiniciarJuego() {
    nombreAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}