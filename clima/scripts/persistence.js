export function guardarLocal(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}

export function obtenerLocal(clave) {
    const data = localStorage.getItem(clave);
    return data ? JSON.parse(data) : null;
}