// hoisting 

let nico = {
    nombre: 'Nicolas',
    apellido: 'Cirulli',
    rol: 'Mentor',
    edad : 28
}
let lucre = {
    nombre: 'Lucrecia',
    apellido: 'Gillone',
    rol: 'Mentora',
    edad : 27
}
let fede = {
    nombre: 'Federico',
    apellido: 'Rouyere',
    rol: 'Mentor',
    edad : 40
}
let flor = {
    nombre: 'Florencia',
    apellido: 'Puñales',
    rol: 'Mentora',
    edad : 23
}
let cami = {
    nombre: 'Camila',
    apellido: 'Domato',
    rol: 'Mentora',
    edad : 28
}
let guille = {
    nombre: 'Guillermo',
    apellido: 'Bonutto',
    rol: 'Mentor',
    edad : 22
}
let kevin = {
    nombre: 'Kevin',
    apellido: 'Darnet',
    rol: 'Mentor',
    edad : 29
}

// funciones 


// Declaración de funcion



function saludarAlumnos(){
    let mensaje = 'Hola alumnos'
    console.log( mensaje )
}

// Expresion de funcion

let saludarAlumnosDos = function(){
    let mensaje = 'Hola alumnos'
    console.log( mensaje )
}


// Parametros de funcion
/*
function saludarAUnAlumno( parametroUno, alumno ){
    console.log( 'Parametro uno: ',  parametroUno )
    console.log( 'alumno: ', alumno )
    let mensaje = `Hola ${alumno}`
    console.log( mensaje )
}

saludarAUnAlumno( 'hola', 'Nicolas' )
console.log( '------------' )
saludarAUnAlumno( 'cualquier cosa', 'Lucre' )
*/
 
function crearMensaje( persona ){
    let mensaje = `Hola ${persona.nombre} ${persona.apellido} tu rol es ${persona.rol}`
    return mensaje
} 

const mensajeNico = crearMensaje( nico )
const mensajeFede = crearMensaje( fede )
let mensajeFlor =  crearMensaje( flor )


const listaMensajes = [ mensajeNico, mensajeFede, mensajeFlor, crearMensaje( lucre ) ]

// metodos string

// toLowerCase() te devuelve la cadena en minuscula
let nombre = 'NIcOlAS'
let nombreEnMinuscula = nombre.toLowerCase()
console.log( nombreEnMinuscula )

// toUpperCase() te devuelve la cadena en mayuscula

let nombreEnMayuscula = nico.nombre.toUpperCase()
console.log( nombreEnMayuscula )


// charAt() te devuelve el caracter en la posicion que le pases como parametro
let primeraLetra = nico.nombre.charAt( 3 ).toUpperCase()
console.log( primeraLetra )

// indexOf() te devuelve la posicion de la primera ocurrencia del caracter que le pases como parametro

let indiceL = nico.nombre.toLowerCase().indexOf( 'N' )
console.log( indiceL )

// slice() te devuelve una subcadena desde la posicion que le pases como parametro hasta el final
console.log( lucre.nombre )
console.log( lucre.nombre.slice( 2 ) )


// split te devuelve un array con los caracteres de la cadena
console.log( listaMensajes[0].toLowerCase().split( ' ' )[0].slice( 0, 2 ) )

// replace te devuelve una cadena con el caracter que le pases como parametro reemplazado por el que le pases como segundo parametro
console.log( listaMensajes[1].replace( 'Mentor', 'Alumno' ) )

// includes te devuelve true si la cadena incluye el caracter que le pases como parametro
console.log( listaMensajes[2] )
console.log( listaMensajes[2].includes( ' ' ) )

// trim te devuelve la cadena sin espacios al principio y al final

let cadenaConEspacios = '   Hola Mundo  '
console.log( cadenaConEspacios.trim() )

// startsWith te devuelve true si la cadena empieza con el caracter que le pases como parametro

let cadena = 'Hola Mundo'

console.log( cadena.startsWith( 'Hola Mundo' ) )

// repeat te devuelve la cadena repetida la cantidad de veces que le pases como parametro

console.log( (nico.nombre +" ").repeat(5) )



