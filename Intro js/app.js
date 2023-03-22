// variables

// let, const 

let nombre
nombre = "Nico"
nombre = "Nicolás"

console.log( nombre )

const edad = 28

console.log( edad )



// // tipo de dato primitivo : string, number, boolean, undefined, null
// string
const apellido = "Cirulli"
const segundoNombre = 'Catriel'
const textoPrueba = "Hola \n mundo"
console.log( textoPrueba )
console.log( nombre + " " + segundoNombre + " " + apellido )
const nombreCompleto = `Mi nombre completo es: ${ nombre } ${segundoNombre} ${apellido}`
console.log( nombreCompleto )

// number
const entero = 10
const decimal = 10.5
const negativo = -10
console.log( entero )

// boolean
const verdadero = true
const falso = false

// undefined && null
let indefinida = undefined
let nula = null


// tipo de dato no primitivo
// object
const auto =  {
    marca : "Ford",
    color : "Rojo",
    modelo : 2020,
    cantidadPuertas : 4,
    ceroKm : false,
}
const nicolas = {
    nombre : "Nicolas",
    apellido : "Cirulli",
    edad : 28,
    mentor : true
}
console.log( auto.color )
console.log( auto.cantidadPuertas )
console.log( auto.ceroKm )
console.log( `${auto.color} ${auto.cantidadPuertas} ${auto.ceroKm}` )
const llavePropiedad = "marca"
console.log( auto[ llavePropiedad ] )

// array 

const numeros = [ 10, 2,3,1,23,1 ]
const alumnos = [ 
    {
        nombre : 'Matias',
        apellido : 'Tejerina',
        edad : 30
    },
    {
        nombre : 'Joaquin',
        apellido : 'Meneses',
        edad : 25 
    },
    {
        nombre : 'Nicolas'
    },
    {
        nombre : 'Cristian'
    },
 ]

console.log( `Hola soy ${alumnos[0].nombre} y tengo ${alumnos[0].edad} años` )
console.log( `Hola soy ${alumnos[1].nombre} y tengo ${alumnos[1].edad} años` )
console.log( `Hola soy ${alumnos[2].nombre} y tengo ${alumnos[2].edad} años` )
console.log( `Hola soy ${alumnos[3].nombre} y tengo ${alumnos[3].edad} años` )


// operadores aritmeticos
// + - * / % **

console.log('Suma: ', 3 + 3)
console.log('Concatenar string:', 'Nicolas' + " " + 'Cirulli')
console.log('Resta: ',3 - 1)
console.log('Multiplicación: ',2 * 3)
console.log('Division',10 / 2 )
console.log('Exponente: ', 2 ** 4)
console.log('Resto de la division: ', 10 % 3)

// operadores de comparación: > < >= <= == === != !== ( todos devuelven un booleano )

console.log('3 > 2: ', 3 > 2 )
console.log( '3 < 2: ', 3 < 2 )
console.log( '3 >= 3: ', 3 >= 3 )
console.log( '3 <= 3: ', 3 <= 3 )
console.log( '2 == "2" : ', 2 == "2" )
console.log( '2 === "2" : ', 2 === "2" )
console.log( '10 != "10" : ', 10 != "10" )
console.log( '10 !== "10" : ', 10 !== "10" )


const objeto1 = {  nombre: 'nicolas'   }
const objeto2 = {}
const objeto3 = objeto1

console.log('objeto1',  objeto1 )

objeto3.nombre = 'Catriel'

console.log('objeto1',  objeto1 )

console.log('objeto3',  objeto3 )

console.log( {nombre: 'nicolas'} == {nombre: 'nicolas'} )
console.log( objeto1 == objeto3 )

let templateLiterals = `Hola soy ${objeto1.nombre} y tengo ${edad} 

años`






















