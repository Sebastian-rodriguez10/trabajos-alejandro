export async function getUsers() {

    const respuesta = await fetch("https://dragonball-api.com/api/characters");

    if (!respuesta.ok) {
        throw new Error("Error en la petición");
    }

    const datos = await respuesta.json();

    const characters = datos.items.map((character) => {
        return {
            name: character.name,
            ki: character.ki,
            maxKi: character.maxKi,
            race: character.race
        }
    });

    return characters;
}