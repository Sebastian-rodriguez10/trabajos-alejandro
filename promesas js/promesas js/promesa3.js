function obtenerEdad (edad) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(edad);
        }, 2000);
    })
}
function verificarEdad(veri) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (veri >= 18) {
            resolve("usted es mayor de edad wi :3");
        }else{
            reject("Eres menor de edad que triste");
        }
    }, 2000);
    })
}

function main() {
    obtenerEdad(17).then((edad) => {
        return verificarEdad(edad);
    }).then((verificar) => {
        console.log(verificar);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("ya se hizo su verificacion de edad");
    })
}

main();