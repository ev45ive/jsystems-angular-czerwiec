import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

NgForOf;


@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
})
export class PlaylistListComponent {
  playlists = [
    {
      id: '123',
      name: 'Playlist 123',
      public: false,
      description: 'Best playlist',
    },
    {
      id: '234',
      name: 'Playlist 234',
      public: true,
      description: 'Awesone playlist',
    },
    {
      id: '345',
      name: 'Playlist 345',
      public: false,
      description: 'Cool playlist',
    },
  ];
}
