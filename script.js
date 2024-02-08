import {barcelona, roma, paris, londres} from './ciudades.js'

let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

enlaces.forEach( function (enlace){
    // cada elemento (a) escucha el click por se run bucle
    enlace.addEventListener('click', function(){

        enlaces.forEach(function (enlace){
            // hace el blucle para eliminar todos los active
            enlace.classList.remove('active')
        })

        this.classList.add('active')

        // obtener contenido segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    })
})

// traer informacion desde ciudades.js
// obtiene el valor de city desde this.textContent
function obtenerContenido(city){
    let contenidoCity = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    }
    return contenidoCity[city]
}