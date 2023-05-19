import React from 'react';
import { Col, Row } from 'react-bootstrap';

const LeftSideContainer = () => {
  return (
    <>
      <div className="card"></div>

      <Row>
        <Col md={6}>
          <div className="card"></div>
        </Col>
        <Col md={6}>
          <div className="card"></div>
        </Col>
      </Row>
    </>
  );
};

export default LeftSideContainer;
