"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { FaPlayCircle, FaHeart, FaArrowLeft, FaPlus } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { songs, artists } from '@/app/data';
import { ContentContainer } from '@/app/components/ContentComponents';
import Link from 'next/link';

export default function SongPage() {
  const params = useParams();
  const songId = Number(params.id);
  
  // Find the song by ID
  const song = songs.find(s => s.id === songId);
  
  // Find the artist
  const artist = artists.find(a => a.name === song?.artist);
  
  // Find related songs (same artist or album)
  const relatedSongs = songs
    .filter(s => (s.artist === song?.artist || s.album === song?.album) && s.id !== songId)
    .slice(0, 4);
  
  if (!song) {
    return (
      <ContentContainer>
        <div className="flex flex-col items-center justify-center h-96">
          <h1 className="text-2xl font-oswald text-red-600 mb-4">Song Not Found</h1>
          <Link href="/" className="text-white hover:text-red-500 transition-colors flex items-center">
            <FaArrowLeft className="mr-2" /> Return to Home
          </Link>
        </div>
      </ContentContainer>
    );
  }
  
  return (
    <ContentContainer>
      <Link href="/" className="text-gray-400 hover:text-white mb-6 inline-flex items-center transition-colors">
        <FaArrowLeft className="mr-2" /> Back
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <div className="relative h-64 w-full bg-black border border-red-900/50 rounded-lg overflow-hidden shadow-lg"
               style={{ boxShadow: '0 4px 12px rgba(139, 0, 0, 0.15)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <GiFlamer className="text-red-600 text-8xl opacity-70" />
            </div>
          </div>
          
          <div className="mt-6">
            <h1 className="font-oswald text-3xl text-white font-bold tracking-wide">{song.title}</h1>
            <Link href={`/artist/${artist?.id || 1}`} className="text-red-500 text-lg font-raleway hover:text-red-400 transition-colors">
              {song.artist}
            </Link>
            <p className="text-gray-400 mt-1">Album: {song.album}</p>
            <p className="text-gray-400 mt-1">Duration: {song.duration}</p>
            
            <div className="mt-6 flex space-x-3">
              <button className="bg-red-700 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full shadow-lg transition-all flex items-center"
                      style={{ boxShadow: '0 2px 8px rgba(139, 0, 0, 0.3)' }}>
                <FaPlayCircle className="mr-2" /> Play Now
              </button>
              <button className="bg-black border border-red-900/50 hover:border-red-600 text-white font-medium px-4 py-2 rounded-full shadow-lg transition-all">
                <FaHeart />
              </button>
              <button className="bg-black border border-red-900/50 hover:border-red-600 text-white font-medium px-4 py-2 rounded-full shadow-lg transition-all">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="p-6 backdrop-blur-md bg-black border border-red-900/50 rounded-lg mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-2 bg-red-700 rounded-full"></div>
              <div className="flex-1 h-2 bg-gray-800 rounded-full"></div>
              <span className="text-gray-400">{song.duration}</span>
            </div>
            
            <div className="flex justify-center space-x-8">
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
              </button>
              <button className="text-red-600 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                </svg>
              </button>
            </div>
          </div>
          
          <h2 className="font-oswald text-2xl text-white mb-4 border-b border-red-900/30 pb-2">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedSongs.map((relatedSong) => (
              <Link href={`/song/${relatedSong.id}`} key={relatedSong.id}>
                <div className="flex items-center p-3 hover:bg-black/80 rounded transition-all cursor-pointer border border-red-900/20"
                     style={{ transition: 'all 0.2s ease' }}>
                  <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm mr-4 shadow-md"
                       style={{ border: '1px solid rgba(139, 0, 0, 0.3)' }}>
                    <GiFlamer className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-raleway">{relatedSong.title}</h4>
                    <p className="text-gray-500 text-sm">{relatedSong.artist}</p>
                  </div>
                  <div className="ml-auto text-gray-500 text-sm">
                    {relatedSong.duration}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}