let cuerpo = document.querySelector('body')

let myButton = document.createElement('button')

myButton.innerHTML = 'Soy un boton'

myButton.setAttribute('id', 'btnToClick')

cuerpo.appendChild(myButton)

let myButtonSel = document.querySelector('button')

myButtonSel.addEventListener('click', (e) => {
    console.log(e)
})


