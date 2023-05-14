import { SectionWrapper } from 'HOC';
import ContactFormCard from 'app/components/Contact/ContactFormCard';
import LeftSideContainer from 'app/components/Contact/LeftSideContainer';
import { Col, Row } from 'react-bootstrap';
import 'assets/scss/Containers/ContactContainer/ContactContainer.scss';

const ContactContainer = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className={`title-div title-margin text-center`}>Contact</h2>
      <Row>
        <Col md={6}>
          <LeftSideContainer />
        </Col>
        <Col md={6}>
          <ContactFormCard />
        </Col>
      </Row>
    </div>
  );
};

export default ContactContainer;
