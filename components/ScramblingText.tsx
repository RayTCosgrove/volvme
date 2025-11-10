"use client";

import { useState, useEffect, useRef } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

interface ScramblingTextProps {
  text: string;
  className?: string;
  onComplete?: () => void;
}

export function ScramblingText({ text, className, onComplete }: ScramblingTextProps) {
  // Initialize with text to avoid hydration mismatch, will scramble on client
  const [scrambledChars, setScrambledChars] = useState<string[]>(() => text.split(""));
  const hasStartedRef = useRef(false);
  const revealOrderRef = useRef<number[]>([]);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only start animation on client side to avoid hydration mismatch
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // Initialize scrambled characters
    const initialChars = text.split("").map((char) => 
      char === " " ? " " : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
    );
    setScrambledChars(initialChars);

    // Create random reveal order
    const indices = text.split("").map((_, i) => i).filter((i) => text[i] !== " ");
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    revealOrderRef.current = indices;

    // Wait for mount, then start animation
    const startDelay = setTimeout(() => {
      const currentRevealed = new Set<number>();
      const revealDelay = 300; // ms between character reveals
      const scrambleInterval = 120; // ms between scramble updates

      // Scramble animation
      const scrambleIntervalId = setInterval(() => {
        setScrambledChars((prev) =>
          prev.map((char, index) => {
            if (char === " " || currentRevealed.has(index)) {
              return char;
            }
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
        );
      }, scrambleInterval);

      // Reveal characters in random order
      let revealIndex = 0;
      const revealIntervalId = setInterval(() => {
        if (revealIndex < revealOrderRef.current.length) {
          const charIndex = revealOrderRef.current[revealIndex];
          currentRevealed.add(charIndex);
          setScrambledChars((prev) => {
            const next = [...prev];
            next[charIndex] = text[charIndex];
            return next;
          });
          revealIndex++;
        } else {
          clearInterval(scrambleIntervalId);
          clearInterval(revealIntervalId);
          if (onComplete) {
            onComplete();
          }
        }
      }, revealDelay);

      return () => {
        clearInterval(scrambleIntervalId);
        clearInterval(revealIntervalId);
      };
    }, 50);

    return () => {
      clearTimeout(startDelay);
    };
  }, [text, onComplete]);

  return (
    <span ref={containerRef} className={className} style={{ display: "inline-flex", letterSpacing: "inherit" }}>
      {scrambledChars.map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            width: char === " " ? "0.3em" : "1em",
            textAlign: "center",
            minWidth: char === " " ? "0.3em" : "1em",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
