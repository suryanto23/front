import React from 'react'
import {getDataDelete } from './../redux/action/comment.action'
import {useDispatch } from 'react-redux'
import {Button} from 'react-bootstrap'

function ButtonDelete(props) {

    // props.id
    // props.setTargetID

    const dispatch =  useDispatch();

     function trigger (){

        let n = window.confirm("Are you sure?");
        if (n) dispatch(getDataDelete(props.id));

    }

    return (
        <div>
            <Button variant="danger" className="rounded-0" onClick={trigger} >Delete</Button>
        </div>
    )
}

export default ButtonDelete
