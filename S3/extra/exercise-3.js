let myDiv = document.querySelector('div')

let listaDePaises = document.createElement('ul')

myDiv.appendChild(listaDePaises)

let cocheUno = document.createElement('li')

let cocheDos = document.createElement('li')

let cocheTres = document.createElement('li')

let cocheCuatro = document.createElement('li')

cocheUno.innerHTML = 'Mazda 6'

cocheDos.innerHTML = 'Ford fiesta'

cocheTres.innerHTML = 'Audi A4'

cocheCuatro.innerHTML = 'Toyota Corola'

listaDePaises.appendChild(cocheUno)

listaDePaises.appendChild(cocheDos)

listaDePaises.appendChild(cocheTres)

listaDePaises.appendChild(cocheCuatro)

