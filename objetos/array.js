const mentores = [ 1,'Nicolas', 'Fede', 'Lucre', 'Flor', 'Cami', 'Kevin', 'Guille' ]

// como agregar elementos a un array

// para agregar al principio usamos unshift
mentores.unshift( 'Jose' )
// para agregar al final usamos push
mentores.push( 'Igna', 'Eric' )

// como eliminar elementos de un array
// para eliminar el primero usamos shift
/* 
    const mentorEliminado = mentores.shift() 
    console.log( mentorEliminado ) 
*/

// para eliminar el ultimo usamos pop
/* 
    const ultimoMentorEliminado = mentores.pop()
    console.log(ultimoMentorEliminado) 
*/

const copiaMentores = [].concat( mentores )
/* 
    console.log( mentores )
    console.log( copiaMentores )
    console.log( copiaMentores == mentores ) 
*/

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const numerosDos = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// como unir dos arrays
const numerosUnidos = numeros.concat( numerosDos )
console.log(numeros)
console.log(numerosDos)
console.log(numerosUnidos)


// como saber si un elemento esta en un array
/* 
    numeros.includes( 7 )
    console.log( numeros.includes( 7 ) )
    console.log( numeros.includes( 11 ) ) 
*/

// como saber la posicion de un elemento en un array
/* 
    console.log( mentores )
    console.log( mentores.indexOf( 'Lucre' ) )
    console.log( mentores.indexOf( 'Joaco' ) ) 
*/

// como invertir un array
/* 
    const numerosInvertidos = [].concat(numeros).reverse()
    console.log( numeros )
    console.log( numerosInvertidos ) 
*/

// slice para cortar un array

/* 
    console.log( mentores.slice( 2, 6 ) )
 */


// join

/* 
    console.log( mentores.join( ' - ' ) )
    console.log( numeros.join( ' --separador-- ' ) )
*/

// sort
console.log( mentores.sort() )