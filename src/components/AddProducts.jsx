import React from 'react'
import {Modal} from 'react-bootstrap';

const AddProducts = (props) => {
  return (
    <div>

        <Modal show = {props.showModal}>
            <Modal.Title>Add Products</Modal.Title>
            <Modal.Body>Modal Body</Modal.Body>
            <Modal.Footer>
                <button>Add Products</button>
                <button onClick={props.cancelProduct}>Cancel</button>
            </Modal.Footer>
        </Modal>
      
    </div>
  )
}

export default AddProducts
