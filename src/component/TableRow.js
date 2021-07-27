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
            <td>{bill.bag}</td>
            <td>{bill.quantity}</td>
            <td>{bill.price}</td>
            <td>{bill.vehicleNumber}</td>
            <td>{bill.vehicleFreight}</td>
            <td>{(bill.quantity * bill.price)}</td>
            <td>
                <a href={bill.url} rel="noopener noreferrer" target="_blank" download><Button variant="success" style={{width:"100%",margin:"5px"}}>Download</Button></a>
                <Button variant="primary" onClick={handleShow} style={{width:"100%",margin:"5px"}}>Edit</Button>
            </td>
            <BillModal show={show} handleClose={handleClose} initialValues={initialValues} />
        </tr>
    )
}

export default TableRow
