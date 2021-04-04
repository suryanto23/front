
import {useDispatch , useSelector} from 'react-redux'
import {getData} from './../redux/action/comment.action'
import {useEffect} from 'react'
import ButtonUpdate from './ButtonUpdate'
import ButtonDelete from './ButtonDelete'
import FormInput from './FormInput'
import {Container , ListGroup , Row , Col} from 'react-bootstrap'
import SpinnerLoading from './SpinnerLoading.js'


function Comment() {
    
    const comment = useSelector(state => state.CommentReducer)  
    const dispatch = useDispatch();

    useEffect(() => {  
       dispatch(getData());
    }, [dispatch])

    return (
        <>
            <Container>

                <h1 className="display-4">CRUD REDUX API</h1>

                <Row className="mb-5">
                    <Col>
                        <FormInput/>
                    </Col>
                </Row>

                    <ListGroup>
                        { comment.isLoading  
                        ? <SpinnerLoading/>
                        :  comment.data.map( (items , index) => (
                            <div key={index} className=" d-flex flex-row justify-content-center mt-3">
                                <ButtonUpdate id={items.id} biodata={items.biodata}/>
                                    <ListGroup.Item action className="w-25 p-0">{items.biodata}     </ListGroup.Item>
                                <ButtonDelete id={items.id}/>
                            </div> )  )
                        }
                    </ListGroup>

            </Container>
        </>
    )
}

export default Comment
