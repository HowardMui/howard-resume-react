import 'assets/scss/Containers/HomeContainer/HomeContainer.scss';
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useAnimate,
  useInView,
} from 'framer-motion';
import { ReactComponent as CpuIcon } from 'assets/icons/home-cpu-no-clock.svg';
// import CodingGif from 'assets/gif/coding_cpu.gif';
import DesktopGif from 'assets/gif/desktop-nobg.gif';
import OldDesktopGif from 'assets/gif/old_desktop_9.gif';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';
import { NavBarType } from 'models';

interface Props {
  setActive: (value: NavBarType | null) => void;
}

const HomeContainer = ({ setActive }: Props) => {
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

  // const ref = useRef<HTMLDivElement>(null);
  // const isVisible = useOnScreen(ref);

  // useEffect(() => {
  //   // console.log('home', isVisible);
  //   // if (isVisible) {
  //   //   setActive(null);
  //   // }
  // }, [isVisible, setActive]);

  // const [scope, animate] = useAnimate();
  // const isInView = useInView(scope);

  // useEffect(() => {
  //   // console.log(idName, isInView);
  //   // console.log(isInView);
  //   if (isInView) {
  //     setActive(null);
  //   }
  // }, [animate, isInView, scope, setActive]);

  const myDivRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (myDivRef.current) {
      observer.observe(myDivRef.current);
    }

    return () => {
      if (myDivRef.current) {
        observer.unobserve(myDivRef.current);
      }
    };
  }, [myDivRef]);

  useMemo(() => {
    if (isVisible) {
      setActive(null);
    } else {
      setActive(null);
    }
  }, [isVisible, setActive]);

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
            {/* <CodingGif width={450} height={450} /> */}
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
