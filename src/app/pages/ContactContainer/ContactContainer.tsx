import ContactFormCard from 'app/components/Contact/ContactFormCard';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactContainer = () => {
  return (
    <div className="">
      <h2 className={`text-center`}>Contact</h2>
      <Row>
        <Col md={6}></Col>
        <Col md={6}>
          <ContactFormCard />
        </Col>
      </Row>
    </div>
  );
};

export default ContactContainer;
