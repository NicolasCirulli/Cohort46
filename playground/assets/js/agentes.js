import {imprimirArticulos, imprimirOptions, filtroCruzado} from './module/funciones.js'
// referencias
const $contenedor = document.getElementById( 'contenedor-personajes' )
const $select = document.getElementById( 'select-js' )
const $inputBusqueda = document.getElementById( 'busqueda-js' )

// datos
const agentes = personajes.data.filter( agente => agente.isPlayableCharacter )

const arrayRoles = [ ...new Set( agentes.map( agente => agente.role.displayName ) ) ]

// eventos
$select.addEventListener( 'change', () => {
    const agentesFiltrados = filtroCruzado( agentes, $select.value, $inputBusqueda.value )
    imprimirArticulos( agentesFiltrados, $contenedor )
} )
$inputBusqueda.addEventListener( 'input', () => {
    const agentesFiltrados = filtroCruzado( agentes, $select.value, $inputBusqueda.value )
    imprimirArticulos( agentesFiltrados, $contenedor )
} )

// ejecuciones
imprimirArticulos( agentes, $contenedor )
imprimirOptions( arrayRoles, $select  )































// ejemplo con nodos
/* function imprimirNodos( arrayPersonajes, elementoHTML ){
    const $fragment = document.createDocumentFragment()
    for (const personaje of arrayPersonajes) {
        $fragment.appendChild(  crearNodoArticle( personaje )  )
    }
    elementoHTML.appendChild( $fragment )
}

function crearNodoArticle(agente){
    // crear el nodo article
    const $article = document.createElement('article')
    // agregarle las clases
    $article.className = "card border-primary col-11 col-md-6 col-xl-3"

    // crear el nodo img
    const $imagen = document.createElement('img')
    // modifico el atributo src
    $imagen.src = agente.bustPortrait
    // agregarle la clase
    $imagen.classList.add( 'card-img-top' )
    // agregarle el alt
    $imagen.alt = `Imagen de ${agente.displayName}`

    const $div = document.createElement('div')
    
    $div.className = "card-body"
    
    const $h4 = document.createElement('h4')
    
    $h4.className = "card-title"
    $h4.textContent = agente.displayName
    
    const $p = document.createElement('p')
    $p.className = "card-text"
    $p.textContent = agente.description
    
    $div.append( $h4, $p )
    
    $article.append( $imagen, $div )
    
    return $article
} */