const $contenedor = document.getElementById( 'contenedor-personajes' )


const agentes = personajes.data.filter( agente => agente.isPlayableCharacter )

const imprimirArticulos = ( arrayPersonajes, elementoHTML ) => {
    elementoHTML.innerHTML = arrayPersonajes.reduce( (acc, act) =>  acc + crearArticle( act ), '' )
}

imprimirArticulos( agentes, $contenedor )


function crearArticle( agente ){
    return `<article class="card border-dark col-11 col-md-6 col-xl-3">
                <img class="card-img-top" src="${agente.bustPortrait}" alt="Title">
                <div class="card-body">
                <h4 class="card-title">${agente.displayName}</h4>
                <p class="card-text">${agente.description}</p>
                </div>
            </article>
    `
}

function imprimirNodos( arrayPersonajes, elementoHTML ){
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
}