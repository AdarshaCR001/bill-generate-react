import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function BillForm({ bill }) {
    const backendUrl = "http://localhost:7080/bill_backend/";
    const initialValues = bill;

    const [downloadUrl, setDownloadUrl] = useState('')

    const onSubmit = (values, { resetForm }) => {
        var api = backendUrl + "bill/generateBill";
        console.log(JSON.stringify(values));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(values),
            redirect: 'follow'
        };

        fetch(api, requestOptions)
            .then(response => response.text())
            .then(result => { result = JSON.parse(result); setDownloadUrl(result.url); window.open(result.url, '_blank'); })
            .catch(error => console.log('error', error));
        // axios.post(api, JSON.stringify(values))
        //     .then(function (response) {
        //         console.log(response);
        //         resetForm({});
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         alert(error);
        //     });
        resetForm({});
    }
    const vehicleNumberRegx = /^[A-Z|a-z]{2}\s?[0-9]{1,2}\s?[A-Z|a-z]{0,3}\s?[0-9]{4}$/;
    const validate = values => {
        const errors = {};
        if (!values.buyerCompany) {
            errors.buyerCompany = 'Required';
        }
        if (!values.buyerAddress) {
            errors.buyerAddress = 'Required';
        }
        if (!Number.isInteger(values.quantity) || values.quantity < 1) {
            errors.quantity = "Please enter valid number";
        }
        if (!Number.isInteger(values.price) || values.price < 1) {
            errors.price = "Please enter valid number";
        }
        if (!values.itemName) {
            errors.itemName = 'Required';
        }
        if (!Number.isInteger(values.bag) || values.bag < 1) {
            errors.bag = "Please enter valid number";
        }
        if (!values.vehicleNumber) {
            errors.vehicleNumber = 'Required';
        } else if (!vehicleNumberRegx.test(values.vehicleNumber)) {
            errors.vehicleNumber = "Please enter valid vechicle number.\n ex: KA11AA1111";
        }

        return errors;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });


    return (

        <Form onSubmit={formik.handleSubmit}>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Buyer Name</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Buyer Name"
                        id="buyerName"
                        name="buyerName"
                        {...formik.getFieldProps('buyerName')}
                    />
                    {formik.errors.buyerName && formik.touched.buyerName ? (
                        <div style={{ color: "red" }}>{formik.errors.buyerName}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Company Name</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Company Name"
                        id="buyerCompany"
                        name="buyerCompany"
                        {...formik.getFieldProps('buyerCompany')}
                    />
                    {formik.errors.buyerCompany && formik.touched.buyerCompany ? (
                        <div style={{ color: "red" }}>{formik.errors.buyerCompany}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Buyer Address</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Buyer Address"
                        id="buyerAddress"
                        name="buyerAddress"
                        {...formik.getFieldProps('buyerAddress')}
                    />
                    {formik.errors.buyerAddress && formik.touched.buyerAddress ? (
                        <div style={{ color: "red" }}>{formik.errors.buyerAddress}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Item Name</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Item Name"
                        id="itemName"
                        name="itemName"
                        {...formik.getFieldProps('itemName')}
                    />
                    {formik.errors.itemName && formik.touched.itemName ? (
                        <div style={{ color: "red" }}>{formik.errors.itemName}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Bag</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="number"
                        placeholder="Bag"
                        id="bag"
                        name="bag"
                        min="1"
                        {...formik.getFieldProps('bag')}
                    />
                    {formik.errors.bag && formik.touched.bag ? (
                        <div style={{ color: "red" }}>{formik.errors.bag}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Quantity</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="number"
                        placeholder="Quantity"
                        id="quantity"
                        name="quantity"
                        min="1"
                        {...formik.getFieldProps('quantity')}
                    />
                    {formik.errors.quantity && formik.touched.quantity ? (
                        <div style={{ color: "red" }}>{formik.errors.quantity}</div>
                    ) : null}
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Price</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="number"
                        placeholder="Price"
                        id="price"
                        name="price"
                        min="1"
                        {...formik.getFieldProps('price')}
                    />
                    {formik.errors.price && formik.touched.price ? (
                        <div style={{ color: "red" }}>{formik.errors.price}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Vehicle Number</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Vehicle Number"
                        id="vehicleNumber"
                        name="vehicleNumber"
                        {...formik.getFieldProps('vehicleNumber')}
                    />
                    {formik.errors.vehicleNumber && formik.touched.vehicleNumber ? (
                        <div style={{ color: "red" }}>{formik.errors.vehicleNumber}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Vehicle Freight</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="number"
                        placeholder="Vehicle Freight"
                        id="vehicleFreight"
                        name="vehicleFreight"
                        min="1"
                        {...formik.getFieldProps('vehicleFreight')}
                    />
                    {formik.errors.vehicleFreight && formik.touched.vehicleFreight ? (
                        <div style={{ color: "red" }}>{formik.errors.vehicleFreight}</div>
                    ) : null}
                </Col>
            </Form.Group>

            <Button type="submit" variant="primary" style={{ width: "100%" }}>Generate Bill</Button>
            <br />
            <br />
            {downloadUrl !== "" ?
                <a href={downloadUrl} rel="noopener noreferrer" target="_blank" download><Button variant="success">Download Bill Again</Button></a>
                : null
            }
        </Form>
    )
}

export default BillForm
