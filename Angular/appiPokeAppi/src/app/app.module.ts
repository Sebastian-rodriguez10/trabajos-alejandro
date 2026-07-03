import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './features/pokemons/pages/pokemon-list/pokemon-list.component';
import { PokemonsModule } from './features/pokemons/pokemons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
