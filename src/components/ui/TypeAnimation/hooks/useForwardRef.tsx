import { ForwardedRef, MutableRefObject, useEffect, useRef } from 'react';

const useForwardRef = <T,>(
  ref: ForwardedRef<T>,
  initialValue: any = null
): MutableRefObject<T> => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

export default useForwardRef;
