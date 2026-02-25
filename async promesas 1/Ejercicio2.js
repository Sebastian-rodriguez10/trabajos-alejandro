const usuarios = [
    { id: 1, nombre: "carlos" },
    { id: 2, nombre: "juan" },
    { id: 3, nombre: "dana" },
    { id: 4, nombre: "sebastian" }

];

const tareas = [
    { usuarioId: 1, descripcion: "Revisar correo" },
    { usuarioId: 1, descripcion: "Actualizar perfil" },
    { usuarioId: 2, descripcion: "Hacer informe" },
    { usuarioId: 3, descripcion: "Revisar pedidos" }
];

function getuser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usuarios.find((user) => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject("Usuario no encontrado");
            }


        }, 1500);
    })
}

async function getTareas(Usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tar = tareas.filter((taks) => taks.usuarioId === Usuario.id);
            if (tar) {
                resolve(tar);
            } else {
                reject("El usuario no tiene tareas");
            }
        }, 1000);
    })


}

async function main() {
    try {
        const usuario = await getuser(1);
        const tareitas = await getTareas(usuario);
        console.log(usuario);
        console.log(tareitas);
    } catch (error) {
        console.log(error)
    }
}

main();