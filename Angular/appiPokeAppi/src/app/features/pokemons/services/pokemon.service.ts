import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, map, forkJoin } from 'rxjs';

import { PokemonModel } from '../model/pokemon-model';
import { pokemonListResponse } from '../model/pokemon-list-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private api = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(offset: number = 0): Observable<PokemonModel[]> {

    return this.http
      .get<pokemonListResponse>(
        `${this.api}?limit=20&offset=${offset}`
      )
      .pipe(

        switchMap(response => {

          const requests = response.results.map(
            pokemon => this.http.get<PokemonModel>(pokemon.url)
          );

          return forkJoin(requests);
        }),


      );
  }
}