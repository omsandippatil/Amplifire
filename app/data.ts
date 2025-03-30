// src/app/data.ts
import { IconType } from 'react-icons';

export interface Playlist {
  id: number;
  name: string;
  tracks: number;
  image: string;
}

export interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  image: string;
  album: string;
}

// Dummy data for the music player
export const playlists: Playlist[] = [
  { id: 1, name: "Infernal Beats", tracks: 12, image: "/images/playlist1.jpg" },
  { id: 2, name: "Dark Harmonies", tracks: 8, image: "/images/playlist2.jpg" },
  { id: 3, name: "Fiery Anthems", tracks: 15, image: "/images/playlist3.jpg" },
  { id: 4, name: "Scorched Earth", tracks: 10, image: "/images/playlist4.jpg" },
];

export const artists: Artist[] = [
  { id: 1, name: "Ember Lords", genre: "Heavy Metal", image: "/images/artist1.jpg" },
  { id: 2, name: "Crimson Void", genre: "Dark Wave", image: "/images/artist2.jpg" },
  { id: 3, name: "Ash Phantoms", genre: "Industrial", image: "/images/artist3.jpg" },
  { id: 4, name: "Burning Descent", genre: "Death Metal", image: "/images/artist4.jpg" },
];

export const songs: Song[] = [
  { id: 1, title: "Descent to Darkness", artist: "Ember Lords", duration: "4:32", image: "/images/song1.jpg", album: "Infernal Rise" },
  { id: 2, title: "Eternal Flame", artist: "Crimson Void", duration: "3:47", image: "/images/song2.jpg", album: "Blood Moon" },
  { id: 3, title: "Firestarter", artist: "Ash Phantoms", duration: "5:15", image: "/images/song3.jpg", album: "Cinder" },
  { id: 4, title: "Hellbound", artist: "Burning Descent", duration: "4:05", image: "/images/song4.jpg", album: "The Abyss" },
  { id: 5, title: "Scorched Memories", artist: "Ember Lords", duration: "3:58", image: "/images/song5.jpg", album: "Infernal Rise" },
  { id: 6, title: "Brimstone", artist: "Crimson Void", duration: "4:21", image: "/images/song6.jpg", album: "Blood Moon" },
  { id: 7, title: "Ashes to Ashes", artist: "Ash Phantoms", duration: "3:36", image: "/images/song7.jpg", album: "Cinder" },
  { id: 8, title: "Devil's Playground", artist: "Burning Descent", duration: "5:02", image: "/images/song8.jpg", album: "The Abyss" },
];