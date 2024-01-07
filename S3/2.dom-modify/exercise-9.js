let parrafo = document.createElement('p')

let parrafo2= document.createElement('p')

parrafo2.innerHTML = 'voy dentro!'

parrafo.innerHTML = 'voy dentro!'

let divClases = document.querySelectorAll('.fn-insert-here')


divClases.forEach(element => {
    element.appendChild(parrafo); 

    element.appendChild(parrafo2)
  })



