import ProjectCard from 'app/components/Portfolio/ProjectCard';
import { PORTFOLIO_DATA } from 'constant';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'assets/scss/Containers/PortfolioContainer/PortfolioContainer.scss';
import { NavBarType, OptionItems, PortfolioData, WorkCategories } from 'models';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { fadeIn, fadeInFromTop } from 'utils/motion';
import { useOnScreen } from 'hooks/useOnScreen';

const TabsArray: OptionItems[] = [
  { label: 'All', value: 'all' },
  { label: 'frontend', value: 'frontend' },
  { label: 'backend', value: 'backend' },
];

const cardVarient = (index): Variants => {
  return {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: index * 0.15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };
};

interface Props {
  setActive: (valve: NavBarType | null) => void;
}

const PortfolioContainer = ({ setActive }: Props) => {
  const [data, setData] = useState<PortfolioData[]>(PORTFOLIO_DATA);
  const [tab, setTab] = useState<WorkCategories>('all');

  const myDivRef = useRef(null);

  const isIntersecting = useOnScreen({ ref: myDivRef, threshold: 0.2 });

  useEffect(() => {
    if (isIntersecting) {
      setActive('portfolio');
    }
  }, [isIntersecting, setActive]);

  const tabOnClick = (tab: OptionItems) => {
    setTab(tab.value as WorkCategories);

    switch (tab.value) {
      case 'all':
        setData(PORTFOLIO_DATA);
        break;

      default:
        setData(
          PORTFOLIO_DATA.filter(item =>
            item.category.includes(tab.value as WorkCategories),
          ),
        );
    }
  };

  // console.log(data);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-200px 0px 0px 0px' }}
      className="section-wrapper-container"
      id={'portfolio'}
      ref={myDivRef}
    >
      <div className="portfolio-container">
        <motion.div variants={fadeInFromTop()}>
          <p className={`text-center`}>My work so far.</p>
          <h2 className={`text-center`}>Portfolio</h2>

          <div className="tabs-div">
            {TabsArray.map((innerTab, index) => (
              <div
                className={`tab ${tab === innerTab.value ? 'active-tab' : ''}`}
                key={index}
                onClick={() => tabOnClick(innerTab)}
              >
                {innerTab.label.toUpperCase()}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeInFromTop()}>
          <Row>
            <AnimatePresence>
              {data.map((myWork, index) => (
                <Col
                  className="d-flex"
                  xxl={4}
                  xl={6}
                  lg={6}
                  key={`${myWork.title}`}
                >
                  <motion.div
                    layout
                    className="cus-card"
                    key={`${myWork.title}`}
                    initial={'initial'}
                    animate="animate"
                    exit="exit"
                    variants={cardVarient(index)}
                  >
                    <ProjectCard data={myWork} index={index} />
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioContainer;
