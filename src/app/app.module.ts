import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { hotelListComponent } from './hotel-list/hotel-list.Component';
import { StartRatingComponent } from './shared/Components/start_rating/star-rating.Component';
import {replaceComma} from './shared/pipes/Replace-comma.pipes';


@NgModule({
  declarations: [ // Enregistrer composant
    AppComponent,
    replaceComma,
    hotelListComponent,
    StartRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // ce module fonctionne notre app dans un navigateur
  ],
  providers: [],
  bootstrap: [AppComponent]  // contient composant prorincipal utilisé  " index.html"
})
export class AppModule { }
