function obtenerNumero (numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero);
        }, 2000);
    })
}

function multiplicarDos(numero1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero1 > 0) {
                const multiplicar = numero1*2;
                resolve("el resultado es: " + multiplicar);
            }else{
                reject("erroooorrr");
            }
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
