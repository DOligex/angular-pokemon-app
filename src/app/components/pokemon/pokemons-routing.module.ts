import { AuthGuard } from './../../core/auth.guard';
import { EditPokemonComponent } from './edit-pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class PokemonRoutingModule { }

