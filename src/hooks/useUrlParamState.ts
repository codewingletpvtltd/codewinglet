import { useSearchParams, useRouter, usePathname } from 'next/navigation';

/**
 * Custom hook to manage a URL parameter as a state in a Next.js application using the App Router.
 *
 * @param {string} paramKey - The key of the URL parameter to manage.
 * @returns {object} An object containing two functions: `getParamValue` to retrieve the current parameter value from the URL,
 * and `setParamValue` to update the parameter in the URL.
 */
export const useUrlParamState = (paramKey: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  /**
   * Retrieve the current value of the URL parameter.
   *
   * @returns {string | undefined} The value of the parameter, or `undefined` if the parameter does not exist.
   */
  const getParamValue = (): string | undefined =>
    params.get(paramKey) || undefined;

  /**
   * Set or update the value of the URL parameter.
   *
   * @param {string} newValue - The new value to set for the URL parameter.
   */
  const setParamValue = (newValue: string) => {
    // Update the query parameter
    params.set(paramKey, newValue);

    // Create the new query string
    const newQuery = params.toString();

    // Update the URL without using the window object
    router.push(`${pathname}?${newQuery}`);
  };

  return { getParamValue, setParamValue };
};
