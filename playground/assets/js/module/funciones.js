export function imprimirArticulos ( arrayPersonajes, elementoHTML ) {
    if( arrayPersonajes.length === 0 ){
        elementoHTML.innerHTML = `<h2> No hay agentes </h2>`
    }else{
        elementoHTML.innerHTML = arrayPersonajes.reduce( (acc, act) =>  acc + crearArticle( act ), '' )
    }
}
export function crearArticle( agente ){
    const { bustPortrait, displayName, role:{displayName:role}, description } = agente
    const colorRol = role === 'Sentinel' ? 'text-info' : 'text-danger'
    console.log(location)
    /* let colorRol = ""
    if( role === 'Sentinel' ){
        colorRol = 'text-info'
    }else{
        colorRol = 'text-danger'
    } */
    return `<article class="card border-dark col-11 col-md-6 col-xl-3">
                <img class="card-img-top" src="${bustPortrait}" alt="Title">
                <div class="card-body">
                <h4 class="card-title">${displayName}</h4>
                <p class="card-text ${colorRol}">${role}</p>
                <p class="card-text">${description}</p>
                </div>
            </article>
    `
}
export function imprimirOptions( roles, select ){
    let template = ""
    for( let role of roles ){
        template += `<option value="${role}">${role}</option>`
    }
    select.innerHTML += template
} 
export function filtrarPorRol( agentes, rol ){
    if( rol == "all" ){
        return agentes
    }
    return agentes.filter( agente => agente.role.displayName == rol )
}
export function filtrarPorTexto( agentes, texto ){
    return agentes.filter( agente => agente.displayName.toLowerCase().includes( texto.toLowerCase() ) )
}
export function filtroCruzado( agentes, rol, texto ){
    const filtradosPorRol = filtrarPorRol( agentes, rol )
    const filtradosPorTexto = filtrarPorTexto( filtradosPorRol, texto )
    return filtradosPorTexto
}