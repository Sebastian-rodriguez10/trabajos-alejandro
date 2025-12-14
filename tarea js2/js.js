function agregar(){
    const texto = document.getElementById("texto").value;
    const opcion = document.getElementById("estado").value;

    if (texto === ""){
        alert("tiene que escribir una tarea")
        return;
    }

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.textContent = texto + " - " + opcion;

      if (opcion === "Pendiente") {
        tarjeta.style.backgroundColor = "#ff4d4d";
    } else if (opcion === "En Proceso") {
        tarjeta.style.backgroundColor = "#ffd633";
    } else if (opcion === "Finalizado") {
        tarjeta.style.backgroundColor = "#4dff4d";
    }

    document.querySelector(".contenedorP").appendChild(tarjeta);

    document.getElementById("texto").value = "";
}