import React from 'react'
import {addToCart } from './../redux/action/comment.action'
import {useDispatch } from 'react-redux'
import {Button} from 'react-bootstrap'
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

function ButtonPurchase(param) {

    const history = useHistory();
    const isLogged = useSelector((state) => state.Sign.Log);
    
    // param.productName
    // param.productPrice
    // param.description
    // param.user
    
    const dispatch = useDispatch()

    function hit (){

        if(!isLogged){
            alert("You have to sign in to make a purchase")
            history.push("/login")
            return
        }

       console.log(param)
       dispatch(addToCart(param))
    }

    return (
        <div>
            <Button variant="info" className="rounded-0" onClick={hit} >Purchase</Button>
        </div>
    )
}

export default ButtonPurchase
