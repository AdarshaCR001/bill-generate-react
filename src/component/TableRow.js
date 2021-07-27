import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import BillModal from './BillModal';

function TableRow({ bill }) {

    const initialValues = bill

    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true) };
    const handleClose = () => { console.log("hello"); setShow(false) };
    return (
        <tr>
            <td>{bill.invoiceNumber}</td>
            <td>{bill.buyerName}</td>
            <td>{bill.buyerCompany}</td>
            <td>{bill.itemName}</td>
            <td>{bill.quantity * bill.price}</td>
            <td>
                <a href={bill.url} rel="noopener noreferrer" target="_blank" download><Button variant="success">Download</Button></a>
                <Button variant="primary" onClick={handleShow}>Edit</Button>
            </td>
            <BillModal show={show} handleClose={handleClose} initialValues={initialValues} />
        </tr>
    )
}

export default TableRow
