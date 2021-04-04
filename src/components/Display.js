import React , {useState} from 'react'
import {Form , Button } from 'react-bootstrap'
import {useSelector , useDispatch} from 'react-redux'
import {addTodo} from './../redux/action/display.action.js'


function Display(props) {

    const [val, setVal] = useState("")

    function track (param){
        setVal (param.target.value)
    }

    const dispatch = useDispatch()
    const todo = useSelector((param) => param.todo)


    console.log("ini todo" ,todo)


    return (
        <div>
            
            <Form>
                <Form.Group>
                  <Form.Control onChange={track} />
                  <Button variant="primary" onClick={() => dispatch(addTodo(val)) }   >Submit</Button>
                </Form.Group>
            </Form>

             <h1> Print Data :</h1>


             { todo.map( (items , index) => {
                   
                   return <h5 key={index}>{items.buah}</h5>

                }) }

        </div>
    )
}


export default Display;
