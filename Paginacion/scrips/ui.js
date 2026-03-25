import { getState } from "./state.js";

export function addPrevPageBtnEvent(action) {
    const btn = document.getElementById("atras");
    btn.addEventListener("click", async () => {
        await action();
        render();
    });
}

export function addNextPageBtnEvent(action) {
    const btn = document.getElementById("adelante");
    btn.addEventListener("click", async () => {
        await action();
        render();
    });
}

export function addFirstPageBtnEvent(action) {
    const btn = document.getElementById("primera");
    btn.addEventListener("click", async () => {
        await action();
        render();
    });
}

export function addLastPageBtnEvent(action) {
    const btn = document.getElementById("ultima");
    btn.addEventListener("click", async () => {
        await action();
        render();
    });
}

function getCard(character) {
    return `
    <div class="card">
        <img src="${character.image}" width="120">
        <h3>${character.name}</h3>
        <p>${character.race}</p>
    </div>
    `;
}

export function render() {
    const container = document.getElementById("tarjetas");
    container.innerHTML = "";

    const characters = getState("characters");
    const page = getState("page");
    const totalPages = getState("totalPages");

    characters.forEach((c) => {
        container.innerHTML += getCard(c);
    });

    container.innerHTML += `<p>Página ${page} de ${totalPages}</p>`;
}
