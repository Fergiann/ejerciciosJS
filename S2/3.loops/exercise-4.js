const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

/*for (const juguete of toys) {
    let index=0

    if(juguete.name.includes('gato')){
        toys.splice(index,1)
        
        console.log("soy lo elminado" + toys.splice(index,1))
     }
    

    
}

console.log(toys)*/



for (const juguete of toys) {
    if(juguete.name.includes('gato')){
        toys.splice(3, 2)
    }
    console.log(toys)
}
