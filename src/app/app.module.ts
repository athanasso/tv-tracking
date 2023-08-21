import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MediaSearchComponent } from './components/media-search/media-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowListComponent,
    MovieListComponent,
    MediaSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
