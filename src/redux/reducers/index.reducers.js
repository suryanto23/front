import {combineReducers} from 'redux'
import CommentReducer from './comment.reducers.js'
import Sign from './sign.reducers.js'
import ShipmentReducer from './shipment.reducer.js'
import CartReducer from './cart.reducers'


const rootReducers = combineReducers( {CommentReducer , Sign ,  CartReducer , ShipmentReducer} )


export default rootReducers;