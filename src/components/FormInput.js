import {useState} from 'react'
import {getDataPost } from './../redux/action/comment.action'
import {useDispatch } from 'react-redux'
import {Form , Button , Row , Col} from 'react-bootstrap';

function FormInput () {

    const [val, setVal] = useState("");

    function track (param){
        setVal(param.target.value)
    };

    const dispatch =  useDispatch();

    function read (){
        dispatch(getDataPost(val));
        document.getElementById("s").value = ""
    };


    return (
        <div>
    
                    <Form>
                        <Row className=" d-flex justify-content-center" >
                            <Col xs="6" className="p-0 m-0">
                                 <Form.Control id="s" onChange={track} placeholder="Input new item here"/>
                            </Col>
                            <Col xs="1"  className="p-0 m-0">
                                <Button onClick={read}>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                

        </div>
    )
}

export default FormInput
