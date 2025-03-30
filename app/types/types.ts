// types.ts
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