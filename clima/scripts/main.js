import { agregarEventoBoton, agregarEventoBusqueda, cargarInicial } from "./ui.js";
import { obtenerClima, filtrarClimas } from "./service.js";

function iniciar() {
    cargarInicial();

    agregarEventoBoton(obtenerClima);
    agregarEventoBusqueda(filtrarClimas);
}

iniciar();