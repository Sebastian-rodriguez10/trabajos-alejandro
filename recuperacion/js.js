function agregar() {
    const titulo = document.getElementById("titulo");
    const divTarjetas = document.getElementById("contenedor");

    if (titulo.value === "") {
        alert("No puede añadir tareas con el campo vacio");
        return;
    }

    const titulo1 = document.createElement("h3");
    titulo1.textContent = titulo.value;

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";

    btnCompletar.onclick = function(){
        tarjeta.classList.toggle("cambio");
        btnCompletar.disabled = true;
        actualizarContador();
    }

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.onclick = function(){
        tarjeta.remove();
        actualizarContador();
    }

    tarjeta.appendChild(titulo1);
    tarjeta.appendChild(btnCompletar);
    tarjeta.appendChild(btnEliminar);

    divTarjetas.appendChild(tarjeta);

    titulo.value = "";

    actualizarContador();
}

function actualizarContador(){

    const total = document.querySelectorAll(".tarjeta").length;
    const completadas = document.querySelectorAll(".tarjeta.cambio").length;
    const pendientes = total - completadas;

    document.getElementById("total").textContent = total;
    document.getElementById("completadas").textContent = completadas;
    document.getElementById("pendientes").textContent = pendientes;

}