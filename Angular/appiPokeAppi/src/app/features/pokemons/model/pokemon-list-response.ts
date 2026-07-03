import { PokemonItem } from "./pokemon-item";

export interface pokemonListResponse {
    count: number;
    next: string;
    previous: string | null;
    results: PokemonItem[];
}
