import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import BillForm from './BillForm';

function BillModal({ show, handleClose, initialValues }) {



  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bill Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <BillForm bill={initialValues} />
      </Modal.Body>
    </Modal>
  )
}

export default BillModal
