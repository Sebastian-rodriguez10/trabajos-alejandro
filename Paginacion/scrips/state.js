const state = {
    loading: false,
    characters: [],
    limit: 5,
    page: 1,
    totalPages: 1,
    links: {}
};

export function getState(key) {
    return state[key];
}

export function setState(key, value) {
    state[key] = value;
}