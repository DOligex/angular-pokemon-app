import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../shared/class/pokemon';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PokemonsService } from '../../../shared/services/pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.router.navigate(['/pokemon/list']);
  }

  goEdit(pokemon: Pokemon): void {
  const link = ['/pokemon/edit', pokemon.id];
  this.router.navigate(link);
  }

  delete(pokemon: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemon)
    .subscribe(_ => this.goBack());
  }
}
