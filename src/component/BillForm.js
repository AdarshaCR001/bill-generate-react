import React from 'react';
import { useFormik } from 'formik';
import { Form,Row, Col,Button } from 'react-bootstrap';

function BillForm() {
    const formik = useFormik({
        initialValues: {
               form:{
          buyerName: '',
          quantity: '',
          price: '',
          itemName: '',
          bag: '',
          lorryNumber: ''
               }
        },
    onSubmit: values => {
         alert(JSON.stringify(values.form, null, 2));
        },
      });


    return (
        <Form onSubmit={formik.handleSubmit}>
       
       <Form.Group as={Row}>
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

<Form.Group as={Row}>
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

<Form.Group as={Row}>
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

<Form.Group as={Row}>
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
<Form.Group as={Row}>
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

<Form.Group as={Row}>
       <Form.Label column sm="2" >Lorry Number</Form.Label>
       <Col sm="10">
  <Form.Control size="lg" 
  type="text" 
  placeholder="Lorry Number" 
  id="form.lorryNumber"
  name="form.lorryNumber" 
  onChange={formik.handleChange}
         value={formik.values.form.lorryNumber}
         />
         </Col>
</Form.Group>

       <Button type="submit" variant="outline-secondary">Submit</Button>
     </Form>
    )
}

export default BillForm
