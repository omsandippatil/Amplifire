"use client";
import React from 'react';
import { GiHornedHelm } from 'react-icons/gi';
import { Artist } from '@/app/data';
import { useRouter } from 'next/navigation';

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

export default ArtistItem;