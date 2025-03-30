"use client";
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiDevilMask } from 'react-icons/gi';
import { playlists } from '@/app/data';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <h1 className="logo">AMPLIFIRE</h1>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        
        <nav className="navigation">
          {/* Library Section */}
          <div className="nav-section">
            <h2 className="section-title">LIBRARY</h2>
            <ul className="nav-list">
              {['Home', 'Browse', 'Radio', 'Discover'].map((item, index) => (
                <li key={index} className="nav-item">
                  <a href="#" className="nav-link">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Playlists Section */}
          <div className="nav-section">
            <h2 className="section-title">YOUR PLAYLISTS</h2>
            <ul className="nav-list">
              {playlists.map((playlist) => (
                <li key={playlist.id} className="nav-item">
                  <a href="#" className="nav-link">
                    <span>{playlist.name}</span>
                    <span className="track-count">{playlist.tracks}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-card">
              <div className="avatar">
                <GiDevilMask className="avatar-icon" />
              </div>
              <span className="username">Soul Collector</span>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .sidebar-container {
          width: 260px;
          height: 100%;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 40;
          overflow-y: auto;
          background: linear-gradient(180deg, rgba(20, 0, 0, 0.85) 0%, rgba(40, 0, 0, 0.65) 100%);
          backdrop-filter: blur(12px);
          border-right: 1px solid rgba(255, 30, 30, 0.1);
          box-shadow: 0 0 40px rgba(200, 0, 0, 0.2);
          padding-bottom: 20px;
        }

        .sidebar-content {
          padding: 28px 20px;
        }

        .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 4px;
          color: #ff3030;
          margin-bottom: 32px;
          text-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
        }

        .search-container {
          position: relative;
          margin-bottom: 28px;
        }

        .search-input {
          width: 100%;
          background: rgba(10, 0, 0, 0.4);
          border: 1px solid rgba(255, 30, 30, 0.15);
          backdrop-filter: blur(5px);
          border-radius: 6px;
          padding: 10px 12px 10px 36px;
          font-size: 13px;
          color: #d0d0d0;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: rgba(255, 30, 30, 0.4);
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
        }

        .search-input::placeholder {
          color: rgba(200, 200, 200, 0.5);
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(200, 200, 200, 0.5);
          font-size: 14px;
        }

        .navigation {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .nav-section {
          margin-bottom: 8px;
        }

        .section-title {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #ffffff;
          margin-bottom: 12px;
          opacity: 0.9;
        }

        .nav-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .nav-item {
          margin-bottom: 2px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 10px;
          border-radius: 4px;
          color: rgba(220, 220, 220, 0.7);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          background: rgba(255, 0, 0, 0.08);
          color: rgba(255, 80, 80, 0.9);
          transform: translateX(2px);
        }

        .track-count {
          font-size: 11px;
          color: rgba(200, 200, 200, 0.4);
        }

        .profile-section {
          padding-top: 20px;
          border-top: 1px solid rgba(255, 30, 30, 0.1);
        }

        .profile-card {
          display: flex;
          align-items: center;
          padding: 10px;
          background: rgba(40, 0, 0, 0.3);
          backdrop-filter: blur(5px);
          border-radius: 6px;
          border: 1px solid rgba(255, 30, 30, 0.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3a0000 0%, #1a0000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 8px rgba(255, 0, 0, 0.3);
          border: 1px solid rgba(255, 0, 0, 0.2);
        }

        .avatar-icon {
          color: #ff3030;
          font-size: 16px;
        }

        .username {
          margin-left: 10px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;