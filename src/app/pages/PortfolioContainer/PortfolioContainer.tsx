import { SectionWrapper } from 'HOC';
import ProjectCard from 'app/components/Portfolio/ProjectCard';
import { PORTFOLIO_DATA } from 'constant';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'assets/scss/Containers/PortfolioContainer/PortfolioContainer.scss';
import { NavBarType, OptionItems, PortfolioData, WorkCategories } from 'models';
import {
  AnimatePresence,
  Variants,
  motion,
  useAnimate,
  useInView,
} from 'framer-motion';
import { fadeIn, fadeInFromTop } from 'utils/motion';
import { useOnScreen } from 'hooks/useOnScreen';

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

interface Props {
  setActive: (valve: NavBarType | null) => void;
}

const PortfolioContainer = ({ setActive }: Props) => {
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

  const myDivRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  const isIntersecting = useOnScreen({ ref: myDivRef, threshold: 0.2 });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // console.log(entry);
  //       setIsVisible(entry.isIntersecting);
  //     },
  //     {
  //       rootMargin: '0px',
  //       threshold: 0.2,
  //     },
  //   );

  //   if (myDivRef.current) {
  //     observer.observe(myDivRef.current);
  //   }

  //   return () => {
  //     if (myDivRef.current) {
  //       observer.unobserve(myDivRef.current);
  //     }
  //   };
  // }, [myDivRef]);

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
          PORTFOLIO_DATA.filter(
            item => item.category === (tab.value as WorkCategories),
          ),
        );
    }
  };

  //   console.log(isInView);
  //   console.log(scope);

  return (
    <motion.section
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-200px' }}
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
    </motion.section>
  );
};

export default PortfolioContainer;
