import {imprimirArticulos} from "./module/funciones.js"
let $contenedor = document.getElementById( 'contenedor-personajes' )
const url = 'https://valorant-api.com/v1/agents'
let agentes = []
fetch( url )
    .then( response => response.json() )
    .then( datos => {
        agentes = datos.data.filter( agente => agente.isPlayableCharacter )
        imprimirArticulos( agentes, $contenedor )
    } )
    .catch( err => console.log(err) )