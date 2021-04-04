import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import {Container , Form , Button , Row , Col} from 'react-bootstrap';
import { registerAction } from '../redux/action/sign.action'


function RegisterPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [inputUsername, setInputUsername] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");
    let regexEmail = /\S+@\S+\.\S+/;

    let inputData = {
        name : inputUsername,
        email : inputEmail,
        password : inputPassword
    };

    function trackUsername (param)  {
        setInputUsername(param.target.value)
    };

    function trackEmail (param)  {
        setInputEmail(param.target.value)
    };

    function trackPassword (param)  {
        setInputPassword(param.target.value)
    };

    function trackConfirmPassword (param)  {
        setInputConfirmPassword(param.target.value)
    };

    function hit (param){

        if( inputUsername==="" || inputEmail==="" || inputPassword==="" || inputConfirmPassword===""){
            alert("No blank field are allowed")
            return
        } else if ( inputPassword!==inputConfirmPassword){
            alert("Password does not match!")
            document.getElementById("inputPassword").value=""
            document.getElementById("inputConfirmPassword").value=""
            return
        } else if (regexEmail.test(inputEmail) == false){
            alert ("Invalid email format!")
            document.getElementById("inputEmail").value=""
            return
        } else if (inputPassword.length<5){
            alert ("Password minimal 5 karakter")
            document.getElementById("inputPassword").value=""
            document.getElementById("inputConfirmPassword").value=""
            return;
        }

        inputPassword===inputConfirmPassword ?
        dispatch(registerAction(inputData , history))
        : alert("Password does not match!")    
    }

    return (
        <Container>

            <Row className="justify-content-center ">
                    <Col xs lg="4" className="">
                        <Row className="my-5 text-center">
                            <Col><h1>Register</h1></Col>
                        </Row>
                        <Row>
                            <Col  className="border p-3">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control placeholder="Enter your username" onChange={trackUsername} />
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email"  placeholder="Email should be valid" id="inputEmail"  onChange={trackEmail} />
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Should be at least 5 character" id="inputPassword" onChange={trackPassword} />
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Re-type password" id="inputConfirmPassword" onChange={trackConfirmPassword} />
                                    </Form.Group>
                                        <Row>
                                        <Col>
                                            <Button variant="dark" className="w-100" onClick={hit} >Sign Up</Button>
                                        </Col>
                                        </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

        </Container>
    )
}

export default RegisterPage
