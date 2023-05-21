import { useInView } from 'framer-motion';
import { Suspense, useRef } from 'react';

const LazyloadWrapper = Component => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {isInview ? <Suspense fallback={<div>Loading...</div>}></Suspense> : null}
    </div>
  );
};
