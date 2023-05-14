import 'assets/scss/Containers/HomeContainer/HomeContainer.scss';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { ReactComponent as CpuIcon } from 'assets/icons/home-cpu-no-clock.svg';
import { Col, Row } from 'react-bootstrap';

const HomeContainer = props => {
  // const options = useMemo(() => {
  //   return {
  //     particles: {
  //       link: {
  //         enabled: true,
  //       },
  //       move: {
  //         enabled: true,
  //       },
  //       size: {
  //         value: { min: 1, max: 1 },
  //       },
  //     },
  //   };
  // }, []);

  return (
    <div className="home-container">
      <Row>
        <Col lg={6} className="left-div d-flex align-items-center gy-3">
          <div className="content-wrapper">
            <div className="job-title ">FRONTEND DEVELOPER</div>
            <h1 className="my-name">Howrad Mui</h1>
            <div className="fs-5 text-muted">
              A Person who is about Programming and aspired to ba a full stack
              developer
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          className="right-div d-flex justify-content-end align-items-end "
        >
          <CpuIcon width={450} height={450} />
        </Col>
      </Row>

      <div className="link-to-about xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="inner-ball-wrapper p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="infinity-scroll-ball mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomeContainer;
