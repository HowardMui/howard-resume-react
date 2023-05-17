import 'assets/scss/Containers/HomeContainer/HomeContainer.scss';
import { motion } from 'framer-motion';
import { ReactComponent as CpuIcon } from 'assets/icons/home-cpu-no-clock.svg';
// import CodingGif from 'assets/gif/coding_cpu.gif';
import DesktopGif from 'assets/gif/desktop-nobg.gif';
import OldDesktopGif from 'assets/gif/old_desktop_9.gif';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';
import { NavBarType } from 'models';

interface Props {
  setActive: (value: NavBarType | null) => void;
}

const HomeContainer = ({ setActive }: Props) => {
  const myDivRef = useRef(null);

  const isIntersecting = useOnScreen({ ref: myDivRef });

  useEffect(() => {
    if (isIntersecting) {
      setActive(null);
    }
  }, [isIntersecting, setActive]);

  return (
    <div className="home-container" ref={myDivRef}>
      <Container>
        <Row>
          <Col lg={6} className="left-div d-flex align-items-center">
            <div className="content-wrapper">
              <div className="job-title ">FRONTEND DEVELOPER</div>
              <h1 className="my-name">Howrad Mui</h1>
              <div className="fs-5 text-muted">
                A programming enthusiast with the aspiration of being a
                full-stack developer
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="right-div d-flex justify-content-end align-items-end "
          >
            {/* <img src={DesktopGif} alt="desktop" className="gif-div" /> */}
            <img src={OldDesktopGif} alt="desktop" className="gif-div" />
          </Col>
        </Row>
      </Container>

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
