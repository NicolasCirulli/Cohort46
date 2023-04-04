// recuperar la refencia al ul con getElementById
/* 
    const listaMentores = document.getElementById('listaMentores') 
*/
// recuperar la referencia al ul con querySelector
const listaMentoresId = document.querySelector('#listaMentores')
const listaMentoresClases = document.querySelectorAll('.lista-mentores')
const listaMentoresEtiqueta = document.querySelectorAll('ul')

const mentores = [ 'Nicolas', 'Fede', 'Lucre', 'Flor', 'Cami', 'Kevin', 'Guille' ]

let template = ''

for (const mentor of mentores) {
    template += `<li class="text-primary">${mentor}</li>`
}

listaMentoresClases[0].innerHTML = template 





