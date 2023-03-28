const nico = {
    nombre : 'Nico',
    apellido : 'Cirulli',
    altura: 174,
    tecnologias: [ 'HTML', 'CSS', 'JAVASCRIPT', 'VUE' ],
    mentor: true,
}
const lucre = {
    nombre : 'Lucre',
    apellido : 'Gillone',
    altura: 160,
    tecnologias: ['hola'],
    propiedadLucre: true,
    edad:27
}

// modificar una propiedad

nico.nombre = 'Nicolás'

// agregar una propiedad

nico.edad = 28

// eliminar una propiedad

/* delete nico.edad */

const objetoDos = nico

objetoDos.nombre = 'Catriel'

const mentores = [ nico,lucre ]

nico.mascota = 'Kugi'

mentores[0].nombre = 'Nicolas Catriel'

// metodos de Object
// Object.assign() copia las propiedades de un objeto a otro

const metodos = {
    saludar:function(){
        console.log(`hola soy ${this.nombre} ${this.apellido}`)
    },
    mostrarEdad(){
        console.log(`Mi edad es ${this.edad}`)
    }
}

Object.assign( nico, metodos )
Object.assign( lucre, metodos )

nico.saludar()

lucre.mostrarEdad()

const copiaNico = Object.assign( {} , nico )

console.log( copiaNico == nico )


// Object.keys() devuelve un array con las llaves de un objeto
let fede = {
    nombre:'Federico',
    apellido:'Rouyere',
    ciudad : 'Mendoza'
}
console.log( Object.keys( fede ) )

// Object.values() devuelve un array con los valores de un objeto
console.log(  Object.values( nico )  )

// Object.entries() devuelve un array donde todos sus elementos son arrays con las llaves y valores de un objeto
console.log(  Object.entries( fede )  )


// Object.freeze() congela un objeto, no se puede modificar

Object.freeze( nico )

nico.nombre = 'Nuevo nombre'

console.log( nico )

// Object.hasOwn() devuelve true si el objeto tiene la llave

console.log( Object.hasOwn( nico, 'edad' ) )

