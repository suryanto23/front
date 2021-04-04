import React from 'react'
import { useDispatch } from "react-redux";
import {getDataDelete} from './../redux/action/comment.action'
import {Button} from 'react-bootstrap'

function ButtonCancelItem(param) {

    // we have param.orderID 
    // we have param.user
    const dispatch = useDispatch();

    function hit (){
        console.log("order id " ,param.orderID)
        console.log("user got again " ,param.user)
        dispatch(getDataDelete(param.orderID , param.user))
    }

    return (
        <div>
              <Button variant="danger" className="rounded-0" onClick={hit} >Delete</Button>
        </div>
    )
}

export default ButtonCancelItem
