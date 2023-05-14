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
        console.log(entry);

        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: threshold ? threshold : 0.5,
      },
    );

    console.log(ref);

    if (ref.current) {
      console.log(ref.current);
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        console.log('in return', ref.current);
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};
