import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [PokemonListComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonListComponent]
})
export class PokemonsModule { }
