const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
const peliculasPequeñas=[];
const peliculasMedianas=[];
const peliculasGrandes=[];
for (let index = 0; index < movies.length; index++) {
    const pelicula = movies[index];

    if(pelicula.durationInMinutes < 100){
        peliculasPequeñas.push(pelicula)
    }

    if(pelicula.durationInMinutes >= 100 && pelicula.durationInMinutes < 200){
        peliculasMedianas.push(pelicula)
    }

    if(pelicula.durationInMinutes > 200){
        peliculasGrandes.push(pelicula)
    }
} 

console.log(peliculasPequeñas)
console.log(peliculasMedianas)
console.log(peliculasGrandes)