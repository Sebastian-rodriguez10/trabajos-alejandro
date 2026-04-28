type State = "pendiente" | "enProgreso" | "finalizado";
type Tareas = {
    id: number;
    descripcion: string;
    estado: State;
}

function listar(tarea: Tareas[]): Tareas[] {
    return tarea.filter(t => t.estado !== "finalizado");
}