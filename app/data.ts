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

// Dummy data for the music player with an Indian hellish twist
export const playlists: Playlist[] = [
  { id: 1, name: "Naraka Rhythms", tracks: 12, image: "/images/playlist1.jpg" },
  { id: 2, name: "Yama’s Lament", tracks: 8, image: "/images/playlist2.jpg" },
  { id: 3, name: "Patala Flames", tracks: 15, image: "/images/patala3.jpg" },
  { id: 4, name: "Chitaagni Echoes", tracks: 10, image: "/images/chitaagni4.jpg" }, // Chitaagni = Funeral Pyre Fire
];

export const artists: Artist[] = [
  { id: 1, name: "Rakshasa Riot", genre: "Desi Metal", image: "/images/rakshasa1.jpg" },
  { id: 2, name: "Kali’s Wrath", genre: "Dark Sufi Fusion", image: "/images/kali2.jpg" },
  { id: 3, name: "Pretas of Pind", genre: "Industrial Bhakti", image: "/images/preta3.jpg" }, // Pretas = Restless spirits
  { id: 4, name: "Yamraaj Reverb", genre: "Death Qawwali", image: "/images/yamraaj4.jpg" },
];

export const songs: Song[] = [
  { id: 1, title: "Fall to Naraka", artist: "Rakshasa Riot", duration: "4:32", image: "/images/song_naraka.jpg", album: "Asura Awakening" },
  { id: 2, title: "Tandav Eternal", artist: "Kali’s Wrath", duration: "3:47", image: "/images/song_tandav.jpg", album: "Blood Sindoor" }, // Tandav = Shiva’s dance of destruction
  { id: 3, title: "Patala Ignites", artist: "Pretas of Pind", duration: "5:15", image: "/images/song_patala.jpg", album: "Ash of Samsara" },
  { id: 4, title: "Yama’s Chains", artist: "Yamraaj Reverb", duration: "4:05", image: "/images/song_yama.jpg", album: "Kaal Chakra" }, // Kaal = Time/Death
  { id: 5, title: "Agnipath Burns", artist: "Rakshasa Riot", duration: "3:58", image: "/images/song_agnipath.jpg", album: "Asura Awakening" }, // Agnipath = Path of Fire
  { id: 6, title: "Kali Ka Jwala", artist: "Kali’s Wrath", duration: "4:21", image: "/images/song_jwala.jpg", album: "Blood Sindoor" }, // Jwala = Flame
  { id: 7, title: "Bhasm Se Bhasm", artist: "Pretas of Pind", duration: "3:36", image: "/images/song_bhasm.jpg", album: "Ash of Samsara" }, // Bhasm = Ashes
  { id: 8, title: "Chita Ka Khel", artist: "Yamraaj Reverb", duration: "5:02", image: "/images/song_chita.jpg", album: "Kaal Chakra" }, // Chita Ka Khel = Game of the Pyre
];