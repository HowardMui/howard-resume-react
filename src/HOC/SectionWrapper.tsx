import { motion } from 'framer-motion';
import { staggerContainer } from 'utils/motion';

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        // variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-200px' }}
        className="section-wrapper-container"
        id={idName}
      >
        <span
          className="hash-span"
          style={{ paddingBottom: '100px', marginBottom: '100px' }}
        >
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
