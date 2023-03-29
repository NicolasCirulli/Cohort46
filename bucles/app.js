const mentores = [
    {
        nombre: 'Lucrecia',
        edad : 27,
        apellido: 'Gillone',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Florencia',
        edad : 22,
        apellido: 'Puñales',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Vue']
    },
    {
        nombre: 'Camila',
        edad : 28,
        apellido: 'Domato',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Bootstrap']
    },
    {
        nombre: 'Kevin',
        edad : 30,
        apellido: 'Darnet',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'JavaScript']
    },
    {
        nombre: 'Nicolas',
        edad : 28,
        apellido: 'Cirulli',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Guillermo',
        edad : 26,
        apellido: 'Bonutto',
        rol: 'Mentor/a',
        especialidad : ['Java', 'Vue']
    },
]
const alumnos = [ 'Joaquin', 'Carlos', 'Claudio', 'Cristian', 'Daniela' ]
// for


/* let indiceKevin = -1
for ( let iterador = 0; iterador < mentores.length ; iterador++ ) {
    console.log('iterador:', iterador)
    if( mentores[ iterador ].nombre == 'Kevin' ){
        indiceKevin = iterador
        break
    }
}

console.log('después del bucle')
if( indiceKevin == -1){
    console.log( 'Kevin no esta en el array')
}else{
    console.log( 'El indice de kevin es:', indiceKevin )
}

console.log( mentores )
console.log('sigue con el resto del script') */


// for of 
/* 
    const nombresMentores = []
    console.log( mentores )
    for( let mentor of mentores ){
        nombresMentores.push( mentor.edad )
    }
    console.log( nombresMentores )
*/

// for in
/* 
let objeto = {
    nombre : 'Nicolas',
    edad: 28,
    mascota: 'Kugi',
    llave: 'El value de key llave'
}

    for( let key in nicolas ){
        console.log( nicolas[ key ] )
    } 
    let key = 'mascota'
    console.log( objeto[key] )
*/


// while
/* 
let nombresIngresados = []
let nombre = true

while ( nombre ) {
    console.log('dentro del while')
    nombre = prompt('Ingrese un nombre')
    if( nombre ){
        nombresIngresados.push( nombre )
    }

}

console.log( nombresIngresados )  
*/


// do while
let nombresIngresados = []
let nombre
do {
    console.log('dentro del while')
    nombre = prompt('Ingrese un nombre')
    if( nombre ){
        nombresIngresados.push( nombre )
    }
} while ( nombre );

console.log( nombresIngresados )  