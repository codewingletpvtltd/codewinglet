'use client';
import { useEffect, useState } from 'react';

const useScreenSize = (query: string) => {
  const [matches, setMatches] = useState<any>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
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
