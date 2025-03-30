"use client";
import React, { useState, useEffect } from "react";
import { FaFire } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";
import MusicPlayer from "@/app/components/MusicPlayer";
import { PlaylistItem, ArtistItem, SongItem } from "@/app/components/ContentComponents";
import { playlists, artists, songs } from "@/app/data";
import "@/app/globals.css";

interface Ember {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function AmpliFire() {
  const [emberPosition, setEmberPosition] = useState<Ember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateEmbers = () => {
      const newEmbers: Ember[] = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.2,
      }));
      setEmberPosition(newEmbers);
    };
    generateEmbers();
    const interval = setInterval(() => {
      setEmberPosition((prev) =>
        prev.map((ember) => ({
          ...ember,
          y: ember.y - ember.speed > 0 ? ember.y - ember.speed : 100,
          x: ember.x + (Math.random() * 0.4 - 0.2),
          opacity: Math.random() * 0.3 + 0.1,
        }))
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: "#FF0000" }}>
        <div className="relative">
          <style>
            {`
              @keyframes pulse {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.1); opacity: 0.8; }
                100% { transform: scale(1); opacity: 1; }
              }
              .loading-icon {
                animation: pulse 1.5s infinite ease-in-out;
                width: 100px;
                height: 100px;
                color: #000000;
              }
            `}
          </style>
          <FaFire className="loading-icon" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative font-raleway">
      {/* Textured background */}
      <div 
        className="fixed inset-0 z-0 opacity-30" 
        style={{ 
          backgroundImage: "url('/images/dark-texture.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      {/* Ember particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {emberPosition.map((ember, index) => (
          <div 
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${ember.x}%`,
              top: `${ember.y}%`,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              opacity: ember.opacity,
              background: "radial-gradient(circle, rgba(255,159,0,1) 0%, rgba(255,0,0,0) 70%)",
              transition: "top 0.6s ease-out, left 0.6s ease-out, opacity 0.5s ease-in-out",
              filter: "blur(1px)",
              boxShadow: "0 0 8px rgba(255, 120, 20, 0.8)",
            }}
          ></div>
        ))}
      </div>
      <Sidebar />
      
      <main className="ml-64 pr-8 pl-8 pt-6 pb-28 z-20">
        <style>
          {`
            .playlist-grid {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 2rem;
            }
            
            .playlist-grid > * {
              width: 100%;
              max-width: 240px;
              margin: 0 auto;
            }
          `}
        </style>
        
        <section className="mb-14">
          <h2 className="font-oswald text-2xl mb-8 text-white tracking-wide border-b border-red-900/40 pb-3 uppercase flex items-center">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Featured Playlists</span>
          </h2>
          <div className="playlist-grid">
            {playlists.map(playlist => <PlaylistItem key={playlist.id} playlist={playlist} />)}
          </div>
        </section>
        
        <section className="mb-14 backdrop-blur-md bg-gradient-to-r from-black/70 to-red-950/20 p-8 rounded-xl border border-red-900/30 shadow-xl">
          <h2 className="font-oswald text-2xl mb-8 text-white tracking-wide border-b border-red-900/40 pb-3 uppercase flex items-center">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Top Artists</span>
          </h2>
          <div className="flex justify-around">
            {artists.map(artist => <ArtistItem key={artist.id} artist={artist} />)}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="font-oswald text-2xl mb-8 text-white tracking-wide border-b border-red-900/40 pb-3 uppercase flex items-center">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Trending Tracks</span>
          </h2>
          <div className="space-y-1 backdrop-blur-md bg-black/40 rounded-xl border border-red-900/30 p-6 shadow-xl">
            {songs.map((song, index) => <SongItem key={song.id} song={song} index={index} />)}
          </div>
        </section>
      </main>
      <MusicPlayer />
    </div>
  );
}