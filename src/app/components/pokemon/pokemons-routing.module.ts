import { AuthGuard } from './../../core/auth.guard';
import { EditPokemonComponent } from './edit-pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemon', canActivate: [AuthGuard],
  children: [

    { path: 'list', component: ListPokemonComponent },
    { path: 'edit/:id', component: EditPokemonComponent },
    { path: ':id', component: DetailPokemonComponent }

  ]}
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

