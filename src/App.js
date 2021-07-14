import './App.css';
import BillForm from './component/BillForm'
import { Container, Modal, Button, Card, Accordion } from 'react-bootstrap';
import Header from './component/Header';
import React, { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />
      <Container>

        <Card body>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" style={{ display: 'flex', justifyContent: 'center' }}>
                Bill Form
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body><BillForm /></Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" style={{ display: 'flex', justifyContent: 'center' }}>
                Bills List
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
      </Container>
    </>
  );
}

export default App;
