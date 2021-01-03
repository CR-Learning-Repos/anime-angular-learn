import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeSelectorComponent } from './anime-selector/anime-selector.component';
import { AnimeDirective } from './anime.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimeSelectorComponent,
    AnimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
