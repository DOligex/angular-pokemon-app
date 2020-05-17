import { POKEMONS } from './../../../shared/mock-pokemon';
import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../../shared/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  public pokemons: Pokemon[] = null;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    alert('Vous avez cliqué sur ' + pokemon.name);
  }
}
