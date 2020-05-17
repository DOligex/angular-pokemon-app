import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../../shared/class/pokemon';
import { POKEMONS } from '../../../../shared/mock-pokemon';

@Component({
  selector: 'app-section-from-one',
  templateUrl: './section-from-one.component.html',
  styleUrls: ['./section-from-one.component.scss']
})
export class SectionFromOneComponent implements OnInit {
  public pokemons: Pokemon[] = null;
  public title = 'Liste des pokémons';
  public value = '';
  values = '';
  valeurs = '';

  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    alert('Vous avez cliqué sur ' + pokemon.name);
  }
  onClick() {
    console.log('click !');
  }
  onKey(value: string) {
    this.value = 'Bonjour ' + value ;
  }
}
