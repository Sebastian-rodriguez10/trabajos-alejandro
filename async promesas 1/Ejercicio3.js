const cuentas = [
    { gmail: "carlos@gmail.com", contraseña: "1" },
    { gmail: "juan@gmail.com", contraseña: "12" },
    { gmail: "dana@gmail.com", contraseña: "123" },
    { gmail: "sebas@gmail.com", contraseña: "1234" }
];

async function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = cuentas.find((cu) => cu.gmail === email && cu.contraseña === password);
            if (user) {
                resolve(user);
            }else{
                 reject("Credenciales incorrectas");
            } 

        }, 2000);
    })
}

async function main() {
    try {
        const iniciarSecion = await login("sebas@gmail.com", "1234");
        console.log(iniciarSecion);
        console.log("Inicio de sesion exitoso");
    } catch (error) {
        console.log(error);
    }
}

main();