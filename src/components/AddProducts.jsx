import React from 'react'
import {Modal, Form} from 'react-bootstrap';

const AddProducts = (props) => {


  return (
    <div>

        <Modal show = {props.showModal}>
            <Modal.Title  className='ms-3 mt-3'>Add Products</Modal.Title>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-4'>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter Product Name' onChange={(e) => props.setTitle(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type='text' placeholder='Enter Product Image Link'onChange={(e) => props.setThumbnail(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as='textarea' placeholder='Enter Product Description' rows={3} onChange={(e) => props.setDescription(e.target.value)}></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.addProducts} className='btn btn-outline-primary' >Add Product</button>
                <button onClick={props.cancelProduct} className='btn btn-outline-danger'>Cancel</button>
            </Modal.Footer>
        </Modal>
      
    </div>
  )
}

export default AddProducts
