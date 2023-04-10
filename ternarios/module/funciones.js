export function sumar( a, b, c ){
    return a + b + c
}

export function saludarPorConsola( objeto ){
    const { nombre, edad, mascota:{nombreMascota} } = objeto
    console.log( `Hola ${nombre} y tengo ${edad}, 
    tengo una mascota que se llame ${nombreMascota}` )
}