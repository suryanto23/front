import SpinnerLoading from '../components/SpinnerLoading';
import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getDataCart} from './../redux/action/cart.action';
import {Container , ListGroup , Row , Col} from 'react-bootstrap';
import ButtonCancelItem from '../components/ButtonCancelItem';
import ButtonCheckout from '../components/ButtonCheckout';

function Cart() {

    let totalCartPrice = 0;
    const dispatch = useDispatch();
    const displayCart = useSelector(state => state.CartReducer) 
    const user = useSelector(state => state.Sign.username)
    console.log("ini display all cart " ,displayCart) 
    
    // displayCart.data 

    function pushPrice (param){
        totalCartPrice+=param
    }

    useEffect(() => {  
        dispatch(getDataCart(user));
     }, [dispatch])

    return (
        <Container>

            <Row className="text-center mb-3">
                <Col>
                    <h1 className="display-4 text-uppercase">{user}'s CART</h1>
                </Col>
            </Row>

            { 
                displayCart.data ? 
                    displayCart.isLoading  
                        ? <div className="w-100 mt-5 text-center">
                            <SpinnerLoading/>
                          </div>
                        :   displayCart.data.map( (items , index) => (
                                <div key={index} className=" d-flex flex-row justify-content-center mt-3">
                                    <ListGroup.Item action className="w-25 p-0">{items.product.productName}</ListGroup.Item>
                                    {pushPrice(items.product.productPrice)}
                                    <ButtonCancelItem 
                                        orderID={items._id}
                                        user={user}
                                    />
                                </div> 
                            ))          
                         
                :<p>No Data</p>
            }

            <h4>Total price : Rp. {totalCartPrice} <ButtonCheckout totalCartPrice={totalCartPrice}/>
            </h4>
        </Container>
    )
}

export default Cart
