import { AboutSkillSetData } from 'models';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  cardData: AboutSkillSetData;
}

export const MySkillFlipCard = ({ cardData }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const RenderTitle = (title: string): string => {
    switch (title) {
      case 'web & mobile':
        return 'Website & Mobile Development';
      case 'backend':
        return 'Backend Development';
      case 'devops':
        return 'Devops Enginner';
      default:
        return 'Others';
    }
  };

  return (
    <>
      <motion.div
        className="flipcard-wrapper"
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front */}
        <motion.div
          initial={false}
          animate={{
            rotateY: isFlipped ? 180 : 0,
            transition: {
              duration: 0.25,
            },
          }}
          className="cus-card flipcard front-card"
        >
          <div className="text-center front-inner">
            <div className="image-div ">{cardData.icon}</div>
            <h5 className="title-div">{RenderTitle(cardData.category)}</h5>
          </div>
        </motion.div>

        {/* End */}
        <motion.div
          initial={false}
          animate={{
            rotateY: isFlipped ? 0 : -180,
            transition: {
              duration: 0.25,
            },
          }}
          className="cus-card flipcard back-card"
        >
          {cardData.languages.map((lang, index) => (
            <ul key={index}>
              <li>{lang}</li>
            </ul>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
