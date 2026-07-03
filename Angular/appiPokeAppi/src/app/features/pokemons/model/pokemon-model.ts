export interface PokemonModel {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;

    sprites: {
        front_default: string;
    };
}
