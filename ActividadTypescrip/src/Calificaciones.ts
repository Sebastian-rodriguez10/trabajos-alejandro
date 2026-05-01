type Calificacion = {
    idEstudiante: number;
    materia: string;
    categoria: "tareas" | "cuices" | "examen";
    notaTotal: number;
}

function promedioFinal(Calification: Calificacion) {
    let notaTotal = 0;
    Calification.notaTotal  = notaTotal;
    
    if (Calification.categoria === "tareas") {
        notaTotal /= 5;
        console.log("Su nota final de las tareas es: " + notaTotal);
    }else if (Calification.categoria === "cuices") {
        notaTotal /= 3
        console.log("Su nota en los cuices es: " +  notaTotal);
    }else{
        notaTotal /= 2;
        console.log("Su nota final en examenes es: " + notaTotal)
    }

}