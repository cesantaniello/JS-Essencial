"use strict";

//********************************
//*** Trabajando con promesas


var boton = document.getElementById('boton');
var mensajes = document.getElementById('mensajes');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function () {

    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        })
        .catch(error => {
            mensajes.classList.toggle('hide');
            mensajes.innerHTML = error;
            setTimeout(() => mensajes.classList.toogle('hide'), 3000);
        })

});

function getPosts() {
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
    return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

function mostrarDatos(posts) {
    contBanderas.innerHTML = '';
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}