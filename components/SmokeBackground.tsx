'use client';

import { memo, useRef, useEffect } from 'react';
import { Smoke } from '@/components/ui/shadcn-io/smoke';

/**
 * Memoized smoke background component that only initializes once
 * Prevents re-initialization on parent re-renders
 */
const SmokeBackground = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize props to prevent prop changes from causing re-renders
  const smokeProps = {
    density: 80,
    color: "#cccccc",
    opacity: 0.035,
    enableRotation: true,
    enableWind: true,
    windStrength: [0.02, 0.01, 0.01] as [number, number, number],
    enableTurbulence: true,
    turbulenceStrength: [0.02, 0.02, 0.01] as [number, number, number],
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      <Smoke {...smokeProps} />
    </div>
  );
});

SmokeBackground.displayName = 'SmokeBackground';

export default SmokeBackground;

