
import {useState} from 'react'
import {getDataUpdate} from './../redux/action/comment.action'
import {useDispatch} from 'react-redux'
import {Modal , Button , Form} from 'react-bootstrap'

function ButtonUpdate(props) {


// props.id
// props.biodata

const dispatch =  useDispatch();

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [val, setVal] = useState("");

function track (param){
    setVal(param.target.value)
};


function read (){
    dispatch(getDataUpdate(props.id , val));
}

    return (
        <div>
             <Button variant="dark" className="rounded-0" onClick={handleShow}>Update</Button>


                {/* Modal Form */}
                <Modal show={show} onHide={handleClose}  size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Edit Data</Form.Label>
                                    <Form.Control onChange={track} defaultValue={props.biodata}  />
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="dark" onClick={read}>
                            Save 
                        </Button>
                        </Modal.Footer>
                </Modal>


        </div>
    )
}

export default ButtonUpdate
