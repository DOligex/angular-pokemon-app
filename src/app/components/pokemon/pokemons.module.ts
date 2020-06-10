import { AuthService } from './../../shared/services/auth.service';
import { AuthGuard } from './../../core/auth.guard';
import { LoaderComponent } from './loader.component';

import { EditPokemonComponent } from './edit-pokemon.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { ListPokemonComponent } from './../pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './../pokemon/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../../shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../../shared/pipes/pokemon-type-color.pipe';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { PokemonFormComponent } from '../forms/pokemon-form/pokemon-form.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
  ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    PokemonFormComponent,
    LoaderComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,

  ],
  providers: [
    PokemonsService,
    AuthGuard,
    AuthService
  ]
})
export class PokemonsModule { }
