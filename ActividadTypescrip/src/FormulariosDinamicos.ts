type Type = "email" | "texto" | "numero"

type CampoFormulario = {
    nombre: string;
    tipo: Type;
    valor: string | number;
}

function validarCampos(campos: CampoFormulario[]): string[] {
    const camposInvalidos: string[] = []
    campos.forEach(c => {
        if (c.tipo === "email" && !c.valor.toString().includes("@")) {
            camposInvalidos.push(c.nombre)
        } else if (c.tipo === "numero" && typeof c.valor !== "number") {
            camposInvalidos.push(c.nombre)
        } else {
            if (typeof c.valor !== "string") {
                camposInvalidos.push(c.nombre)
            }
        }
    })

    return camposInvalidos

}