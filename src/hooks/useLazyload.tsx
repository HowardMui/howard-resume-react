import { useInView } from 'framer-motion';
import { NavBarType } from 'models';
import { useRef, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

interface Props {
  setActive: (active: NavBarType | null) => void;
  ref: any;
}

const useLazyLoad = (Component, props: Props) => {
  const { ref } = props;
  const isInview = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {isInview && (
        <Suspense
          fallback={
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: '200px' }}
            >
              <Spinner />
            </div>
          }
        >
          <Component {...props} />
        </Suspense>
      )}
    </div>
  );
};

export default useLazyLoad;
