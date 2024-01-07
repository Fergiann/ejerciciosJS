let cuerpo = document.querySelector('body')

let listaDePaises = document.createElement('ul')

cuerpo.appendChild(listaDePaises)

let paisUno = document.createElement('li')

let paisDos = document.createElement('li')

let paisTres = document.createElement('li')

let paisCuatro = document.createElement('li')

let paisCinco = document.createElement('li')

paisUno.innerHTML = 'Japon'

paisDos.innerHTML = 'Nicaragua'

paisTres.innerHTML = 'Suiza'

paisCuatro.innerHTML = 'Australia'

paisCinco.innerHTML = 'Venezuela'

listaDePaises.appendChild(paisUno)

listaDePaises.appendChild(paisDos)

listaDePaises.appendChild(paisTres)

listaDePaises.appendChild(paisCuatro)

listaDePaises.appendChild(paisCinco)


