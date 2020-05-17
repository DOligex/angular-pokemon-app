import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SectionFromOneComponent } from './components/learning/section-from-one/section-from-one.component';
import { SectionFromSevenComponent } from './components/learning/section-from-seven/section-from-seven.component';
import { BorderCardDirective } from '../shared/directives/border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    SectionFromOneComponent,
    SectionFromSevenComponent,
    BorderCardDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
