import React from 'react'
import {Button} from 'react-bootstrap';

function TableRow({bill}) {
    //console.log(props);
    return (
        <tr>
            <td>{bill.invoiceNumber}</td>
            <td>{bill.buyerName}</td>
            <td>{bill.buyerCompany}</td>
            <td>{bill.itemName}</td>
            <td>{bill.quantity*bill.price}</td>
            <td><a href={bill.url} rel="noopener noreferrer" target="_blank" download><Button  variant="success">Download</Button></a></td>
        </tr>
    )
}

export default TableRow
