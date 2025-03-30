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
// Dummy data for the music player featuring Indian singers and their popular songs
export const playlists: Playlist[] = [
  { id: 1, name: "Bollywood Bangers", tracks: 12, image: "/images/playlist1.jpg" },
  { id: 2, name: "Desi Hip-Hop Vibes", tracks: 8, image: "/images/playlist2.jpg" },
  { id: 3, name: "Punjabi Power", tracks: 15, image: "/images/playlist3.jpg" },
  { id: 4, name: "Rap Revolution", tracks: 10, image: "/images/playlist2.jpg" },
];

export const artists: Artist[] = [
  { id: 1, name: "Badshah", genre: "Rap/Hip-Hop", image: "/images/artist1.jpg" },
  { id: 2, name: "Yo Yo Honey Singh", genre: "Rap/Pop", image: "/images/artist2.jpg" },
  { id: 3, name: "Raftaar", genre: "Rap/Hip-Hop", image: "/images/artist3.jpg" },
  { id: 4, name: "Diljit Dosanjh", genre: "Punjabi Pop", image: "/images/artist4.jpg" },
];

export const songs: Song[] = [
  { id: 1, title: "DJ Waley Babu", artist: "Badshah", duration: "3:30", image: "/images/song.jpg", album: "ONE" },
  { id: 2, title: "Desi Kalakaar", artist: "Yo Yo Honey Singh", duration: "4:12", image: "/images/song.jpg", album: "Desi Kalakaar" },
  { id: 3, title: "Dhaakad", artist: "Raftaar", duration: "3:45", image: "/images/song.jpg", album: "Zero to Infinity" },
  { id: 4, title: "Proper Patola", artist: "Diljit Dosanjh", duration: "4:05", image: "/images/song.jpg", album: "GOAT" },
  { id: 5, title: "Garmi", artist: "Badshah", duration: "3:52", image: "/images/song.jpg", album: "Street Dancer 3D" },
  { id: 6, title: "Brown Rang", artist: "Yo Yo Honey Singh", duration: "4:25", image: "/images/song.jpg", album: "International Villager" },
  { id: 7, title: "Swag Mera Desi", artist: "Raftaar", duration: "3:40", image: "/images/song.jpg", album: "Desi Hip-Hop" },
  { id: 8, title: "Lover", artist: "Diljit Dosanjh", duration: "3:50", image: "/images/song.jpg", album: "MoonChild Era" },
];
