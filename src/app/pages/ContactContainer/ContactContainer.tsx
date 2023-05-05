import ContactFormCard from 'app/components/Contact/ContactFormCard';
import LeftSideContainer from 'app/components/Contact/LeftSideContainer';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactContainer = () => {
  return (
    <div className="">
      <h2 className={`text-center`}>Contact</h2>
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
