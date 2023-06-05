import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistEditorComponent } from './components/playlist-editor/playlist-editor.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistsViewComponent,
    PlaylistDetailsComponent,
    PlaylistListComponent,
    PlaylistEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
