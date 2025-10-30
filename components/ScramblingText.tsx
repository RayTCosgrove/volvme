"use client";

import { useState, useEffect, useRef } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

interface ScramblingTextProps {
  text: string;
  className?: string;
}

export function ScramblingText({ text, className }: ScramblingTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const hasStartedRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only start animation on client side to avoid hydration mismatch
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // Wait for mount, then start animation
    const startDelay = setTimeout(() => {
      let iterations = 0;
      const maxIterations = 1000;
      const revealDelay = 100; // ms between character reveals

      const interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((letter, index) => {
              if (letter === " ") return " ";
              
              // Reveal characters progressively
              if (iterations > index * 3) {
                return text[index];
              }
              
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join("")
        );

        iterations++;

        if (iterations >= maxIterations + text.length * 3) {
          setDisplayText(text);
          clearInterval(interval);
        }
      }, revealDelay);

      return () => {
        clearInterval(interval);
      };
    }, 250);

    return () => {
      clearTimeout(startDelay);
    };
  }, [text]);

  // Set width on parent elements to prevent layout shift
  useEffect(() => {
    if (!containerRef.current) return;

    // Wait for next frame to ensure styles are applied
    const measureWidth = () => {
      if (!containerRef.current) return;
      
      const h1Element = containerRef.current.parentElement;
      if (!h1Element) return;
      
      // Copy computed styles from the h1 element
      const computedStyle = window.getComputedStyle(h1Element);
      
      // Create a temporary element to measure the final text width with exact same styles
      const temp = document.createElement("span");
      temp.textContent = text;
      temp.style.visibility = "hidden";
      temp.style.position = "absolute";
      temp.style.whiteSpace = "nowrap";
      temp.style.top = "-9999px";
      temp.style.fontSize = computedStyle.fontSize;
      temp.style.fontFamily = computedStyle.fontFamily;
      temp.style.fontWeight = computedStyle.fontWeight;
      temp.style.letterSpacing = computedStyle.letterSpacing;
      temp.style.fontStyle = computedStyle.fontStyle;
      temp.style.textTransform = computedStyle.textTransform;
      
      document.body.appendChild(temp);
      const width = temp.offsetWidth;
      document.body.removeChild(temp);
      
      // Set width on both h1 and its parent wrapper div to prevent layout shift
      if (h1Element) {
        h1Element.style.width = `${width}px`;
        h1Element.style.minWidth = `${width}px`;
      }
      
      // Also set width on the wrapper div (if it exists)
      const wrapperDiv = h1Element.parentElement;
      if (wrapperDiv) {
        wrapperDiv.style.width = `${width}px`;
        wrapperDiv.style.minWidth = `${width}px`;
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(measureWidth);
    });
  }, [text]);

  return (
    <span ref={containerRef} className={className} style={{ display: "inline-block" }}>
      {displayText}
    </span>
  );
}

