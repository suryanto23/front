import React , {useState} from 'react'
import {Modal , Button , Form} from 'react-bootstrap'

function Modal(props) {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [val, setVal] = useState("");

    function track  (param) {
        setVal(param.target.value)
    }

    function print  (param) {
       alert(val)
    }



    return (
        <div>
            
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control onChange={track} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={print}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
            </Modal>




        </div>
    )
}

export default Modal
