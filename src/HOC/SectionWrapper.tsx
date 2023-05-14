import { motion, useAnimate, useInView } from 'framer-motion';
import { useOnScreen } from 'hooks/useOnScreen';
import { NavBarType } from 'models';
import { useEffect, useRef } from 'react';
import { staggerContainer } from 'utils/motion';

interface Props {
  // Component: ,
  setActive: (active: NavBarType | null) => void;
}

const StarWrapper = (Component, idName) =>
  function HOC({ setActive }: Props) {
    const ref = useRef(null);
    const isIntersecting = useOnScreen({ ref: ref });

    useEffect(() => {
      if (isIntersecting) {
        setActive(idName);
      }
    }, [isIntersecting, setActive]);

    // const [scope, animate] = useAnimate();
    // const isInView = useInView(scope);

    // useEffect(() => {
    //   if (isInView) {
    //     setActive(idName);
    //   }
    // }, [animate, isInView, scope, setActive]);

    return (
      <motion.section
        // variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-200px' }}
        className="section-wrapper-container"
        id={idName}
        // ref={scope}
        ref={ref}
      >
        <span
          className="hash-span"
          style={{ paddingBottom: '100px', marginBottom: '100px' }}
        >
          &nbsp;
        </span>

        <Component setActive={setActive} />
      </motion.section>
    );
  };

export default StarWrapper;
