"use client";
import React, { useState } from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';
import { GiFlamer, GiHornedHelm } from 'react-icons/gi';
import { Playlist, Artist, Song } from '@/app/data';
import { useRouter } from 'next/navigation';

// This component was causing the redeclaration error - define it only once
const PlaylistItem = ({ playlist }: { playlist: Playlist }) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/playlist/${playlist.id}`);
  };
  
  return (
    <div 
      onClick={handleClick}
      className="backdrop-blur-md bg-black border border-red-900/50 rounded-lg overflow-hidden hover:border-red-600 transition-all group shadow-lg hover:shadow-red-900/20 cursor-pointer"
      style={{
        boxShadow: '0 4px 12px rgba(139, 0, 0, 0.15)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="relative overflow-hidden h-40">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <GiFlamer className="text-red-600 text-5xl opacity-70" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-oswald text-white font-bold tracking-wide">{playlist.name}</h3>
          <p className="text-gray-400 text-sm font-raleway">{playlist.tracks} Tracks</p>
        </div>
        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="bg-red-800 rounded-full w-8 h-8 flex items-center justify-center text-white shadow-lg hover:bg-red-700 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              // Play functionality would go here
            }}
            style={{
              boxShadow: '0 2px 8px rgba(139, 0, 0, 0.3)'
            }}
          >
            <FaPlayCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

const ArtistItem = ({ artist }: { artist: Artist }) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/artist/${artist.id}`);
  };
  
  return (
    <div 
      className="text-center group cursor-pointer"
      onClick={handleClick}
      style={{
        transition: 'transform 0.3s ease',
      }}
    >
      <div 
        className="w-32 h-32 mx-auto relative overflow-hidden rounded-full mb-3 shadow-lg border border-red-900/40"
        style={{
          boxShadow: '0 4px 12px rgba(139, 0, 0, 0.2)'
        }}
      >
        <div className="absolute inset-0 bg-black rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <GiHornedHelm className="text-red-700 text-5xl" />
        </div>
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors rounded-full"></div>
      </div>
      <h3 className="font-oswald text-white font-medium tracking-wide">{artist.name}</h3>
      <p className="text-gray-400 text-sm font-raleway">{artist.genre}</p>
    </div>
  );
};

const SongItem = ({ song, index }: { song: Song, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/song/${song.id}`);
  };
  
  return (
    <div 
      className="group flex items-center justify-between p-3 hover:bg-black/80 rounded transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        borderBottom: '1px solid rgba(139, 0, 0, 0.2)',
        transition: 'all 0.2s ease'
      }}
    >
      <div className="flex items-center">
        <div className="w-6 text-center text-gray-500 mr-4">
          {isHovered ? (
            <FaPlayCircle className="text-red-600" />
          ) : (
            <span>{index + 1}</span>
          )}
        </div>
        <div 
          className="w-10 h-10 bg-black flex items-center justify-center rounded-sm mr-4 shadow-md"
          style={{
            border: '1px solid rgba(139, 0, 0, 0.3)'
          }}
        >
          <GiFlamer className="text-red-600 text-sm" />
        </div>
        <div>
          <h4 className="text-white font-raleway">{song.title}</h4>
          <p className="text-gray-500 text-sm">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <span className="text-gray-500 text-sm">{song.album}</span>
        <span className="text-gray-500 text-sm">{song.duration}</span>
        <FaHeart 
          className="text-gray-500 invisible group-hover:visible hover:text-red-600 transition-colors" 
          onClick={(e) => {
            e.stopPropagation();
            // Favorite functionality would go here
          }}
        />
      </div>
    </div>
  );
};

// Main container component to wrap everything with the proper styling
const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen text-white" style={{
      background: 'linear-gradient(to bottom, #0a0a0a 0%, #000000 100%)',
    }}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};

// Export all components at once
export {
  PlaylistItem,
  ArtistItem,
  SongItem,
  ContentContainer
};