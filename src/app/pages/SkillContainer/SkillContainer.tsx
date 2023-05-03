import React from 'react';
import { motion } from 'framer-motion';
import { fadeInFromTop } from 'utils/motion';
import { SectionWrapper } from 'HOC';

import { MY_SKILL_SET } from 'constant';
import { ProgressBar } from 'app/components';
import { Col, Row } from 'react-bootstrap';

const SkillContainer = () => {
  return (
    <>
      <div style={{ marginBottom: '100px' }}>
        <motion.div variants={fadeInFromTop()}>
          <h2 className={` text-center`}>My skill set</h2>
        </motion.div>
      </div>
      <Row>
        {MY_SKILL_SET.map(skill => (
          <Col md={6}>
            <ProgressBar skill={skill} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SectionWrapper(SkillContainer, '');
