"use client";
import React, { useState, useEffect } from 'react';
import { FaFire, FaSkull, FaLink, FaAngleRight } from 'react-icons/fa';
import { GiHornedHelm, GiDevilMask } from 'react-icons/gi';
import Link from 'next/link';
import "@/app/globals.css";

// Define the ember interface for type safety
interface Ember {
  x: number;
  y: number;
  size: number;
  speed: number;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  // Fix the type definition to resolve TypeScript errors
  const [emberPosition, setEmberPosition] = useState<Ember[]>([]);

  // Generate random ember particles for subtle background animation
  useEffect(() => {
    const generateEmbers = () => {
      const newEmbers: Ember[] = [];
      for (let i = 0; i < 12; i++) {
        newEmbers.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
      setEmberPosition(newEmbers);
    };
    
    generateEmbers();
    
    const interval = setInterval(() => {
      setEmberPosition(prev => 
        prev.map(ember => ({
          ...ember,
          y: ember.y - ember.speed > 0 ? ember.y - ember.speed : 100,
          x: ember.x + (Math.random() * 0.4 - 0.2)
        }))
      );
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDescend = () => {
    setLoading(true);
    // Instead of using router, use window.location for client-side navigation
    setTimeout(() => {
      window.location.href = '/hell';
    }, 1000);
  };

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#b91c1c', /* Red background */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50
      }}>
        <div style={{
          width: '6rem',
          height: '6rem',
          position: 'relative',
          animation: 'pulse 2s infinite'
        }}>
          <FaFire style={{
            width: '100%',
            height: '100%',
            color: '#000' /* Black icon */
          }} />
        </div>
        <style jsx>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Background image */}
      <div className="background-image"></div>
      
      {/* Subtle ember animation */}
      <div className="ember-container">
        {emberPosition.map((ember, index) => (
          <div 
            key={index}
            className="ember"
            style={{
              left: `${ember.x}%`,
              top: `${ember.y}%`,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
            }}
          ></div>
        ))}
      </div>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Background effects */}
          <div className="hero-gradient"></div>
          
          <div className="hero-content">
            <h1 className="site-title">AMPLIFIRE</h1>
            <p className="site-subtitle">
              Unleash the power of sound. Your music, amplified.
            </p>
            
            <button onClick={handleDescend} className="cta-button">
              <span className="button-text">
                DESCEND NOW
                <FaFire className="button-icon" />
              </span>
              <span className="button-background"></span>
            </button>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="features-section">
          <div className="section-container">
            <h2 className="section-title">FEATURES</h2>
            
            <div className="features-grid">
              {[
                {
                  title: "PREMIUM AUDIO",
                  description: "Experience exceptional sound quality with our advanced audio processing technology.",
                  icon: <FaFire className="feature-icon" />
                },
                {
                  title: "CUSTOM PLAYLISTS",
                  description: "Create custom playlists that match your every mood, from intense to serene.",
                  icon: <GiHornedHelm className="feature-icon" />
                },
                {
                  title: "OFFLINE MODE",
                  description: "Take your music anywhere with our powerful offline capabilities.",
                  icon: <FaLink className="feature-icon" />
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-wrapper">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="pricing-section">
          <div className="section-container">
            <h2 className="section-title">SELECT YOUR PLAN</h2>
            
            <div className="pricing-grid">
              {[
                {
                  name: "STANDARD",
                  price: "₹199",
                  period: "per month",
                  features: [
                    "Standard audio quality",
                    "Limited offline downloads",
                    "Ad-supported experience",
                    "Basic playlist features"
                  ],
                  highlighted: false,
                  icon: <FaSkull className="plan-icon" />
                },
                {
                  name: "PREMIUM",
                  price: "₹499",
                  period: "per month",
                  features: [
                    "High-quality audio",
                    "Unlimited offline downloads",
                    "Ad-free experience",
                    "Advanced playlist features",
                    "Exclusive content access"
                  ],
                  highlighted: true,
                  icon: <GiHornedHelm className="plan-icon" />
                },
                {
                  name: "ANNUAL",
                  price: "₹4,999",
                  period: "per year",
                  features: [
                    "Highest-quality audio",
                    "Unlimited everything",
                    "Early access to new features",
                    "Exclusive limited collections",
                    "Priority customer support"
                  ],
                  highlighted: false,
                  icon: <GiDevilMask className="plan-icon" />
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                >
                  {plan.highlighted && (
                    <div className="popular-tag">
                      <span>MOST POPULAR</span>
                    </div>
                  )}
                  
                  <div className="plan-icon-wrapper">
                    {plan.icon}
                  </div>
                  
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                  
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <FaAngleRight className="list-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`select-plan-button ${plan.highlighted ? 'highlighted' : ''}`}>
                    SELECT PLAN
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">AMPLIFY YOUR EXPERIENCE</h2>
            <p className="cta-subtitle">
              Join thousands who have elevated their music experience.
            </p>
            <button 
              onClick={handleDescend}
              className="cta-button-large"
            >
              Begin Your Journey
              <FaFire className="button-icon" />
            </button>
          </div>
        </section>
      </main>
      
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo">AMPLIFIRE</div>
          
          <div className="footer-links">
            <Link href="#" className="footer-link">Privacy</Link>
            <Link href="#" className="footer-link">Terms</Link>
            <Link href="#" className="footer-link">Support</Link>
            <Link href="#" className="footer-link">Contact</Link>
          </div>
        </div>
        <div className="copyright">
          © 2025 Amplifire. All rights reserved.
        </div>
      </footer>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman:wght@400;700&display=swap');
        
        /* Main Container */
        .app-container {
          min-height: 100vh;
          background-color: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          position: relative;
          font-family: 'Times New Roman', serif;
        }
        
        /* Background Elements */
        .background-image {
          position: fixed;
          inset: 0;
          z-index: 0;
          opacity: 0.25;
          background-image: url('/images/dark-texture.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .ember-container {
          position: fixed;
          inset: 0;
          z-index: 10;
          pointer-events: none;
        }
        
        .ember {
          position: absolute;
          border-radius: 9999px;
          background-color: #fb923c;
          opacity: 0.4;
          transition: top 0.5s ease-out, left 0.5s ease-out;
          filter: blur(1px);
        }
        
        /* Content Sections */
        .main-content {
          flex-grow: 1;
          z-index: 20;
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #000, rgba(127, 29, 29, 0.2), #000);
        }
        
        .hero-content {
          padding: 0 1.5rem;
          z-index: 10;
          text-align: center;
          max-width: 80rem;
          margin: 0 auto;
        }
        
        .site-title {
          font-family: 'Times New Roman', serif;
          font-size: 5rem;
          margin-bottom: 1rem;
          color: #dc2626;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        
        .site-subtitle {
          font-family: 'Times New Roman', serif;
          font-size: 1.25rem;
          margin-bottom: 3rem;
          max-width: 36rem;
          margin-left: auto;
          margin-right: auto;
          color: #d1d5db;
          font-weight: 300;
          letter-spacing: 0.05em;
        }
        
        .cta-button {
          position: relative;
          background-color: #991b1b;
          color: #fff;
          padding: 0.75rem 2rem;
          border-radius: 0.125rem;
          font-family: 'Times New Roman', serif;
          font-size: 1.125rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s;
          overflow: hidden;
          border: 1px solid #dc2626;
        }
        
        .cta-button:hover {
          background-color: #7f1d1d;
        }
        
        .button-text {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
        }
        
        .button-icon {
          margin-left: 0.5rem;
        }
        
        .button-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #7f1d1d, #b91c1c);
          transform: translateY(100%);
          transition: transform 0.3s;
        }
        
        .cta-button:hover .button-background {
          transform: translateY(0);
        }
        
        /* Features Section */
        .features-section {
          padding: 5rem 0;
          background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.95), #000);
          border-top: 1px solid rgba(127, 29, 29, 0.3);
        }
        
        .section-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .section-title {
          font-family: 'Times New Roman', serif;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          text-align: center;
          color: #dc2626;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
        }
        
        @media (min-width: 768px) {
          .site-title {
            font-size: 7rem;
          }
          
          .site-subtitle {
            font-size: 1.5rem;
          }
          
          .section-title {
            font-size: 3rem;
          }
          
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem;
          border: 1px solid rgba(127, 29, 29, 0.5);
          background-color: rgba(0, 0, 0, 0.7);
          transition: all 0.3s;
        }
        
        .feature-card:hover {
          background-color: rgba(127, 29, 29, 0.3);
        }
        
        .feature-icon-wrapper {
          margin-bottom: 1rem;
        }
        
        .feature-icon {
          color: #ef4444;
          font-size: 2.5rem;
        }
        
        .feature-title {
          font-family: 'Times New Roman', serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #fff;
          letter-spacing: 0.05em;
        }
        
        .feature-description {
          color: #9ca3af;
          font-family: 'Times New Roman', serif;
        }
        
        /* Pricing Section */
        .pricing-section {
          padding: 5rem 0;
          background-color: #000;
          border-top: 1px solid rgba(127, 29, 29, 0.3);
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .pricing-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          border: 1px solid rgba(127, 29, 29, 0.3);
          background-color: #000;
          position: relative;
        }
        
        .pricing-card.highlighted {
          border-color: #dc2626;
          background: linear-gradient(to bottom, rgba(127, 29, 29, 0.4), #000);
        }
        
        .popular-tag {
          position: absolute;
          top: -1rem;
          left: 0;
          right: 0;
          text-align: center;
        }
        
        .popular-tag span {
          background-color: #dc2626;
          color: #fff;
          font-size: 0.875rem;
          padding: 0.25rem 0.75rem;
          font-family: 'Times New Roman', serif;
          letter-spacing: 0.05em;
        }
        
        .plan-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .plan-icon {
          color: #ef4444;
          font-size: 1.875rem;
        }
        
        .plan-name {
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #fff;
          text-align: center;
          letter-spacing: 0.05em;
        }
        
        .plan-price {
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .price-amount {
          font-size: 2.5rem;
          font-weight: 700;
          color: #dc2626;
          font-family: 'Times New Roman', serif;
        }
        
        .price-period {
          color: #6b7280;
          margin-left: 0.25rem;
          font-family: 'Times New Roman', serif;
        }
        
        .plan-features {
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        
        .feature-item {
          margin-bottom: 0.5rem;
          color: #9ca3af;
          display: flex;
          align-items: center;
          font-family: 'Times New Roman', serif;
        }
        
        .list-icon {
          color: #dc2626;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }
        
        .select-plan-button {
          background-color: #000;
          color: #fff;
          padding: 0.5rem 1rem;
          font-family: 'Times New Roman', serif;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: background-color 0.3s;
          border: 1px solid #7f1d1d;
        }
        
        .select-plan-button:hover {
          background-color: #450a0a;
        }
        
        .select-plan-button.highlighted {
          background-color: #dc2626;
          border: none;
        }
        
        .select-plan-button.highlighted:hover {
          background-color: #b91c1c;
        }
        
        /* Call to Action Section */
        .cta-section {
          padding: 5rem 0;
          background: linear-gradient(to bottom, #000, rgba(127, 29, 29, 0.5));
          text-align: center;
        }
        
        .cta-container {
          max-width: 48rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .cta-title {
          font-family: 'Times New Roman', serif;
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #dc2626;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        
        .cta-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 2rem;
          font-family: 'Times New Roman', serif;
          letter-spacing: 0.05em;
        }
        
        .cta-button-large {
          background-color: #dc2626;
          color: #fff;
          padding: 1rem 2.5rem;
          font-size: 1.25rem;
          font-family: 'Times New Roman', serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: background-color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .cta-button-large:hover {
          background-color: #b91c1c;
        }
        
        .cta-button-large .button-icon {
          margin-left: 0.5rem;
        }
        
        @media (min-width: 768px) {
          .cta-title {
            font-size: 4rem;
          }
        }
        
        /* Footer */
        .site-footer {
          padding: 2rem 0;
          border-top: 1px solid rgba(127, 29, 29, 0.3);
          background-color: #000;
          z-index: 20;
        }
        
        .footer-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-logo {
          color: #dc2626;
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        
        .footer-links {
          display: flex;
          gap: 1.5rem;
          color: #6b7280;
        }
        
        .footer-link {
          transition: color 0.2s;
          font-family: 'Times New Roman', serif;
        }
        
        .footer-link:hover {
          color: #dc2626;
        }
        
        .copyright {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          margin-top: 1.5rem;
          text-align: center;
          color: #4b5563;
          font-size: 0.875rem;
          font-family: 'Times New Roman', serif;
        }
        
        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row;
          }
          
          .footer-logo {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}