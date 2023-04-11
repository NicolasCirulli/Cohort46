import { numerosEnString, numeros } from './module/datos.js'
import { sumar, saludarPorConsola } from './module/funciones.js'


console.log( numerosEnString )


/* Operador Ternario */

/* const edad = 15 >= 18 ? 'Es mayor' : 'Es menor'

let edadDos;
if( 20 >= 18 ){
    edadDos = 'Es mayor'
}else{
    edadDos = 'Es menor'
} */

/* Spread operator */

/* 
console.log( 1,2,3,4,5,6,7,8,9,10 )
console.log( [...numeros.slice(4), 'dos', 'tres', 'cuatro'] )

console.log( [ ...document.querySelectorAll( 'h2' ) ]  )
console.log( [...document.getElementsByTagName('h2')] )
console.log( [...new Set( numeros )] )


console.log( sumar( ...[1,2,3] )  )


const copiaMentor = {...mentor}

console.log( mentor == copiaMentor )
 */
/* Destructuring */



/* const [ hola, dos, uno ] =  numerosEnString

const numeroDos = numerosEnString[1]
const numeroOcho = numerosEnString[7]

console.log( dos, hola ) */

/* const nombre = mentor.nombre
const edadMentor = mentor.edad */
/*
const { esMayor, mascota:nombreGato  } = mentor

console.log( esMayor )
console.log ( nombreGato )



saludarPorConsola( mentor ) */

/* Export Import */




