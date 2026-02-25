async function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random();
            if (num > 0.5) {
               const usuarios = [
                    { id: 1, nombre: "carlos" },
                    { id: 2, nombre: "juan" },
                    { id: 3, nombre: "dana" },
                    {id: 4, nombre: "sebastian"}
                    
                ];
                resolve(usuarios); 
            }else{
                reject("Ha ocurrido un error");
            }
                
            
                
            
        }, 2000);
    })
        
}

async function main() {
    try {
        const usuarios = await getUsers();
        console.log(usuarios);
    } catch (error) {
        console.log(error)
    }
}

main();