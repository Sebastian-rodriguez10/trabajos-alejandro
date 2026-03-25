import { guardarLocal, obtenerLocal } from "./persistence.js";

export async function obtenerClima(ciudad) {

    const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=1&language=es`
    );

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
        throw new Error("Ciudad no encontrada");
    }

    const lat = geoData.results[0].latitude;
    const lon = geoData.results[0].longitude;

    const climaRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`
    );

    const data = await climaRes.json();

    const clima = {
        ciudad: ciudad,
        temperatura: data.current.temperature_2m,
        viento: data.current.wind_speed_10m,
        codigo: data.current.weather_code,
        hora: data.current.time
    };

    const lista = obtenerLocal("climas");
    lista.push(clima);
    guardarLocal("climas", lista);

    return lista;
}

export function filtrarClimas(valor) {
    const lista = obtenerLocal("climas");

    return lista.filter(c =>
        c.ciudad.toLowerCase().includes(valor)
    );
}