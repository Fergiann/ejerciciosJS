const getApi = () => {
    fetch('https://api.nationalize.io?name=')
    
    .then((response) => response.json())
    .then((resJson) => consultarApi(resJson))
}

getApi()

const consultarApi = () => {
    const input$$ = document.querySelector('input')
    const button$$ = document. querySelector('button')

    button$$.addEventListener('click', () =>{
        console.log(getApi(input$$.value))
    })
}





