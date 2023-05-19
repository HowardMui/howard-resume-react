import { motion, useInView } from 'framer-motion';
import ContactFormCard from 'app/components/Contact/ContactFormCard';

import { Container } from 'react-bootstrap';
import 'assets/scss/Containers/ContactContainer/ContactContainer.scss';

import { useEffect, useRef } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';
import { NavBarType } from 'models';
import { fadeInFromTop } from 'utils/motion';

interface Props {
  setActive: (value: NavBarType) => void;
}

const ContactContainer = ({ setActive }: Props) => {
  const myDivRef = useRef(null);

  const isIntersecting = useOnScreen({ ref: myDivRef });

  useEffect(() => {
    if (isIntersecting) {
      setActive('contact');
    }
  }, [isIntersecting, setActive]);

  return (
    <motion.section
      variants={fadeInFromTop()}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true }}
      className="contact-container"
      id="contact"
      ref={myDivRef}
    >
      <p className={`text-center`}>Get in touch.</p>
      <h2 className={`title-div title-margin text-center`}>Contact</h2>
      <Container className="innerWrapper">
        <ContactFormCard />
      </Container>
    </motion.section>
  );
};

export default ContactContainer;
