import { SectionWrapper } from 'HOC';
import { MySkillFlipCard } from 'app/components';

import { MY_SKILL_FLIP_CARD_DATA } from 'constant';
import { motion } from 'framer-motion';

import { fadeIn } from 'utils/motion';
import 'assets/scss/Containers/AboutContainer/AboutContainer.scss';
import { useEffect, useRef } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';
import { NavBarType } from 'models';

interface Props {
  setActive: (active: NavBarType | null) => void;
}

const AboutContainer = ({ setActive }: Props) => {
  const myDivRef = useRef(null);

  const isIntersecting = useOnScreen({ ref: myDivRef });

  useEffect(() => {
    if (isIntersecting) {
      setActive('about');
    }
  }, [isIntersecting, setActive]);

  return (
    <motion.section
      variants={fadeIn('right', '', 0.35, 1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true }}
      className="section-wrapper-container"
      id={'about'}
      ref={myDivRef}
    >
      <div className="about-container">
        <motion.div
          variants={fadeIn('right', '', 0.4, 1)}
          className="mb-5 text-center"
        >
          <p className={`text-center`}>Introduction.</p>
          <h2 className="fw-bold">Overview</h2>
        </motion.div>
        <motion.p
          variants={fadeIn('right', '', 0.65, 1)}
          className="mb-5"
          style={{ letterSpacing: 1 }}
        >
          A detail-oriented and self-motivated Frontend Developer with a year of
          experience in creating responsive web applications, mobile
          applications and Content Management System(CMS) using React and React
          Native. A position in which I can continually refine my coding skills,
          learn new technologies and collaborate with teammates to develop
          excellent products is preferred. Being a highly motivated learner, I
          always keep myself well-equipped in order to meet the market needs.
        </motion.p>
        <div className="flip-container">
          {MY_SKILL_FLIP_CARD_DATA.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn('right', 'spring', index * 0.8, 0.5)}
            >
              <MySkillFlipCard cardData={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutContainer;
