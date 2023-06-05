import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.scss'],

  // Ingore outside events
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistEditorComponent {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Best playlist',
  };
}
