import { TimeLine } from 'app/components/Experience';
import { MT_JOURNEY } from 'constant';
import { useEffect, useRef, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { MdOutlineAdd } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeInFromTop } from 'utils/motion';
import { useOnScreen } from 'hooks/useOnScreen';
import { NavBarType } from 'models';
import 'assets/scss/Containers/ExperienceContainer/ExperienceContainer.scss';

interface Props {
  setActive: (active: NavBarType | null) => void;
}

const ExperienceContainer = ({ setActive }: Props) => {
  const [timelineIndex, setTimeLineIndex] = useState<number>(3);

  const curTimelineIndex = () => {
    if (timelineIndex < MT_JOURNEY.length) {
      if (timelineIndex + 3 > MT_JOURNEY.length) {
        setTimeLineIndex(MT_JOURNEY.length);
      } else {
        setTimeLineIndex(timelineIndex + 3);
      }
    }
  };

  const myDivRef = useRef(null);

  const isIntersecting = useOnScreen({ ref: myDivRef, threshold: 0.2 });

  useEffect(() => {
    if (isIntersecting) {
      setActive('experience');
    }
  }, [isIntersecting, setActive]);

  return (
    <motion.section
      // variants={staggerContainer()}
      variants={fadeInFromTop()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-200px' }}
      className="section-wrapper-container"
      id={'experience'}
      ref={myDivRef}
    >
      <div className="experience-container">
        <div style={{ marginBottom: '50px' }}>
          <motion.div variants={fadeInFromTop()}>
            <p className={`text-center`}>
              My previous jobs and my qualifications.
            </p>
            <h2 className={`text-center fw-bold`}>
              Education & Work experience{' '}
            </h2>
          </motion.div>
        </div>
        <VerticalTimeline lineColor={'#ffc107'} layout="2-columns">
          {MT_JOURNEY.slice(0, timelineIndex).map((exp, index) => (
            <TimeLine data={exp} key={index} />
          ))}
          {MT_JOURNEY.length !== timelineIndex && (
            <VerticalTimelineElement
              icon={
                <div
                  className="text-white w-100 h-100"
                  style={{ cursor: 'pointer' }}
                >
                  <MdOutlineAdd />
                </div>
              }
              iconOnClick={curTimelineIndex}
              iconStyle={{
                background: '#3f51b5',
                boxShadow:
                  '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
              }}
            />
          )}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default ExperienceContainer;
