import { RefObject, useEffect, useMemo, useState } from 'react';

interface Props {
  ref: RefObject<HTMLElement>;
  threshold?: number;
}

export const useOnScreen = ({ ref, threshold }: Props) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: threshold ? threshold : 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
};
