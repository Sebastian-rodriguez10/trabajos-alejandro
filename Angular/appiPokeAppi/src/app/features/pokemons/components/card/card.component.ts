import { Component, Input } from '@angular/core';

import { PokemonModel } from '../../model/pokemon-model';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  pokemon!: PokemonModel;

}