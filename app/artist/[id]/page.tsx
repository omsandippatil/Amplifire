"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FaPlayCircle, FaHeart, FaArrowLeft } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { artists, songs } from '@/app/data';
import Link from 'next/link';
import '@/app/globals.css'

// Define types for CSS properties to fix TypeScript errors
type CSSProperties = React.CSSProperties;

// Custom ContentContainer component with internal styling
const ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
    color: '#f1f1f1'
  }}>
    {children}
  </div>
);

export default function ArtistPage() {
  const params = useParams();
  const router = useRouter();
  const artistId = Number(params.id);
  
  // Find the artist by ID
  const artist = artists.find(a => a.id === artistId);
  
  // Filter songs for this artist
  const artistSongs = songs.filter(song => song.artist === artist?.name);
  
  // Styles with proper TypeScript type
  const styles: Record<string, CSSProperties> = {
    link: {
      color: '#a0a0a0',
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
    },
    linkHover: {
      color: '#ffffff',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
    },
    cover: {
      position: 'relative',
      height: '300px',
      backgroundColor: '#0f0f0f',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    },
    coverGradient: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
    },
    coverIcon: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ab2626',
      fontSize: '5rem',
      opacity: 0.7,
    },
    coverInfo: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1.5rem',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%)',
    },
    title: {
      margin: 0,
      fontSize: '2rem',
      fontWeight: 'bold',
      letterSpacing: '0.5px',
      color: '#ffffff',
    },
    subtitle: {
      color: '#a0a0a0',
      fontSize: '0.9rem',
      marginTop: '0.5rem',
    },
    buttons: {
      display: 'flex',
      gap: '0.75rem',
      marginTop: '1.5rem',
    },
    playButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#ab2626',
      color: 'white',
      border: 'none',
      borderRadius: '24px',
      padding: '0.6rem 1.25rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 10px rgba(171, 38, 38, 0.3)',
    },
    favoriteButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid rgba(171, 38, 38, 0.3)',
      borderRadius: '50%',
      width: '38px',
      height: '38px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    tracksHeader: {
      fontSize: '1.5rem',
      color: '#ffffff',
      marginBottom: '1rem',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid rgba(171, 38, 38, 0.2)',
    },
    trackList: {
      display: 'flex',
      flexDirection: 'column',
    },
    track: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem 0.5rem',
      borderRadius: '4px',
      transition: 'background-color 0.2s ease',
      cursor: 'pointer',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    trackHover: {
      backgroundColor: 'rgba(15, 15, 15, 0.8)',
    },
    trackNumber: {
      width: '24px',
      textAlign: 'center',
      color: '#666',
      marginRight: '1rem',
    },
    trackIcon: {
      width: '38px',
      height: '38px',
      backgroundColor: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      marginRight: '1rem',
      border: '1px solid rgba(171, 38, 38, 0.2)',
    },
    trackInfo: {
      flex: 1,
    },
    trackTitle: {
      color: '#ffffff',
      fontSize: '0.95rem',
    },
    trackArtist: {
      color: '#777',
      fontSize: '0.85rem',
      marginTop: '0.2rem',
    },
    trackMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      color: '#777',
      fontSize: '0.85rem',
    },
    trackHeart: {
      color: '#777',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
    },
    errorContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px',
    },
    errorTitle: {
      fontSize: '1.5rem',
      color: '#ab2626',
      marginBottom: '1rem',
    }
  };

  // Handle navigation to /hell
  const handleBackClick = () => {
    router.push('/hell');
  };

  if (!artist) {
    return (
      <ContentContainer>
        <div style={styles.errorContainer}>
          <h1 style={styles.errorTitle}>Artist Not Found</h1>
          <button 
            onClick={handleBackClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              ...styles.link
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ab2626'; }} 
            onMouseLeave={(e) => { e.currentTarget.style.color = '#a0a0a0'; }}>
            <FaArrowLeft style={{ marginRight: '0.5rem' }} /> Return to Hell
          </button>
        </div>
      </ContentContainer>
    );
  }
  
  return (
    <ContentContainer>
      <button 
        onClick={handleBackClick}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          ...styles.link,
          marginBottom: '1.5rem'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }} 
        onMouseLeave={(e) => { e.currentTarget.style.color = '#a0a0a0'; }}>
        <FaArrowLeft style={{ marginRight: '0.5rem' }} /> Back to Hell
      </button>
      
      <div style={styles.grid}>
        <div>
          <div style={styles.cover}>
            <div style={styles.coverGradient}></div>
            <div style={styles.coverIcon}>
              <GiFlamer />
            </div>
            <div style={styles.coverInfo}>
              <h1 style={styles.title}>{artist.name}</h1>
              <p style={styles.subtitle}>{artist.genre} • {artistSongs.length} Songs</p>
            </div>
          </div>
          
          <div style={styles.buttons}>
            <button 
              style={styles.playButton}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c92f2f'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ab2626'; }}>
              <FaPlayCircle /> Play All
            </button>
            <button 
              style={styles.favoriteButton}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ab2626'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(171, 38, 38, 0.3)'; }}>
              <FaHeart />
            </button>
          </div>
        </div>
        
        <div style={{ gridColumn: 'span 2' }}>
          <h2 style={styles.tracksHeader}>Songs by {artist.name}</h2>
          
          <div style={styles.trackList}>
            {artistSongs.map((song, index) => (
              <div 
                key={song.id} 
                style={styles.track}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(15, 15, 15, 0.8)'; }} 
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={styles.trackNumber}>
                    {index + 1}
                  </div>
                  <div style={styles.trackIcon}>
                    <GiFlamer style={{ color: '#ab2626', fontSize: '0.8rem' }} />
                  </div>
                  <div style={styles.trackInfo}>
                    <div style={styles.trackTitle}>{song.title}</div>
                    <div style={styles.trackArtist}>{song.album}</div>
                  </div>
                </div>
                <div style={styles.trackMeta}>
                  <span>{song.album}</span>
                  <span>{song.duration}</span>
                  <FaHeart 
                    style={{...styles.trackHeart, opacity: 0}} 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ab2626';
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#777';
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}