const users = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
  },
  {
    id: 2,
    name: "María Gómez",
    email: "maria.gomez@example.com",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@example.com",
  },
  {
    id: 4,
    name: "Laura Martínez",
    email: "laura.martinez@example.com",
  },
  {
    id: 5,
    name: "Andrés López",
    email: "andres.lopez@example.com",
  },
];
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuarioEncontrado = users.find(user => user.id === id);

            if (usuarioEncontrado) {
                resolve(usuarioEncontrado);
                
            } else {
                reject("Usuario no encontrado");
            }

        }, 3000);
    });
}
function showSpinner() {
    return new Promise((resolve, reject) => {
        spin.classList.add("show");
        setTimeout(() => {
            spin.classList.add("hide");
            spin.classList.remove("show");
            if (usuarioEncontrado) {
                resolve("cargando");
            } else {
                reject("Usuario no encontrado");
            }
        }, 3500);
    });
}
const id = parseInt(document.getElementById("input").value);
buton.addEventListener("click", () => {
    showSpinner()
        .then((message) => {
            const result = document.getElementById("pan");
            result.textContent = message;
        })
        .catch((err) => alert(err));
});

buton.addEventListener("click", () => {buscarUsuario(id).then(() => {
    mostrarUsuario(id);
}).catch((b) => {
    console.log(b)
})
})

function mostrarUsuario(id) {
    
    const conte = document.getElementById("conte");
    const id1 = document.createElement("p");
    id1.textContent = "ID: " + usuario.id;

    const nombre = document.createElement("p");
    nombre.textContent = "Nombre: " + usuario.nombre;

    const correo = document.createElement("p");
    correo.textContent = "Correo: " + usuario.correo;

    conte.appendChild(id1);
    conte.appendChild(nombre);
    conte.appendChild(correo);
    
}
