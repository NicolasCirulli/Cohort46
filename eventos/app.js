const $ = selector => document.querySelector( selector )


const $contenedor = $('#contenedor-js')
const $lista = $('#numeros')
/* const fn = (e) => {
    if(  e.target.classList.contains('cuadrado') ){
        e.target.classList.toggle( 'circulo' )
    }
}
$contenedor.addEventListener( 'click' , (e) => {
    fn(e)
}) */

const numeros = [1,2,3,4,5,6,7,8,9,10]

const render = ( lista, elemento ) => {
    elemento.innerHTML = lista.reduce( (acc, act) => acc + `<li> ${act} </li>`, '' )
}

const filtroNumeros = ( listaCompleta ) => {
    let value = $('input[type="radio"]:checked').value
    switch( value ){
        case '1':
            return listaCompleta
        case '2':
            return listaCompleta.filter( numero => numero % 2 === 0 )
        case '3':
            return listaCompleta.filter( numero => numero % 2 !== 0 )
        default:
            return []
    }
}

render( numeros, $lista )

$contenedor.addEventListener( 'change', () => {
    const listaFiltrada = filtroNumeros( numeros )
    render( listaFiltrada , $lista )
})
