'use client';
import { useEffect, useState } from 'react';

const useScreenSize = (query: string): boolean => {
  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleMatchChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleMatchChange);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return matches;
};

export default useScreenSize;
