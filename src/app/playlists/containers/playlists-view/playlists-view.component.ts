import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss'],
})
export class PlaylistsViewComponent {
  // mode:string = 'ala ma kota';
  mode: 'details' | 'editor' = 'details';

  showEditor(){
    this.mode = 'editor'
  }
  
  showDetails(){
    this.mode = 'details'
  }
}
