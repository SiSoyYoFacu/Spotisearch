import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ArtistsList', component: ArtistsListComponent },
  { path: 'Artist', component: ArtistComponent },
  { path: 'Album', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
