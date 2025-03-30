"use client";
import React, { useState } from 'react';
import { FaPlayCircle, FaHeart } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { Song } from '@/app/data';
import { useRouter } from 'next/navigation';

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

export default SongItem;