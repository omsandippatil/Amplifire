"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { FaPlayCircle, FaHeart, FaArrowLeft } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { playlists, songs } from '@/app/data';
import { ContentContainer } from '@/app/components/ContentComponents';
import Link from 'next/link';

export default function PlaylistPage() {
  const params = useParams();
  const playlistId = Number(params.id);
  
  // Find the playlist by ID
  const playlist = playlists.find(p => p.id === playlistId);
  
  // Filter songs that might be in this playlist (for demo purposes)
  // In a real app, you'd have a relationship between playlists and songs
  const playlistSongs = songs.slice(0, playlist?.tracks || 0);
  
  if (!playlist) {
    return (
      <ContentContainer>
        <div className="flex flex-col items-center justify-center h-96">
          <h1 className="text-2xl font-oswald text-red-600 mb-4">Playlist Not Found</h1>
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
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h1 className="font-oswald text-3xl text-white font-bold tracking-wide">{playlist.name}</h1>
              <p className="text-gray-400 font-raleway">{playlist.tracks} Tracks</p>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-3">
            <button className="bg-red-700 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full shadow-lg transition-all flex items-center"
                    style={{ boxShadow: '0 2px 8px rgba(139, 0, 0, 0.3)' }}>
              <FaPlayCircle className="mr-2" /> Play All
            </button>
            <button className="bg-black border border-red-900/50 hover:border-red-600 text-white font-medium px-4 py-2 rounded-full shadow-lg transition-all">
              <FaHeart />
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="font-oswald text-2xl text-white mb-4 border-b border-red-900/30 pb-2">Tracks</h2>
          
          <div className="divide-y divide-red-900/20">
            {playlistSongs.map((song, index) => (
              <div key={song.id} className="group flex items-center justify-between p-3 hover:bg-black/80 rounded transition-all cursor-pointer"
                   style={{ transition: 'all 0.2s ease' }}>
                <div className="flex items-center">
                  <div className="w-6 text-center text-gray-500 mr-4">
                    <span>{index + 1}</span>
                  </div>
                  <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm mr-4 shadow-md"
                       style={{ border: '1px solid rgba(139, 0, 0, 0.3)' }}>
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
                  <FaHeart className="text-gray-500 invisible group-hover:visible hover:text-red-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}