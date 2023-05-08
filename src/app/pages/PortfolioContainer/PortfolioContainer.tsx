import { SectionWrapper } from 'HOC';
import ProjectCard from 'app/components/Portfolio/ProjectCard';
import { PORTFOLIO_DATA } from 'constant';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'assets/scss/Containers/PortfolioContainer/PortfolioContainer.scss';
import { OptionItems, PortfolioData, WorkCategories } from 'models';
import {
  AnimatePresence,
  Variants,
  motion,
  useAnimate,
  useInView,
} from 'framer-motion';
import { fadeIn, fadeInFromTop } from 'utils/motion';

const TabsArray: OptionItems[] = [
  { label: 'All', value: 'all' },
  { label: 'my work', value: 'my-work' },
  { label: 'Appicidea', value: 'appicidea' },
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

const PortfolioContainer = () => {
  const [data, setData] = useState<PortfolioData[]>(PORTFOLIO_DATA);
  const [tab, setTab] = useState<WorkCategories>('all');
  //   const [scope, animate] = useAnimate();
  //   const isInView = useInView(scope);

  //   useEffect(() => {
  //     if (isInView) {
  //       console.log(123);
  //       //   animate(scope.current, { width: `${skill.percentage}%` });
  //     }
  //   }, [animate, isInView, scope]);

  const tabOnClick = (tab: OptionItems) => {
    setTab(tab.value as WorkCategories);

    switch (tab.value) {
      case 'all':
        setData(PORTFOLIO_DATA);
        break;
      default:
        setData(
          PORTFOLIO_DATA.filter(
            item => item.category === (tab.value as WorkCategories),
          ),
        );
    }
  };

  //   console.log(isInView);
  //   console.log(scope);

  return (
    <div className="portfolio-container">
      <motion.div variants={fadeInFromTop()}>
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
                {/* <motion.div
                // key={`${myWork.title}`}
                variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
              > */}
                <motion.div
                  layout
                  className="cus-card"
                  key={`${myWork.title}`}
                  initial={'initial'}
                  // initial={`${isInView && 'initial'}`}
                  // animate={`${isInView && '"animate"'}`}
                  animate="animate"
                  exit="exit"
                  variants={cardVarient(index)}
                >
                  <ProjectCard data={myWork} index={index} />
                  {/* </motion.div> */}
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(PortfolioContainer, '');
