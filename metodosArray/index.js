

// Funciones flecha
/* 
    function saludar(){
        console.log('Hola')
    }

    const saludarDos = function(){
        console.log('hola')
    }

    const saludarTres =  alumno => 'hola ' + alumno
    const saludoCarlos = saludarTres( 'Carlos' )
    console.log( saludoCarlos ) 
*/
// en vez de la palabra reservada function se usa la flecha "=>" después de los parentesis
// Ventajas de las funciones flecha
// Si tiene un solo parametro se pueden omitir los parentesis
// Si tiene una sola linea de codigo se pueden omitir las llaves y el return


// Donde no usar funciones flechas
// Cuando creamos metodos en un objeto
// Cuando necesitamos usar el this
// Cuando necesitamos cambiar el contexto de la funcion
// Cuando necesitamos usar arguments, call, bind, apply

/* 
    const nicolas = {
        nombre: 'Nicolas',
        apellido: 'Cirulli',

        saludar(){
            console.log(this)
            console.log(`Hola soy ${this.nombre} ${this.apellido}`)
        },
        // Funcion flecha, dentro de un objeto no se debe usar
        // el this en una funcion flecha siempre va a tomar el contexto de la funcion padre
        saludarFlecha: () => {
            console.log(this.nombre)
        }
    }
    nicolas.saludar()
    nicolas.saludarFlecha() 
*/

// Funciones de orden superior
// Las funciones de orden superior son funciones que reciben 
// como parametro otra funcion o devuelven una funcion
/* 

    const calculadora = function( numero1, numero2, operacion ){
        return operacion( numero1, numero2 )
    }
    function sumar( a,b ){
        return a + b
    }
    const restar = (a,b) => a - b 
    console.log( sumar )
    console.log( calculadora( 10, 20, sumar ) )
    console.log( calculadora( 20, 10, restar ) )
    console.log( calculadora( 10, 5, function(a,b){
        return a * b
    } ) )
    console.log( calculadora( 10, 2, (a,b) => a / b ) ) 
*/
const mentores = [
    {
        nombre: 'Florencia',
        edad : 22,
        apellido: 'Puñales',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Vue']
    },
    {
        nombre: 'Lucrecia',
        edad : 27,
        apellido: 'Gillone',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
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
        nombre: 'Federico',
        edad : 38,
        apellido: 'Rouyere',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'Java']
    },

    {
        nombre: 'Guillermo',
        edad : 26,
        apellido: 'Bonutto',
        rol: 'Mentor/a',
        especialidad : ['Java', 'Vue']
    },
]
console.log(mentores)
// Metodos Array

// 1. ForEach

// Recorre el array y ejecuta la funcion que le pasamos por cada elemento
// No tiene return, siempre devuelve undefined

/* 
    const resultadoForEach = mentores.forEach(  currentValue  => {
        console.log( currentValue )
    })

    console.log( 'resultado forEach', resultadoForEach )
*/

// 2. Map

// Recorre el array y ejecuta la funcion que le pasamos por cada elemento
// Devuelve un nuevo array con todos los return de las funciones que ejecuto
/* 
    const funcionParaElMap = mentor => `Hola soy ${mentor.nombre} ${mentor.apellido}`
    const resultadoMap = mentores.map( funcionParaElMap )
    console.log( resultadoMap ) 
*/

/* console.log( funcionParaElMap )
console.log( funcionParaElMap( mentores[0] ) ) */

// 3. Filter
// Recorre el array y ejecuta la funcion que le pasamos por cada elemento
// Devuelve un nuevo array con los elementos que la funcion devolvio true o un truthy 

/* 
    const resultadoFilter = mentores.filter( mentor => {
        return mentor.nombre.toLowerCase().includes( 'l' )
    } )
    console.log( resultadoFilter ) 
*/

// 4. Find
// Recorre el array y ejecuta la funcion que le pasamos por cada elemento
// Devuelve el primer elemento que la funcion devolvio true o un truthy

/* 
    const mentorDeReact = mentores.find(  mentor  => mentor.especialidad.includes( 'React' ))
    console.log( mentorDeReact ) 
*/

// 5. Some

// Recorre el array y ejecuta la funcion que le pasamos por cada elemento
// Devuelve true si al menos un elemento cumple con la condicion
/* 
const fnSome = mentor =>  mentor.especialidad.includes( 'React' )
const resultadoSome = mentores.some( fnSome )
console.log( resultadoSome ) 
*/
// 6. Every

// Recorre el array y ejecuta la funcion que le pasamos por cada elemento
// Devuelve true si todos los elementos cumplen con la condicion

/*  
    const fnEvery = mentor =>  mentor.edad > 25
    const resultadoEvery = mentores.every( fnEvery )
    console.log( resultadoEvery )  
*/

// 7. Sort
// Ordena el array segun la funcion que le pasamos y modifica array original

const copiaMentores = mentores.map( mentor => mentor )
const mentoresOrdenados = copiaMentores.map( mentor => mentor ).sort( (a,b) => {
    if( a.apellido < b.apellido ) {
        return 1
    }
    if( b.apellido < a.apellido ) {
        return -1
    }
    return 0
} )

const nombresMentores = mentores.map( mentor => mentor.nombre )
                                .sort( (a,b) => b.localeCompare(a) )
const edadesMentores  = mentores.map( mentor => mentor.edad )
                                .sort( (a,b) => b - a )
console.log( nombresMentores )
console.log( edadesMentores )

// 8. Reduce

// Parte de un array y termina en un valor
const fnReduce = ( returnIteracionAnterior, actual ) => {
    console.log( "Acumulador: ", returnIteracionAnterior )
    console.log( "Actual: ", actual )
    return returnIteracionAnterior + actual
}
const sumaEdadesMentores = edadesMentores.reduce( fnReduce, 0 )
console.log( sumaEdadesMentores )

const listaMentoresString = mentores.reduce( ( acumulador, actual ) =>{
    return acumulador + `<li>${actual.nombre} ${actual.apellido}</li>`
}, '' )

document.getElementById( 'lista' ).innerHTML = listaMentoresString

console.log(listaMentoresString)




