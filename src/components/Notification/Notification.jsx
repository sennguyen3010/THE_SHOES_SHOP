import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export default function Notification() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState('top-start');

  return (
    <div className="position-relative">
      {/* <Row>
    <Col xs={6}> */}
      <Toast position="top-end" onClose={() => setShow(false)} show={show} delay={6000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
      {/* </Col>
    <Col xs={6}> */}
      <Button onClick={() => setShow(true)}>Show Toast</Button>
      {/* </Col>
    </Row> */}
    </div>
  );
}
