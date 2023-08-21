import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaSearchComponent } from './components/media-search/media-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MediaSearchComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
