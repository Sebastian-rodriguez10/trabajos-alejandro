//ejercicio 1

console.log("============= EJERCICIO 1 ============");
function numeros (a,b, callback){
    const resultado = callback(a,b)
    console.log("el resultado es: " + resultado)
}
function sumar(a,b) {
    return a + b;
}
function restar(a,b) {
    return a - b;
}
function division(a,b) {
    return a / b;
}
function multiplicar(a,b) {
    return a * b;
}
numeros(10,5, sumar);
numeros(10,5, restar);
numeros(10,5, division);
numeros(10,5, multiplicar);


//ejercicio 2

console.log("============= EJERCICIO 2 ============");
const nombres = ["ana", "luis", "sofia", "carlos"]
console.log("cantidad de nombres que estan almacenados son: " + nombres.length);
nombres.forEach((nombre) => console.log(nombre));


//ejercicio 3

console.log("============= EJERCICIO 3 ============");
const precios = [100,200,300];
precios.forEach((precio) => console.log("normal: " + precio));
const iva = precios.map((precio) => precio = precio + (precio * 0.19));
console.log(iva);


//ejercicio 4

console.log("============= EJERCICIO 4 ============");
const edades = [12, 18, 20, 15, 30, 8];
edades.forEach((edad) => console.log(edad));
const mayoresDeEdad = edades.filter(edad => edad >= 18); 
console.log(mayoresDeEdad);


//ejercicio 5

console.log("============= EJERCICIO 5 ============");
const productos = [
{ id: 1, nombre: "mouse", precio: 50000 },
{ id: 2, nombre: "teclado", precio: 150000 },
{ id: 3, nombre: "monitor", precio: 900000 }
];

const filtro = productos.find(producto => producto.nombre == "teclado" || producto.precio >= 100000);
console.log(filtro);

const filtro2 = productos.find(producto => producto.precio > 100000);
console.log(filtro2);


//ejercicio final
console.log("============= EJERCICIO FINAL ============");

const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Luis", nota: 3.2 },
    { nombre: "Carlos", nota: 2.8 },
    { nombre: "Sofía", nota: 4.8 },
    { nombre: "María", nota: 3.9 }
];

console.log("=======Mostrando todos los datos========");
estudiantes.forEach(estudiante => console.log(estudiante));

console.log("=========Mostrando solo los nombres===========")
const estudiantesNombre = estudiantes.map(nombre => nombre.nombre)
console.log(estudiantesNombre);

console.log("======Mostrando solo los estudiantes que aprobaron=====")
const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 3.0);
console.log(aprobados);

console.log("======Mostrando el primer estudiante que saco 4.5 o mas======")
const primerSuperior = estudiantes.find(estudiante => estudiante.nota >= 4.5);
console.log(primerSuperior);








