import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
})
export class PlaylistDetailsComponent {
 
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: false,
    description: 'Best playlist',
  };
  
  
}
