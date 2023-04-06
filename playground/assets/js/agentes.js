// referencias
const $contenedor = document.getElementById( 'contenedor-personajes' )
const $select = document.getElementById( 'select-js' )
const $inputBusqueda = document.getElementById( 'busqueda-js' )

// datos
const agentes = personajes.data.filter( agente => agente.isPlayableCharacter )

const roles = agentes.map( agente => agente.role.displayName )

const setRoles = new Set( roles )

const arrayRoles = Array.from( setRoles )

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

// funciones
function imprimirArticulos ( arrayPersonajes, elementoHTML ) {
    if( arrayPersonajes.length === 0 ){
        elementoHTML.innerHTML = `<h2> No hay agentes </h2>`
    }else{
        elementoHTML.innerHTML = arrayPersonajes.reduce( (acc, act) =>  acc + crearArticle( act ), '' )
    }
}
function crearArticle( agente ){
    return `<article class="card border-dark col-11 col-md-6 col-xl-3">
                <img class="card-img-top" src="${agente.bustPortrait}" alt="Title">
                <div class="card-body">
                <h4 class="card-title">${agente.displayName}</h4>
                <p class="card-text">${agente.role.displayName}</p>
                <p class="card-text">${agente.description}</p>
                </div>
            </article>
    `
}
function imprimirOptions( roles, select ){
    let template = ""
    for( let role of roles ){
        template += `<option value="${role}">${role}</option>`
    }
    select.innerHTML += template
} 
function filtrarPorRol( agentes, rol ){
    if( rol == "all" ){
        return agentes
    }
    return agentes.filter( agente => agente.role.displayName == rol )
}
function filtrarPorTexto( agentes, texto ){
    return agentes.filter( agente => agente.displayName.toLowerCase().includes( texto.toLowerCase() ) )
}
function filtroCruzado( agentes, rol, texto ){
    const filtradosPorRol = filtrarPorRol( agentes, rol )
    const filtradosPorTexto = filtrarPorTexto( filtradosPorRol, texto )
    return filtradosPorTexto
}
// datos para crear los options
/* Hacer dinamicos los options del select */
// template del option
/* <option value="Initiator">Initiator</option> */


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