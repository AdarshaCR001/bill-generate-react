import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import TableRow from './TableRow';

function BillTable() {
  const [bills, setbills] = useState([])
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    getRecords();
  }, [])
  const getRecords = () => {
    fetch("http://localhost:8080/bill_backend/bill/", requestOptions)
      .then(response => response.text())
      .then(result => { result = JSON.parse(result); setbills(result.content) })
      .catch(error => console.log('error', error));
  }
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Invoice Number</th>
          <th>Buyer Name</th>
          <th>Company Name</th>
          <th>Item Name</th>
          <th>Bag</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Vehicle Number</th>
          <th>Vehicle Freight</th>
          <th>Amount</th>
          <th>Invoice</th>
        </tr>
      </thead>
      <tbody>
        {bills.map(bill => <TableRow key={bill.invoiceNumber} bill={bill} />)}
      </tbody>
    </Table>
  )
}

export default BillTable
