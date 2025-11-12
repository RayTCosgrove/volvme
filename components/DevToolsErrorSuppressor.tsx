'use client';

import { useEffect } from 'react';

/**
 * Suppresses React DevTools version parsing errors in development
 * This is a known compatibility issue with React 19 and React DevTools extension
 */
export function DevToolsErrorSuppressor() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Suppress React DevTools version parsing errors
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = function (...args: any[]) {
      const message = args[0];
      if (
        typeof message === 'string' &&
        (message.includes('Invalid argument not valid semver') ||
          message.includes('react_devtools_backend') ||
          message.includes('validateAndParse'))
      ) {
        return; // Suppress this specific error
      }
      originalError.apply(console, args);
    };

    console.warn = function (...args: any[]) {
      const message = args[0];
      if (
        typeof message === 'string' &&
        (message.includes('Invalid argument not valid semver') ||
          message.includes('react_devtools_backend'))
      ) {
        return; // Suppress this specific warning
      }
      originalWarn.apply(console, args);
    };

    // Also catch unhandled errors
    const handleError = (event: ErrorEvent) => {
      if (
        event.message?.includes('Invalid argument not valid semver') ||
        event.message?.includes('react_devtools_backend')
      ) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      window.removeEventListener('error', handleError);
    };
  }, []);

  return null;
}

