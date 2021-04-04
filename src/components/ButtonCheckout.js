import {useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {getDataShipment} from './../redux/action/shipment.action'
import {Modal , Button , Form , Dropdown} from 'react-bootstrap'
import axios from 'axios'

function ButtonCheckout(param) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.CommentReducer);
    const [expeditionData, setExpeditionData] = useState("");
    const [expeditionFare, setExpeditionFare] = useState("");
    const [estimate, setEstimate] = useState("");
    let totalPrice = param.totalCartPrice;

    // we have param.totalCartPrice
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true)
       axios(`https://server-app-myshop.herokuapp.com/shipment`)
       .then(res => {
           console.log(res.data.data)
           setExpeditionData(res.data.data)
        })
    }

    const [SelectExpedition, setSelectExpedition] = useState("Select Expedition");
    const [expedition, setExpedition] = useState("");   

    function hit (param){
     //  setExpedition(param.target.id)
       setSelectExpedition(param.target.innerHTML)
       setExpeditionFare(expeditionData.find((items)=> items.expedition===param.target.innerHTML).fare)
       setEstimate(expeditionData.find((items)=> items.expedition===param.target.innerHTML).estimate)
       
    }



    return (
        <div>
            <Button variant="info" className="rounded-0" onClick={handleShow} >Check Out</Button>

            {/* Modal Form */}
            <Modal show={show} onHide={handleClose}  size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    
                        <Modal.Body>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    {SelectExpedition}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" onClick={hit} id="Gojek">Gojek</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={hit} id="JNE">JNE</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={hit} id="JNT">JNT</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={hit} id="PostIndonesia">Post Indonesia</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={hit} id="SiCepat">SiCepat</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={hit} id="MHLExpress">MHL Express</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        <h5>Expedition Fare : {expeditionFare} </h5>
                        <h5>Estimate Time   : {estimate} </h5>
                        <h4>Total Rp.{totalPrice+=expeditionFare}</h4>

                        </Modal.Body>

                        <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Pay and Finish Shopping 
                        </Button>
                        </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ButtonCheckout
