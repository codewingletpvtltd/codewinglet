import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';

// Global store to manage pending updates across multiple instances
const pendingUpdatesStore: Record<string, string | undefined> = {};

/**
 * Custom hook to manage URL parameters as independent states in a Next.js application using the App Router.
 *
 * @param {string} paramKey - The key of the URL parameter to manage.
 * @param {number} debounceTime - The debounce delay in milliseconds for batching updates (default: 300ms).
 * @returns {object} An object containing two functions: `getParamValue` to retrieve the current parameter value from the URL,
 * and `setParamValue` to update or remove the parameter in the URL.
 */
export const useUrlParamState = (paramKey: string, debounceTime = 300) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [paramValue, setParamValueState] = useState<string | undefined>(
    undefined
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync local state with the specific URL parameter on initial load and URL changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const value = params.get(paramKey) || undefined;
    setParamValueState(value);
    pendingUpdatesStore[paramKey] = value;
  }, [searchParams, paramKey]);

  /**
   * Batched update for the URL and all parameter states.
   *
   * @param {string | undefined} newValue - The new value to set for the URL parameter, or undefined to remove it.
   */
  const setParamValue = useCallback(
    (newValue: string | undefined) => {
      // Update the global pending updates store for this specific parameter
      pendingUpdatesStore[paramKey] = newValue;

      // If there's already a pending timeout, clear it to reset the timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout for batching updates
      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(searchParams.toString());

        // Apply all pending updates from the global store
        Object.entries(pendingUpdatesStore).forEach(([key, value]) => {
          if (value) {
            params.set(key, value);
          } else {
            params.delete(key);
          }
        });

        // Create the new query string
        const newQuery = params.toString();

        router.replace(`${pathname}${newQuery ? `?${newQuery}` : ''}`, {
          scroll: false,
        });

        // Update the local state with the value for this specific parameter
        setParamValueState(newValue || undefined);
      }, debounceTime);
    },
    [paramKey, pathname, router, searchParams, debounceTime]
  );

  return { getParamValue: paramValue, setParamValue };
};
