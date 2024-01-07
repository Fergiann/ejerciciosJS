const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

let ciudadesVisitadas = cities.map((ciudad) => {
    if(ciudad.isVisited == true){
        return ciudad.name + ' (Visitado)'
    } else {
        return ciudad.name
    }
})

console.log(ciudadesVisitadas)