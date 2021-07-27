import './App.css';
import BillForm from './component/BillForm'
import { Container, Card, Accordion, Col, Row, Button } from 'react-bootstrap';
import Header from './component/Header';
import React, { useState } from 'react';
import BillTable from './component/BillTable';
import BillModal from './component/BillModal';

function App() {

  const [show, setShow] = useState(false);
  const handleShow = () => { setShow(true) };
  const handleClose = () => { console.log("hello"); setShow(false) };

  const initialValues = {
    buyerName: '',
    buyerCompany: '',
    buyerAddress: '',
    quantity: '',
    price: '',
    itemName: '',
    bag: '',
    vehicleNumber: '',
    vehicleFreight: ''
  };

  return (
    <>
      <Header />
      <BillModal show={show} handleClose={handleClose} initialValues={initialValues} />
      {show}
      <Container>
        <Card>
          <Row>
            <Col>
              <h2 className="text-right">Last 10 records</h2>
            </Col>
            <Col className="text-right">
              <Button onClick={handleShow}>Add Invoice</Button>
            </Col>
          </Row>

          <BillTable />
        </Card>
      </Container>
    </>
  );
}

export default App;
