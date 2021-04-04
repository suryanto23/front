import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import {Container , Form , Button , Row , Col} from 'react-bootstrap';
import { loginAction } from '../redux/action/sign.action'

function LoginPage() {


    const dispatch = useDispatch();
    const history = useHistory();

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    let inputData = {
        name : inputUsername,
        password : inputPassword
    };

    function trackUsername (param)  {
        setInputUsername(param.target.value)
    };

    function trackPassword (param)  {
        setInputPassword(param.target.value)
    };

    function hit (param){
        console.log(inputData)
        dispatch(loginAction(inputData , history))
    }

    return (
        <Container>

            <Row className="justify-content-center ">
                    <Col xs lg="4" className="">
                        <Row className="my-5 text-center">
                            <Col><h1>Login</h1></Col>
                        </Row>
                        <Row>
                            <Col  className="border p-3">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control placeholder="Enter your username" onChange={trackUsername} />                 
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your password" onChange={trackPassword} />
                                    </Form.Group>
                                        <Row>
                                        <Col>
                                            <Button variant="dark" className="w-100" onClick={hit} >Sign In</Button>
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

export default LoginPage
