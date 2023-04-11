
// Fetch lo vamos a usar para hacer solicitudes http
// En este workshop todas de tipo GET
console.log('inicio')

fetch( './datos.json' )
    .then( funcionPrimerThen )
    .then( funcionSegundoThen )
    .catch( error => console.log("error en el catch: ", error) )
    .finally( () => console.log('termino todo esto') )


console.log('fin')

function funcionPrimerThen( response ){
   return response.json()
}
function funcionSegundoThen( body ) {
    console.log(body)
}