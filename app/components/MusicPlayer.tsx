"use client";
import React, { useState, useEffect } from 'react';
import { FaPlayCircle, FaPauseCircle, FaStepForward, FaStepBackward, FaRandom, FaRedoAlt, FaVolumeUp, FaHeart, FaEllipsisH } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { songs } from '@/app/data';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [volume, setVolume] = useState(70);
  const totalTime = 270;

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (isPlaying) {
      interval = setInterval(() => 
        setCurrentTime(prev => {
          if (prev >= totalTime) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        }), 
      1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const formatTime = (seconds: number): string => 
    `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 border-t border-red-900/30 p-2 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-900/80 to-black/80 flex items-center justify-center rounded shadow-lg"><GiFlamer className="text-red-500 text-xl"/></div>
          <div><h4 className="text-white text-sm font-oswald">{currentSong.title}</h4><p className="text-gray-400 text-xs font-raleway">{currentSong.artist}</p></div>
          <FaHeart className="text-red-600 cursor-pointer hover:text-red-400 transition-colors"/>
        </div>
        <div className="flex items-center space-x-4">
          <FaStepBackward className="text-gray-300 hover:text-white cursor-pointer transition-colors"/>
          <button className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center shadow-md hover:shadow-red-900/30 transition-all" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <FaPauseCircle className="text-white text-lg"/> : <FaPlayCircle className="text-white text-lg"/>}
          </button>
          <FaStepForward className="text-gray-300 hover:text-white cursor-pointer transition-colors"/>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-gray-400 font-mono">{formatTime(currentTime)}</span>
          <div className="relative h-1 bg-gray-700/50 rounded-full w-40"><div className="absolute h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full" style={{width: `${(currentTime / totalTime) * 100}%`}}></div></div>
          <span className="text-xs text-gray-400 font-mono">{formatTime(totalTime)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaVolumeUp className="text-gray-400"/>
          <div className="relative h-1 bg-gray-700/50 rounded-full w-16"><div className="absolute h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full" style={{width: `${volume}%`}}></div></div>
          <FaEllipsisH className="text-gray-400 cursor-pointer hover:text-white transition-colors"/>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;