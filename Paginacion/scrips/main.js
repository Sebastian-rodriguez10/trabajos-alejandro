import {loadCharacters, goPrevPage, goNextPage, goFirstPage, goLastPage} from "./service.js";
import {render, addNextPageBtnEvent, addPrevPageBtnEvent, addFirstPageBtnEvent, addLastPageBtnEvent} from "./ui.js";

async function startApp() {
    addPrevPageBtnEvent(goPrevPage);
    addNextPageBtnEvent(goNextPage);
    addFirstPageBtnEvent(goFirstPage);
    addLastPageBtnEvent(goLastPage);

    await loadCharacters();
    render();
}

startApp();
