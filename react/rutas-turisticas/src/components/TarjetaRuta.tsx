import type { Ruta } from "../datos/rutas";

interface TarjetaRutaProps {
    ruta: Ruta;
}

const textoDificultad = {
    baja: "Dificultad baja",
    media: "Dificultad media",
    alta: "Dificultad alta",
    todas: "Todas las dificultades"
}

export function TarjetaRuta ({ruta}: TarjetaRutaProps) {
    const precio = ruta.precio.toLocaleString("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0})

    return (
        <article>
            <h3>{ruta.nombre}</h3>
            <p>{ruta.municipio} - {ruta.duracionHoras} horas - {precio}</p>
            <p>{textoDificultad[ruta.dificultad]}</p>

            <p>{ruta.duracionHoras < 5 ? "Ruta corta" : "Jornada completa"}</p>

            {ruta.incluyeTransporte && <strong>Incluye trasporte</strong>}

             <div>
                <input type="number" aria-label="Personas" />
             </div>
        </article>
    );
}