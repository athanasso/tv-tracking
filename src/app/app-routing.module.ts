import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaSearchComponent } from './components/media-search/media-search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MediaSearchComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'tv', component: TvShowListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
