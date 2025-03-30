"use client";
import React, { useState, useEffect } from 'react';
import { FaFire, FaSkull, FaLink, FaAngleRight } from 'react-icons/fa';
import { GiHornedHelm, GiDevilMask } from 'react-icons/gi';
import Link from 'next/link';
import "@/app/globals.css"


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
      <div className="fixed inset-0 bg-red-900 flex items-center justify-center z-50">
        <div className="w-24 h-24 relative animate-pulse">
          {/* Minimalist fire icon in black */}
          <FaFire className="w-full h-full text-black" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative font-serif">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-0 opacity-25" 
        style={{ 
          backgroundImage: "url('/images/dark-texture.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      {/* Subtle ember animation */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {emberPosition.map((ember, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-orange-400 opacity-40"
            style={{
              left: `${ember.x}%`,
              top: `${ember.y}%`,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              transition: 'top 0.5s ease-out, left 0.5s ease-out',
              filter: 'blur(1px)'
            }}
          ></div>
        ))}
      </div>

      <main className="flex-grow z-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black"></div>
          
          <div className="container mx-auto px-6 z-10 text-center">
            {/* Added more spacing between characters in the logo */}
            <h1 className="font-gothic text-7xl md:text-9xl mb-4 text-red-600 font-bold tracking-widest">AMPLIFIRE</h1>
            <p className="font-serif text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 font-light tracking-wide">
              Unleash the power of sound. Your music, amplified.
            </p>
            
            <button 
              onClick={handleDescend}
              className="group relative bg-red-800 hover:bg-red-900 text-white py-3 px-8 rounded-sm font-cinzel text-lg uppercase tracking-wider transition-all duration-300 overflow-hidden border border-red-600"
            >
              <span className="relative z-10 flex items-center">
                DESCEND NOW
                <FaFire className="ml-2" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black via-black/95 to-black border-t border-red-900/30">
          <div className="container mx-auto px-6">
            {/* Added more spacing between characters */}
            <h2 className="font-gothic text-4xl md:text-5xl mb-16 text-center text-red-600 font-bold tracking-widest">F E A T U R E S</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "PREMIUM AUDIO",
                  description: "Experience exceptional sound quality with our advanced audio processing technology.",
                  icon: <FaFire className="text-red-500 text-4xl" />
                },
                {
                  title: "CUSTOM PLAYLISTS",
                  description: "Create custom playlists that match your every mood, from intense to serene.",
                  icon: <GiHornedHelm className="text-red-500 text-4xl" />
                },
                {
                  title: "OFFLINE MODE",
                  description: "Take your music anywhere with our powerful offline capabilities.",
                  icon: <FaLink className="text-red-500 text-4xl" />
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 border border-red-900/50 bg-black/70 hover:bg-red-950/30 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-white tracking-widest">{feature.title}</h3>
                  <p className="text-gray-400 font-garamond">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-black border-t border-red-900/30">
          <div className="container mx-auto px-6">
            {/* Added more spacing between characters */}
            <h2 className="font-gothic text-4xl md:text-5xl mb-16 text-center text-red-600 font-bold tracking-widest">SELECT  YOUR  PLAN</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  icon: <FaSkull className="text-red-500 text-3xl" />
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
                  icon: <GiHornedHelm className="text-red-500 text-3xl" />
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
                  icon: <GiDevilMask className="text-red-500 text-3xl" />
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col p-8 border ${plan.highlighted ? 'border-red-600 bg-gradient-to-b from-red-950/40 to-black' : 'border-red-900/30 bg-black'} relative group`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-0 right-0 text-center">
                      <span className="bg-red-600 text-white text-sm py-1 px-3 font-cinzel tracking-wider">MOST POPULAR</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  
                  <h3 className="font-cinzel text-2xl font-bold mb-2 text-white text-center tracking-widest">{plan.name}</h3>
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-red-600 font-gothic">{plan.price}</span>
                    <span className="text-gray-500 ml-1 font-garamond">{plan.period}</span>
                  </div>
                  
                  <ul className="mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2 text-gray-400 flex items-center font-garamond">
                        <FaAngleRight className="text-red-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`
                    ${plan.highlighted ? 'bg-red-600 hover:bg-red-700' : 'bg-black hover:bg-red-950 border border-red-900'} 
                    text-white py-2 px-4 font-cinzel font-medium tracking-wide transition-colors duration-300
                  `}>
                    SELECT PLAN
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-black to-red-950/50 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            {/* Added more spacing between characters */}
            <h2 className="font-gothic text-5xl md:text-6xl mb-6 text-red-600 font-bold tracking-widest">AMPLIFY  YOUR  EXPERIENCE</h2>
            <p className="text-xl text-gray-300 mb-8 font-garamond tracking-wide">
              Join thousands who have elevated their music experience.
            </p>
            <button 
              onClick={handleDescend}
              className="bg-red-600 hover:bg-red-700 text-white py-4 px-10 text-xl font-cinzel uppercase tracking-wider transition-colors duration-300 flex items-center justify-center mx-auto"
            >
              Begin Your Journey
              <FaFire className="ml-2" />
            </button>
          </div>
        </section>
      </main>
      
      <footer className="py-8 border-t border-red-900/30 bg-black z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Added more spacing to logo in footer */}
          <div className="text-red-600 font-gothic text-2xl mb-4 md:mb-0 font-bold tracking-widest">A M P L I F I R E</div>
          
          <div className="flex space-x-6 text-gray-500">
            <Link href="#" className="hover:text-red-600 transition-colors duration-200 font-garamond">Privacy</Link>
            <Link href="#" className="hover:text-red-600 transition-colors duration-200 font-garamond">Terms</Link>
            <Link href="#" className="hover:text-red-600 transition-colors duration-200 font-garamond">Support</Link>
            <Link href="#" className="hover:text-red-600 transition-colors duration-200 font-garamond">Contact</Link>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-6 text-center text-gray-600 text-sm font-garamond">
          © 2025 Amplifire. All rights reserved.
        </div>
      </footer>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pirata+One&display=swap');
        
        :root {
          --font-garamond: 'EB Garamond', serif;
          --font-cinzel: 'Cinzel', serif;
          --font-gothic: 'Pirata One', cursive;
        }
        
        body {
          font-family: var(--font-garamond);
        }
        
        .font-garamond {
          font-family: var(--font-garamond);
        }
        
        .font-cinzel {
          font-family: var(--font-cinzel);
        }
        
        .font-gothic {
          font-family: var(--font-gothic);
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Added letter-spacing for gothic text elements */
        .font-gothic {
          letter-spacing: 0.10em;
        }
      `}</style>
    </div>
  );
}