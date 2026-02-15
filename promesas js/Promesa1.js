function saludar (nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (nombre === "sebastian") {
            resolve("hola sebastian, Bienvenido");
        }else{
            reject("no te conozco ome");
        }
    }, 2000);
    })
    
}
saludar("sebastian")
.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("termino la validacion del nombre");
})

