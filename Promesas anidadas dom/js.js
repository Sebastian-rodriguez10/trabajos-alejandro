
const users = [
    { id: 1, name: "Laura Gómez", email: "laura@email.com", city: "Medellín" },
    { id: 2, name: "Carlos Ruiz", email: "carlos@email.com", city: "Bogotá" },
    { id: 3, name: "Sofía Martínez", email: "sofia@email.com", city: "Cali" },
    { id: 4, name: "Andrés López", email: "andres@email.com", city: "Barranquilla" },
    { id: 5, name: "Valentina Torres", email: "valentina@email.com ", city: "Cartagena" }
];
const products = [
    { id: 101, userId: 1, name: "Laptop", price: 3500, status: "Enviado" },
    { id: 102, userId: 1, name: "Mouse Gamer", price: 150, status: "Entregado" },
    { id: 103, userId: 2, name: "Teclado Mecánico", price: 280, status: "En proceso" },
    { id: 104, userId: 3, name: "Monitor 24 pulgadas", price: 900, status: "Entregado" },
    { id: 105, userId: 3, name: "Base Refrigerante", price: 120, status: "Enviado" },
    { id: 106, userId: 4, name: "Audífonos Bluetooth", price: 200, status: "Cancelado" }
];
const idinput = document.getElementById("input");
const nombreUsuario = document.getElementById("nombreUsuario");
const correoUsuario = document.getElementById("correoUsuario");
const ciudadUsuario = document.getElementById("ciudadUsuario");
const cargando = document.getElementById("car");
const boton = document.getElementById("boton");
const nombreProducto1 = document.getElementById("nombreP1");
const precio1 = document.getElementById("precioP1");
const estado1 = document.getElementById("estadoP1");
const nombreProducto2 = document.getElementById("nombreP2");
const precio2 = document.getElementById("precioP2");
const estado2 = document.getElementById("estadoP2");
const nombreProducto3 = document.getElementById("nombreP3");
const precio3 = document.getElementById("precioP3");
const estado3 = document.getElementById("estadoP3");
const conteProductos = document.getElementById("empanada");



function buscar(id) {
    return new Promise((resolve, reject) => {
        cargando.classList.remove("hide");
        boton.disabled = true;

        setTimeout(() => {
            const usuario = users.find(user => user.id === id);
            if (usuario === undefined) {
                reject(alert("Usuario no encontadro"));
            } else {
                resolve(usuario);
            }
        }, 2000);
    })
}

function productos(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productoUsuario = products.filter(pro => pro.userId === user.id)
            if (productoUsuario) {
                resolve(productoUsuario);

            }
        }, 2000);
    });
}
function limpiar1() {
    nombreProducto1.textContent = "";
    precio1.textContent = "";
    estado1.textContent = "";
}
function limpiar2() {
    nombreProducto2.textContent = "";
    precio2.textContent = "";
    estado2.textContent = "";
}
function limpiar3() {
    nombreProducto3.textContent = "";
    precio3.textContent = "";
    estado3.textContent = "";
}
function procesos() {
    const id = parseInt(document.getElementById("input").value);
    buscar(id).then((a) => {
        nombreUsuario.textContent = a.name;
        correoUsuario.textContent = a.email;
        ciudadUsuario.textContent = a.city;
        limpiar1();
        limpiar2();
        limpiar3();
        return productos(a);
    }).then((pro) => {
        if (pro.length === 0) {
            alert("No tiene ningun producto registrado")
        } 
        if (pro.length != 2) {
            nombreProducto1.textContent = pro[0].name;
            precio1.textContent = pro[0].price;
            estado1.textContent = pro[0].status;

            nombreProducto3.textContent = pro[0].name;
            precio3.textContent = pro[0].price;
            estado3.textContent = pro[0].status;
        }else{
            nombreProducto1.textContent = pro[0].name;
            precio1.textContent = pro[0].price;
            estado1.textContent = pro[0].status;

            nombreProducto2.textContent = pro[1].name;
            precio2.textContent = pro[1].price;
            estado2.textContent = pro[1].status;

            nombreProducto3.textContent = pro[1].name;
            precio3.textContent = pro[1].price;
            estado3.textContent = pro[1].status;
        }
            
            

            

        
        conteProductos.classList.remove("hide");



    }).finally(() => {
        boton.disabled = false;
        cargando.classList.add("hide");
    })
}