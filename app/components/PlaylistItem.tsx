"use client";
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { Playlist } from '@/app/data';
import { useRouter } from 'next/navigation';

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

export default PlaylistItem;