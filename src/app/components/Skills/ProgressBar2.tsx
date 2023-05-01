import { motion, animate, useInView, useAnimate } from 'framer-motion';
import 'assets/scss/Components/Skills/ProgressBar.scss';
import { useEffect } from 'react';

export const ProgressBar2 = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  //   console.log(isInView);
  //   console.log(animate);

  useEffect(() => {
    // console.log(scope.current);
    if (isInView) {
      animate(scope.current, { width: '50%' });
    }
  }, [animate, isInView, scope]);

  return (
    <div className="progress-bar-container">
      <div className="inner-bar bg-warning" ref={scope}></div>
    </div>
  );
};
