const alumnos = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];


for (let index = 0; index < alumnos.length; index++) {
  const alumno = alumnos[index];

  if (
    (alumno.T1 && alumno.T2) ||
    (alumno.T1 && alumno.T3) ||
    (alumno.T2 == true && alumno.T3 == true)
  ) {
    alumno.isApproved = true;
  } else {
    alumno.isApproved = false;
  }
  console.log(alumno);
}
