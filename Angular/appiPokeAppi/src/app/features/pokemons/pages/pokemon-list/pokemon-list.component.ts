import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonModel } from '../../model/pokemon-model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  standalone: false,
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonModel[] = [];

  page = 0;
  limit = 20;

  loading = false;
  error = false;

  constructor(private pokemonService: PokemonService) {}

  loadPokemons(): void {
    this.loading = true;

    this.pokemonService.getPokemons(this.page * this.limit).subscribe({
      next: (data) => {
        this.pokemons = data;
        this.loading = false;
      },

      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  nextPage(): void {
    this.page++;
    this.loadPokemons();
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadPokemons();
    }
  }

  ngOnInit(): void {
    this.loadPokemons();
  }
}
