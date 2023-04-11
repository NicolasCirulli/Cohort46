// Javascript es un lenguaje de programacion de un solo hilo
console.log('Inicio')
// Codigo sincrono



function primeraFuncion() {
  segundaFuncion();
  console.log('primera función')

}
function segundaFuncion() {
  terceraFuncuion();
  console.log('segunda función');
}
function terceraFuncuion() {
    console.log("tercera función");
}

function saludar(){
    console.log('hola')
}
// codigo asincrono

// SetTimeout
/* setTimeout( saludar, 1000 ) */
/* setTimeout(()=>console.log('queue 2'), 1000);
setTimeout(()=>console.log('queue 3'), 0);
setTimeout(()=>console.log('queue 4'), 0); */
/* 
function primeraFuncionAsincrona() {
  setTimeout(saludar, 0);
  console.log('función asincrona')
}
primeraFuncionAsincrona() */

// Promesas
const nico = true
const workshop = new Promise(  (resolve, reject) => {
    
        if( nico ){
            resolve('Nico aparecio')
        }else{
            reject('Nico fingio demencia')
        }
     
})
function paraElThen( parametro ){
    console.log('Voy a ver el workshop ')
}
function paraElCatch( parametro ){
    console.log('Voy a pedir retro ')
}
function paraElFinally( ){
    console.log('A las 2 voy a comer ')
}
console.log(workshop)
workshop
    .then( paraElThen ) // con then manejo el resolve, cuando se resuelve la promesa bien
    .catch( paraElCatch ) // con catch manejo el reject, cuando se resuelve la promesa mal
    .finally( paraElFinally ) // el finally es opcional

console.log( 'fin' )

