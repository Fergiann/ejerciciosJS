let myInput = document.querySelector('input')

myInput.addEventListener('focus', (e) => {
    console.log(e)
    console.log(e.target)
})

