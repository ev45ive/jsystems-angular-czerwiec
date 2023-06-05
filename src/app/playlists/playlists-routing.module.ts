import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsComponent,
    children: [
      {
        path: '',
        component: PlaylistsViewComponent,
      },
      // {
      //   path: 'costam',
      //   component: PlaylistsCostamwComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsRoutingModule {}
