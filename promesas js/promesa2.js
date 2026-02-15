function obtenerNumero (numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero === 10) {
                resolve(numero);
            }else{
                reject("ese no es el numero correcto");
            }
        }, 2000);
    })
}

function multiplicarDos(numero1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            numero1*2;
            resolve("su numero es 20");
        }, 2000);
    })
}

function main (){
    obtenerNumero(10).then((numero) => {
        return multiplicarDos(numero);
    }).then((resultado) => {
        console.log(resultado);
    }).catch((err) =>{
        console.log(err);
    }).finally(() => {
        console.log("termino el proceso del numero");
    })
}

main();
