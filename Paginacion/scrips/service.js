import { getState, setState } from "./state.js";

const URL = "https://dragonball-api.com/api/characters";

export async function loadCharacters() {

    const limit = getState("limit");
    const page = getState("page");

    try {
        const res = await fetch(`${URL}?page=${page}&limit=${limit}`);
        const data = await res.json();

        setState("characters", data.items);
        setState("totalPages", data.meta.totalPages);
        setState("links", data.links);

    } catch (error) {
        console.error("Error:", error);
    }
}

export async function goNextPage() {
    let page = getState("page");
    const totalPages = getState("totalPages");

    page = page < totalPages ? page + 1 : totalPages;

    setState("page", page);
    await loadCharacters();
}

export async function goPrevPage() {
    let page = getState("page");

    page = page > 1 ? page - 1 : 1;

    setState("page", page);
    await loadCharacters();
}

export async function goFirstPage() {
    setState("page", 1);
    await loadCharacters();
}

export async function goLastPage() {
    const totalPages = getState("totalPages");

    setState("page", totalPages);
    await loadCharacters();
}