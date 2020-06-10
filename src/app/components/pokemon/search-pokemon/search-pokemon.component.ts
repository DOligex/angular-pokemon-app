import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../../../shared/class/pokemon';
import { PokemonsService } from '../../../shared/services/pokemons.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
      private pokemonsService: PokemonsService,
      private router: Router) { }

  search(term: string): void {
        this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonsService.searchPokemons(term)),
  );
  }

  gotoDetail(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
}

}
