import React from 'react';
import { useFormik } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function BillForm() {
    const backendUrl = "http://ec2-3-108-191-5.ap-south-1.compute.amazonaws.com/bill_backend/";
    const formik = useFormik({
        initialValues: {
            form: {
                buyerName: '',
                companyName: '',
                buyerAddress: '',
                quantity: '',
                price: '',
                itemName: '',
                bag: '',
                vehicleNumber: ''
            }
        },
        onSubmit: values => {
            var api = backendUrl + "bill/generateBill";
            console.log(JSON.stringify(values.form));
            console.log(values.form);
            axios.post(api, JSON.stringify(values.form))
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            //alert(JSON.stringify(values.form, null, 2));
        },
    });


    return (
        <Form onSubmit={formik.handleSubmit}>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Buyer Name</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Buyer Name"
                        id="form.buyerName"
                        name="form.buyerName"
                        onChange={formik.handleChange}
                        value={formik.values.form.buyerName}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Company Name</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Company Name"
                        id="form.companyName"
                        name="form.companyName"
                        onChange={formik.handleChange}
                        value={formik.values.form.companyName}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Buyer Address</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Buyer Address"
                        id="form.buyerAddress"
                        name="form.buyerAddress"
                        onChange={formik.handleChange}
                        value={formik.values.form.buyerAddress}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Item Name</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Item Name"
                        id="form.itemName"
                        name="form.itemName"
                        onChange={formik.handleChange}
                        value={formik.values.form.itemName}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Bag</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="number"
                        placeholder="Bag"
                        id="form.bag"
                        name="form.bag"
                        onChange={formik.handleChange}
                        value={formik.values.form.bag}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Quantity</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="number"
                        placeholder="Quantity"
                        id="form.quantity"
                        name="form.quantity"
                        onChange={formik.handleChange}
                        value={formik.values.form.quantity}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Price</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="number"
                        placeholder="Price"
                        id="form.price"
                        name="form.price"
                        onChange={formik.handleChange}
                        value={formik.values.form.price}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" >Vehicle Number</Form.Label>
                <Col sm="10">
                    <Form.Control size="lg"
                        type="text"
                        placeholder="Vehicle Number"
                        id="form.vehicleNumber"
                        name="form.vehicleNumber"
                        onChange={formik.handleChange}
                        value={formik.values.form.vehicleNumber}
                    />
                </Col>
            </Form.Group>

            <Button type="submit" variant="primary" style={{ width: "100%" }}>Generate Bill</Button>
        </Form>
    )
}

export default BillForm
