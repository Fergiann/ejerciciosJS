const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const nuevaLista = users.map((nombre) => {
    if(nombre.name.includes("A")){
        return nombre.name.toUpperCase()
    } else {
        return nombre.name
    }
}

)

console.log(nuevaLista)