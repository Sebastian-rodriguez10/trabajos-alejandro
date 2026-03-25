import { obtenerLocal } from "./persistence.js";

const btn = document.getElementById("btnBuscar");
const input = document.getElementById("inputCiudad");
const contenedor = document.getElementById("contenedor");
const estado = document.getElementById("estado");

export function agregarEventoBoton(callback) {
    btn.addEventListener("click", async () => {
        estado.textContent = "Cargando...";
        contenedor.innerHTML = "";

        try {
            const ciudad = input.value.trim();

            if (!ciudad) {
                throw new Error("Escribe una ciudad");
            }

            const lista = await callback(ciudad);
            renderizar(lista);

            estado.textContent = `Se cargaron ${lista.length} ciudades`;

        } catch (error) {
            estado.textContent = error.message;
        }
    });
}

export function agregarEventoBusqueda(callback) {
    input.addEventListener("input", () => {
        const valor = input.value.toLowerCase();
        const filtrados = callback(valor);
        renderizar(filtrados);
    });
}

function renderizar(lista) {
    contenedor.innerHTML = "";

    lista.forEach(clima => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${clima.ciudad}</h3>
            <p>${clima.temperatura} °C</p>
            <p> ${clima.viento} km/h</p>
            <p> ${traducir(clima.codigo)}</p>
            <p> ${clima.hora}</p>
        `;

        contenedor.appendChild(card);
    });
}

function traducir(codigo) {
    const mapa = {
        0: "Soleado",
        1: "Parcialmente nublado",
        2: "Nublado",
        3: "Muy nublado",
        61: "Lluvia",
        95: "Tormenta"
    };
    return mapa[codigo];
}

export function cargarInicial() {
    const datos = obtenerLocal("climas");
    renderizar(datos);
}