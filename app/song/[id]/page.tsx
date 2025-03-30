"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { FaPlayCircle, FaHeart, FaArrowLeft, FaPlus, FaPause } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { songs, artists } from '@/app/data';
import { ContentContainer } from '@/app/components/ContentComponents';
import Link from 'next/link';
import { CSSProperties } from 'react';
import '@/app/globals.css'

const styles: Record<string, CSSProperties> = {
  backLink: {
    color: '#888',
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '24px',
    textDecoration: 'none',
    transition: 'color 0.2s, transform 0.2s',
    fontWeight: 500
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '32px',
    marginBottom: '32px'
  },
  leftColumn: {
    gridColumn: 'span 4'
  },
  rightColumn: {
    gridColumn: 'span 8'
  },
  albumArt: {
    position: 'relative',
    height: '280px',
    width: '100%',
    backgroundColor: '#000',
    border: '1px solid rgba(139, 0, 0, 0.3)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 12px 32px rgba(139, 0, 0, 0.3)'
  },
  albumGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.5), rgba(0, 0, 0, 0.9))'
  },
  iconContainer: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  songTitle: {
    fontFamily: '"Oswald", sans-serif',
    fontSize: '32px',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '28px',
    marginBottom: '8px',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
  },
  artistLink: {
    color: '#e53e3e',
    fontSize: '20px',
    fontFamily: '"Raleway", sans-serif',
    textDecoration: 'none',
    transition: 'color 0.2s, transform 0.2s',
    fontWeight: '600',
    display: 'inline-block'
  },
  infoText: {
    color: '#a0aec0',
    marginTop: '8px',
    fontSize: '16px',
    letterSpacing: '0.3px'
  },
  player: {
    marginTop: '24px',
    padding: '24px',
    backdropFilter: 'blur(16px)',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    border: '1px solid rgba(139, 0, 0, 0.3)',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
  },
  progressBarContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  progressBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '8px'
  },
  progress: {
    flex: '0 0 auto',
    height: '6px',
    backgroundColor: '#b71c1c',
    borderRadius: '6px',
    position: 'relative'
  },
  progressKnob: {
    position: 'absolute',
    right: '-6px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 0 6px rgba(0, 0, 0, 0.3)'
  },
  remaining: {
    flex: 1,
    height: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '6px'
  },
  timeDisplay: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#a0aec0',
    fontSize: '12px',
    fontFamily: 'monospace',
    marginTop: '4px'
  },
  time: {
    color: '#a0aec0',
    fontSize: '13px',
    fontFamily: 'monospace'
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '28px',
    marginTop: '20px'
  },
  controlButton: {
    background: 'none',
    border: 'none',
    color: '#999',
    cursor: 'pointer',
    transition: 'all 0.2s',
    padding: '10px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none'
  },
  playControlButton: {
    background: 'rgba(183, 28, 28, 0.05)',
    border: '2px solid rgba(229, 62, 62, 0.3)',
    color: '#e53e3e',
    cursor: 'pointer',
    transition: 'all 0.2s',
    padding: '16px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 16px rgba(139, 0, 0, 0.2)',
    outline: 'none'
  },
  actionButtons: {
    display: 'flex',
    gap: '16px',
    marginTop: '28px'
  },
  playButton: {
    backgroundColor: '#b71c1c',
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(183, 28, 28, 0.4)',
    transition: 'all 0.2s',
    letterSpacing: '0.5px',
    outline: 'none'
  },
  iconButton: {
    backgroundColor: 'rgba(10, 10, 10, 0.6)',
    border: '1px solid rgba(139, 0, 0, 0.4)',
    color: '#fff',
    padding: '12px',
    borderRadius: '50%',
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    outline: 'none'
  },
  sectionTitle: {
    fontFamily: '"Oswald", sans-serif',
    fontSize: '24px',
    color: '#fff',
    marginBottom: '24px',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(139, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px'
  },
  relatedSong: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(139, 0, 0, 0.2)',
    transition: 'all 0.3s',
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  relatedIcon: {
    width: '42px',
    height: '42px',
    backgroundColor: 'rgba(20, 20, 20, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    marginRight: '16px',
    border: '1px solid rgba(139, 0, 0, 0.3)'
  },
  relatedInfo: {
    flex: 1
  },
  relatedTitle: {
    color: '#fff',
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '4px',
    fontWeight: 600,
    fontSize: '16px'
  },
  relatedArtist: {
    color: '#a0aec0',
    fontSize: '14px'
  },
  relatedDuration: {
    color: '#a0aec0',
    fontSize: '14px',
    fontFamily: 'monospace'
  },
  lyricsContainer: {
    marginTop: '40px',
    padding: '32px',
    backgroundColor: 'rgba(10, 10, 10, 0.7)', 
    borderRadius: '16px',
    borderLeft: '4px solid #b71c1c',
    lineHeight: 1.8,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(16px)'
  },
  lyricsTitle: {
    fontFamily: '"Oswald", sans-serif',
    fontSize: '28px',
    color: '#fff',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(139, 0, 0, 0.3)'
  },
  lyricsText: {
    color: '#e2e8f0',
    fontSize: '18px',
    whiteSpace: 'pre-line',
    letterSpacing: '0.4px',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
  },
  lyricsHighlight: {
    color: '#e53e3e',
    fontWeight: 600
  },
  lyricsSection: {
    marginBottom: '24px'
  },
  lyricsSectionTitle: {
    color: '#a0aec0',
    fontSize: '14px',
    textTransform: 'uppercase',
    marginBottom: '12px',
    letterSpacing: '2px',
    fontWeight: 600
  },
  volumeControl: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '16px',
    padding: '0 12px'
  },
  volumeIcon: {
    color: '#999',
    fontSize: '16px'
  },
  volumeBar: {
    flex: 1,
    height: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    position: 'relative'
  },
  volumeLevel: {
    width: '70%',
    height: '4px',
    backgroundColor: 'rgba(229, 62, 62, 0.6)',
    borderRadius: '4px'
  },
  extraControls: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '16px'
  },
  extraControlButton: {
    background: 'none',
    border: 'none',
    color: '#888',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'color 0.2s',
    padding: '6px 12px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }
};

// Hover effects
const hoverStyles = {
  backLink: { color: '#e53e3e', transform: 'translateX(-4px)' },
  artistLink: { color: '#f56565', transform: 'translateY(-2px)' },
  playButton: { backgroundColor: '#c53030', transform: 'translateY(-2px)', boxShadow: '0 10px 20px rgba(183, 28, 28, 0.5)' },
  iconButton: { backgroundColor: 'rgba(183, 28, 28, 0.2)', borderColor: 'rgba(183, 28, 28, 0.6)', transform: 'translateY(-2px)' },
  relatedSong: { backgroundColor: 'rgba(183, 28, 28, 0.1)', transform: 'translateY(-3px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' },
  controlButton: { color: '#e2e8f0', backgroundColor: 'rgba(255, 255, 255, 0.05)' },
  playControlButton: { color: '#f56565', backgroundColor: 'rgba(183, 28, 28, 0.2)', transform: 'scale(1.05)' },
  extraControlButton: { color: '#e2e8f0', backgroundColor: 'rgba(255, 255, 255, 0.05)' }
};

export default function SongPage() {
  const params = useParams();
  const songId = Number(params.id);
  
  // States
  const [hoveredElements, setHoveredElements] = useState<Record<string, boolean>>({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:45");
  const [progressWidth, setProgressWidth] = useState(20); // percentage
  
  // Handle hover state
  const handleHover = (element: string, isHovered: boolean) => {
    setHoveredElements(prev => ({...prev, [element]: isHovered}));
  };
  
  // Toggle play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Enhanced lyrics with sections and highlights
  const enhancedLyrics = {
    title: "Fire in My Soul",
    sections: [
      {
        title: "Verse 1",
        content: `Flames dancing in the night
Shadows play upon the wall
A melody within my mind
Like an echo, hear it call`
      },
      {
        title: "Chorus",
        content: `Fire in my soul
Burning through the dark
Light me up and make me whole
Ignite the spark`
      },
      {
        title: "Verse 2",
        content: `Embers glowing deep inside
A passion that will never fade
Through the darkness I will stride
With this fire I've been made`
      },
      {
        title: "Bridge",
        content: `Like a phoenix I will rise
From ashes to the sky
This burning flame will never die
It's the reason I'm alive`
      }
    ]
  };
  
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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px'}}>
          <h1 style={{fontFamily: '"Oswald", sans-serif', fontSize: '28px', color: '#e53e3e', marginBottom: '16px'}}>Song Not Found</h1>
          <Link href="/hell" style={{color: '#e53e3e', padding: '12px 24px', border: '1px solid rgba(229, 62, 62, 0.3)', borderRadius: '8px', textDecoration: 'none'}}>
            <FaArrowLeft style={{marginRight: '12px'}} /> Return to Hell
          </Link>
        </div>
      </ContentContainer>
    );
  }
  
  return (
    <ContentContainer>
      <Link 
        href="/hell" 
        style={{
          ...styles.backLink,
          ...(hoveredElements.backLink ? hoverStyles.backLink : {})
        }}
        onMouseEnter={() => handleHover('backLink', true)}
        onMouseLeave={() => handleHover('backLink', false)}
      >
        <FaArrowLeft style={{marginRight: '10px'}} /> Back to Hell
      </Link>
      
      <div style={styles.contentGrid}>
        <div style={styles.leftColumn}>
          {/* Album Art */}
          <div style={styles.albumArt}>
            <div style={styles.albumGradient}></div>
            <div style={styles.iconContainer}>
              <GiFlamer style={{color: '#e53e3e', fontSize: '84px', opacity: 0.9}} />
            </div>
          </div>
          
          {/* Song Info */}
          <h1 style={styles.songTitle}>{song.title}</h1>
          <Link 
            href={`/artist/${artist?.id || 1}`} 
            style={{
              ...styles.artistLink,
              ...(hoveredElements.artistLink ? hoverStyles.artistLink : {})
            }}
            onMouseEnter={() => handleHover('artistLink', true)}
            onMouseLeave={() => handleHover('artistLink', false)}
          >
            {song.artist}
          </Link>
          <p style={styles.infoText}>Album: {song.album}</p>
          <p style={styles.infoText}>Duration: {song.duration}</p>
          
          {/* Enhanced Player Controls */}
          <div style={styles.player}>
            <div style={styles.progressBarContainer}>
              <div style={styles.progressBar}>
                <div style={{...styles.progress, width: `${progressWidth}%`}}>
                  <div style={styles.progressKnob}></div>
                </div>
                <div style={styles.remaining}></div>
              </div>
              <div style={styles.timeDisplay}>
                <span style={styles.time}>{currentTime}</span>
                <span style={styles.time}>{song.duration}</span>
              </div>
            </div>
            
            <div style={styles.controls}>
              <button 
                style={{
                  ...styles.controlButton,
                  ...(hoveredElements.prevButton ? hoverStyles.controlButton : {})
                }}
                onMouseEnter={() => handleHover('prevButton', true)}
                onMouseLeave={() => handleHover('prevButton', false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
              </button>
              <button 
                style={{
                  ...styles.playControlButton,
                  ...(hoveredElements.playControlButton ? hoverStyles.playControlButton : {})
                }}
                onMouseEnter={() => handleHover('playControlButton', true)}
                onMouseLeave={() => handleHover('playControlButton', false)}
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <FaPause size={24} />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              <button 
                style={{
                  ...styles.controlButton,
                  ...(hoveredElements.nextButton ? hoverStyles.controlButton : {})
                }}
                onMouseEnter={() => handleHover('nextButton', true)}
                onMouseLeave={() => handleHover('nextButton', false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                </svg>
              </button>
            </div>
            
            {/* Volume Control */}
            <div style={styles.volumeControl}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={styles.volumeIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6c.34 0 .68.024 1 .07M12 6a7.001 7.001 0 016.929 6M12 6c4.976 0 9 4.024 9 9m-9-9a9 9 0 00-9 9m9-9c.34 0 .68.024 1 .07" />
              </svg>
              <div style={styles.volumeBar}>
                <div style={styles.volumeLevel}></div>
              </div>
            </div>
            
            {/* Extra Controls */}
            <div style={styles.extraControls}>
              <button 
                style={{
                  ...styles.extraControlButton,
                  ...(hoveredElements.loopButton ? hoverStyles.extraControlButton : {})
                }}
                onMouseEnter={() => handleHover('loopButton', true)}
                onMouseLeave={() => handleHover('loopButton', false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Loop
              </button>
              <button 
                style={{
                  ...styles.extraControlButton,
                  ...(hoveredElements.shuffleButton ? hoverStyles.extraControlButton : {})
                }}
                onMouseEnter={() => handleHover('shuffleButton', true)}
                onMouseLeave={() => handleHover('shuffleButton', false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Shuffle
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div style={styles.actionButtons}>
            <button 
              style={{
                ...styles.playButton,
                ...(hoveredElements.playButton ? hoverStyles.playButton : {})
              }}
              onMouseEnter={() => handleHover('playButton', true)}
              onMouseLeave={() => handleHover('playButton', false)}
              onClick={togglePlay}
            >
              {isPlaying ? <FaPause style={{marginRight: '10px', fontSize: '18px'}} /> : <FaPlayCircle style={{marginRight: '10px', fontSize: '18px'}} />}
              {isPlaying ? 'Pause' : 'Play Now'}
            </button>
            <button 
              style={{
                ...styles.iconButton,
                ...(hoveredElements.likeButton ? hoverStyles.iconButton : {})
              }}
              onMouseEnter={() => handleHover('likeButton', true)}
              onMouseLeave={() => handleHover('likeButton', false)}
              title="Add to Favorites"
            >
              <FaHeart />
            </button>
            <button 
              style={{
                ...styles.iconButton,
                ...(hoveredElements.addButton ? hoverStyles.iconButton : {})
              }}
              onMouseEnter={() => handleHover('addButton', true)}
              onMouseLeave={() => handleHover('addButton', false)}
              title="Add to Playlist"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        
        <div style={styles.rightColumn}>
          {/* Related Songs */}
          <h2 style={styles.sectionTitle}>
            <GiFlamer style={{color: '#e53e3e'}} /> You Might Also Like
          </h2>
          
          <div style={styles.relatedGrid}>
            {relatedSongs.map((relatedSong) => (
              <Link 
                href={`/song/${relatedSong.id}`} 
                key={relatedSong.id}
                style={{textDecoration: 'none'}}
              >
                <div 
                  style={{
                    ...styles.relatedSong,
                    ...(hoveredElements[`relatedSong-${relatedSong.id}`] ? hoverStyles.relatedSong : {})
                  }}
                  onMouseEnter={() => handleHover(`relatedSong-${relatedSong.id}`, true)}
                  onMouseLeave={() => handleHover(`relatedSong-${relatedSong.id}`, false)}
                >
                  <div style={styles.relatedIcon}>
                    <GiFlamer style={{color: '#e53e3e', fontSize: '20px'}} />
                  </div>
                  <div style={styles.relatedInfo}>
                    <h4 style={styles.relatedTitle}>{relatedSong.title}</h4>
                    <p style={styles.relatedArtist}>{relatedSong.artist}</p>
                  </div>
                  <div style={styles.relatedDuration}>
                    {relatedSong.duration}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Enhanced Lyrics Section */}
          <div style={styles.lyricsContainer}>
            <h2 style={styles.lyricsTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e53e3e">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg> 
              {enhancedLyrics.title}
            </h2>
            
            <div>
              {enhancedLyrics.sections.map((section, index) => (
                <div key={index} style={styles.lyricsSection}>
                  <h3 style={styles.lyricsSectionTitle}>{section.title}</h3>
                  <div style={styles.lyricsText}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}