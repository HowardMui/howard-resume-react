import { SectionWrapper } from 'HOC';
import ContactFormCard from 'app/components/Contact/ContactFormCard';
import LeftSideContainer from 'app/components/Contact/LeftSideContainer';
import { Col, Container, Row } from 'react-bootstrap';
import 'assets/scss/Containers/ContactContainer/ContactContainer.scss';

import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';
import { NavBarType } from 'models';

interface Props {
  setActive: (value: NavBarType) => void;
}

const ContactContainer = ({ setActive }: Props) => {
  const myDivRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  const isIntersecting = useOnScreen({ ref: myDivRef });

  // console.log(isIntersecting);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting);
  //     },
  //     {
  //       rootMargin: '0px',
  //       threshold: 0.5,
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
      setActive('contact');
    }
  }, [isIntersecting, setActive]);

  return (
    <div className="contact-container" id="contact" ref={myDivRef}>
      <h2 className={`title-div title-margin text-center`}>Contact</h2>

      <Container className="innerWrapper">
        <ContactFormCard />
      </Container>
    </div>
  );
};

export default ContactContainer;
