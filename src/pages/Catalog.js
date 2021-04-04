import '../App.css';
import SpinnerLoading from '../components/SpinnerLoading';
import {useEffect} from 'react'
import {getData} from './../redux/action/comment.action'
import { useSelector, useDispatch } from "react-redux";
import {Container , ListGroup , Row , Col , Alert , Card , CardGroup} from 'react-bootstrap'
import ButtonPurchase from '../components/ButtonPurchase';

function Catalog() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.Sign.username)
    const displayAllProduct = useSelector(state => state.CommentReducer)  

    useEffect(() => {  
        dispatch(getData());
     }, [dispatch])

    return (
        <Container fluid>
            
            <Row className="text-center mb-3">
                <Col>
                    <h1 className="display-1">CATALOG</h1>
                </Col>
            </Row>

            <Row className="text-center d-flex justify-content-center p-0 m-0">
            <CardGroup className="w-75">
                { 

                    displayAllProduct.data 
                    ? 
                        displayAllProduct.isLoading  
                        ? <div className="w-100 mt-5">
                            <SpinnerLoading/>
                          </div>
                        :  displayAllProduct.data.map( (items , index) => (
                                <Col className="m-0 p-0 d-flex justify-content-lg-center flex-row" xs={4} >
                            <div key={index} className="w-100">
                                <Card id="card" thumbnail>
                                    <Card.Body>
                                    <Card.Title>
                                        <h6 className="display-4">
                                        {items.productName}
                                        </h6>
                                    </Card.Title>
                                    <Card.Text>
                                        {items.description}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <ButtonPurchase 
                                            productID={items._id}
                                            productName={items.productName}
                                            productPrice={items.productPrice}
                                            description={items.description}
                                            user={user}
                                        />
                                    </Card.Footer>
                                </Card>
                            
                            </div> 
                        </Col>
                            ))          

                    : <p>No Data</p>

                }
            </CardGroup>
            </Row>

    
        </Container>
    )
}

export default Catalog
