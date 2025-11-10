"use client";

import Image from "next/image";
import { useMemo, useState, useCallback, useEffect } from "react";
import { ScramblingText } from "@/components/ScramblingText";

const latinPhrases = [
  "Venit",
  "Carpe diem",
  "Alea iacta est",
  "Brute",
  "Tempus",
  "Vox populi",
  "Ad astra",
  "Per aspera",
  "Veni vidi vici",
  "Et tu",
  "Cogito ergo sum",
  "Memento mori",
  "Ave",
  "Virtus",
  "Fortuna",
];

export default function Home() {
  const [showTrademark, setShowTrademark] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const handleScrambleComplete = useCallback(() => {
    setShowTrademark(true);
  }, []);

  useEffect(() => {
    if (showTrademark) {
      // Delay email input animation slightly after trademark appears
      const timer = setTimeout(() => {
        setShowEmailInput(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showTrademark]);
  
  const latinTextPositions = useMemo(() => {
    return latinPhrases.map((_, index) => {
      // Use index as seed for consistent positioning
      const seed = index * 0.618033988749895; // Golden ratio for better distribution
      const top = ((seed * 100) % 100);
      const left = (((seed * 1.618) * 100) % 100);
      const rotation = ((seed * 360) % 360);
      const opacity = 0.15 + ((seed * 0.1) % 0.1);
      const fontSize = 0.75 + ((seed * 0.5) % 0.5);
      
      return {
        top: `${top}%`,
        left: `${left}%`,
        rotation: `${rotation}deg`,
        opacity,
        fontSize: `${fontSize}rem`,
      };
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden dither-bg">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Latin Text Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {latinPhrases.map((phrase, index) => {
          const position = latinTextPositions[index];
          return (
            <div
              key={index}
              className="absolute text-white/20 font-mono whitespace-nowrap"
              style={{
                top: position.top,
                left: position.left,
                transform: `rotate(${position.rotation})`,
                opacity: position.opacity,
                fontSize: position.fontSize,
              }}
            >
              {phrase}
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <main className="relative min-h-screen flex items-center justify-center z-20">
        {/* Left Column */}
        {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-40">
          <Image 
            src="/images/asciiColumn.png" 
            alt="Roman Column" 
            width={300} 
            height={600}
            className="object-contain"
          />
        </div> */}

        {/* Right Column */}
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-40">
          <Image 
            src="/images/asciiColumn.png" 
            alt="Roman Column" 
            width={300} 
            height={600}
            className="object-contain"
          />
        </div> */}

        {/* Top Hand - Upper Right */}
        <div className="absolute top-2 -right-20 opacity-80 z-30 animate-hand-top">
          <Image 
            src="/images/tophand.png" 
            alt="Top Hand" 
            width={650} 
            height={650}
            className="object-contain"
          />
        </div>

        {/* Bottom Hand - Lower Left */}
        <div className="absolute bottom-2 -left-20 opacity-80 z-30 animate-hand-bottom">
          <Image 
            src="/images/bottomhand.png" 
            alt="Bottom Hand" 
            width={650} 
            height={650}
            className="object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-40 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-rvstica relative">
            <ScramblingText text="VOLVME" onComplete={handleScrambleComplete} />
            <span className={`absolute -right-6 sm:-right-8 md:-right-10 lg:-right-12 top-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono transition-opacity duration-500 ${showTrademark ? 'opacity-100' : 'opacity-0'}`}>™</span>
          </h1>
        </div>

        {/* Email Input - Bottom Right */}
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${showEmailInput ? 'animate-email-slide-in' : 'opacity-0 translate-x-full'}`}>
          <input
            type="email"
            placeholder="email"
            className="bg-transparent border-b border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors duration-200 px-2 pb-2 text-xs sm:text-sm font-mono w-48 sm:w-64 transition-all duration-300"
          />
        </div>
          
      </main>
    </div>
  );
}
