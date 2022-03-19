import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Details = ({ product }) => {
    console.log(product)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Details
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{product.title.slice(0, 10)}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='w-50 mx-auto' src={product.image} alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default Details;