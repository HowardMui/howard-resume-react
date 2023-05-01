import React from 'react';
import { motion } from 'framer-motion';
import { fadeInFromTop } from 'utils/motion';
import { SectionWrapper } from 'HOC';

import { ProgressBar2 } from 'app/components/Skills';

const SkillContainer = () => {
  return (
    <>
      <div style={{ marginBottom: '100px' }}>
        <motion.div variants={fadeInFromTop()}>
          <h2 className={` text-center`}>My skill set</h2>
        </motion.div>
      </div>
      <ProgressBar2 />
    </>
  );
};

export default SectionWrapper(SkillContainer, '');
