import { SectionWrapper } from 'HOC';
import { MySkillFlipCard } from 'app/components';

import { MY_SKILL_FLIP_CARD_DATA } from 'constant';
import { motion } from 'framer-motion';

import { fadeIn, fadeInFromTop } from 'utils/motion';
import 'assets/scss/Containers/AboutContainer/AboutContainer.scss';

type Props = {};

const AboutContainer = (props: Props) => {
  return (
    <div className="about-container">
      <motion.div variants={fadeInFromTop()} className="mb-5">
        <p>Introduction</p>
        <h2>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.5, 1)}
        className="mb-5"
        style={{ marginRight: '30%', letterSpacing: 1 }}
      >
        With high motivation and perseverance, I was an Engineer of Digital
        Operation Centre at Resolve Technology Limited. Inspired by the previous
        job, I have been self-learning languages of programming for more than
        one year. Despite my degree in Social Science, I have still managed to
        develop my own website from scratch with my knowledge of programming.
        Now, my goal is to become a website developer and I will keep working on
        it till the end.
      </motion.p>
      <div className="flip-container">
        {MY_SKILL_FLIP_CARD_DATA.map((card, index) => (
          <motion.div
            className=""
            key={index}
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
          >
            <MySkillFlipCard cardData={card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AboutContainer, '');
