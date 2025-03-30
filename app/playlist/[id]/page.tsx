"use client";
import React, { CSSProperties } from 'react';
import { useParams } from 'next/navigation';
import { FaPlayCircle, FaHeart, FaArrowLeft } from 'react-icons/fa';
import { GiFlamer } from 'react-icons/gi';
import { playlists, songs } from '@/app/data';
import { ContentContainer } from '@/app/components/ContentComponents';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/globals.css'

// Define styles using proper CSSProperties type
const styles: Record<string, CSSProperties> = {
  container: {
    padding: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '24px',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  backButtonIcon: {
    marginRight: '8px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '24px',
    marginBottom: '32px',
  },
  playlistCard: {
    position: 'relative',
    height: '260px',
    width: '100%',
    backgroundColor: '#111',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(139, 0, 0, 0.2)',
  },
  playlistImage: {
    position: 'absolute',
    inset: 0,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  playlistGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
    zIndex: 2,
  },
  playlistIcon: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#991b1b',
    fontSize: '80px',
    opacity: 0.7,
    zIndex: 3,
  },
  playlistInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%)',
    zIndex: 4,
  },
  playlistTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '0.5px',
    margin: 0,
  },
  playlistTracks: {
    fontFamily: 'Raleway, sans-serif',
    color: '#9ca3af',
    fontSize: '14px',
    margin: '4px 0 0 0',
  },
  buttonContainer: {
    display: 'flex',
    gap: '12px',
    marginTop: '24px',
  },
  playButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#991b1b',
    color: 'white',
    fontWeight: '500',
    padding: '10px 20px',
    borderRadius: '24px',
    border: 'none',
    boxShadow: '0 2px 8px rgba(139, 0, 0, 0.3)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  playButtonIcon: {
    marginRight: '8px',
  },
  favoriteButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#111',
    color: 'white',
    padding: '10px',
    borderRadius: '24px',
    border: '1px solid rgba(139, 0, 0, 0.3)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  tracksHeader: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '22px',
    color: 'white',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '1px solid rgba(139, 0, 0, 0.2)',
  },
  trackList: {
    display: 'flex',
    flexDirection: 'column',
  },
  trackItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
    borderBottom: '1px solid rgba(139, 0, 0, 0.1)',
  },
  trackNumber: {
    width: '24px',
    textAlign: 'center',
    color: '#6b7280',
    marginRight: '16px',
    fontSize: '14px',
  },
  trackImageContainer: {
    width: '36px',
    height: '36px',
    marginRight: '16px',
    borderRadius: '4px',
    overflow: 'hidden',
    border: '1px solid rgba(139, 0, 0, 0.2)',
    position: 'relative',
  },
  trackIcon: {
    width: '36px',
    height: '36px',
    backgroundColor: '#111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    marginRight: '16px',
    border: '1px solid rgba(139, 0, 0, 0.2)',
  },
  trackInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  trackTitle: {
    fontFamily: 'Raleway, sans-serif',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  },
  trackArtist: {
    color: '#6b7280',
    fontSize: '13px',
  },
  trackMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  trackAlbum: {
    color: '#6b7280',
    fontSize: '13px',
  },
  trackDuration: {
    color: '#6b7280',
    fontSize: '13px',
  },
  notFound: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
  },
  notFoundTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '24px',
    color: '#dc2626',
    marginBottom: '16px',
  },
  notFoundLink: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
  },
  errorIcon: {
    marginRight: '8px',
  }
};

// Create CSS for responsive grid using a CSS class instead of inline style
const responsiveStyles = `
  @media (min-width: 1024px) {
    .responsive-grid {
      grid-template-columns: 1fr 2fr;
    }
  }
`;

export default function PlaylistPage() {
  const params = useParams();
  const playlistId = typeof params.id === 'string' ? parseInt(params.id, 10) : Array.isArray(params.id) ? parseInt(params.id[0], 10) : 0;
  
  // Find the playlist by ID
  const playlist = playlists.find(p => p.id === playlistId);
  
  // Filter songs that might be in this playlist
  const playlistSongs = songs.slice(0, playlist?.tracks || 0);
  
  if (!playlist) {
    return (
      <ContentContainer>
        <div style={styles.notFound}>
          <h1 style={styles.notFoundTitle}>Playlist Not Found</h1>
          <Link href="/hell" style={styles.notFoundLink}>
            <FaArrowLeft style={styles.errorIcon} /> Return to Hell
          </Link>
        </div>
      </ContentContainer>
    );
  }
  
  return (
    <ContentContainer>
      {/* Add responsive styles */}
      <style jsx>{responsiveStyles}</style>
      
      <Link 
        href="/hell" 
        className="back-button"
        style={styles.backButton}
      >
        <FaArrowLeft style={styles.backButtonIcon} /> Back to Hell
      </Link>
      
      <div className="responsive-grid" style={styles.grid}>
        <div>
          <div style={styles.playlistCard}>
            {playlist.image && (
              <Image 
                src={playlist.image} 
                alt={playlist.name}
                fill
                style={styles.playlistImage}
                priority
              />
            )}
            <div style={styles.playlistGradient}></div>
            <div style={styles.playlistIcon}>
              <GiFlamer />
            </div>
            <div style={styles.playlistInfo}>
              <h1 style={styles.playlistTitle}>{playlist.name}</h1>
              <p style={styles.playlistTracks}>{playlist.tracks} Tracks</p>
            </div>
          </div>
          
          <div style={styles.buttonContainer}>
            <button 
              style={styles.playButton}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#b91c1c';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#991b1b';
              }}
            >
              <FaPlayCircle style={styles.playButtonIcon} /> Play All
            </button>
            <button 
              style={styles.favoriteButton}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#dc2626';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139, 0, 0, 0.3)';
              }}
            >
              <FaHeart />
            </button>
          </div>
        </div>
        
        <div>
          <h2 style={styles.tracksHeader}>Tracks</h2>
          
          <div style={styles.trackList}>
            {playlistSongs.map((song, index) => (
              <div 
                key={song.id} 
                style={styles.trackItem}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={styles.trackNumber}>
                    <span>{index + 1}</span>
                  </div>
                  {song.image ? (
                    <div style={styles.trackImageContainer}>
                      <Image 
                        src={song.image} 
                        alt={song.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <div style={styles.trackIcon}>
                      <GiFlamer style={{ color: '#991b1b', fontSize: '12px' }} />
                    </div>
                  )}
                  <div style={styles.trackInfo}>
                    <h4 style={styles.trackTitle}>{song.title}</h4>
                    <p style={styles.trackArtist}>{song.artist}</p>
                  </div>
                </div>
                <div style={styles.trackMeta}>
                  <span style={styles.trackAlbum}>{song.album}</span>
                  <span style={styles.trackDuration}>{song.duration}</span>
                  <FaHeart 
                    style={{ 
                      color: '#6b7280', 
                      opacity: 0,
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#dc2626';
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#6b7280';
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add CSS for back button hover effect */}
      <style jsx>{`
        .back-button:hover {
          color: white !important;
          transform: translateX(-2px);
        }
      `}</style>
    </ContentContainer>
  );
}