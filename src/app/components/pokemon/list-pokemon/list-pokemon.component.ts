import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../../shared/class/pokemon';
import { PokemonsService } from '../../../shared/services/pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
    ) { }

    ngOnInit(): void {
      this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon): void {
      console.log('Vous avez selectionné ' + pokemon.name);
      const link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
    }
  }
