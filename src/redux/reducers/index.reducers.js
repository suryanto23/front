import {combineReducers} from 'redux'
import CommentReducer from './comment.reducers.js'
import Sign from './sign.reducers.js'
import ShipmentReducer from './shipment.reducer.js'


const rootReducers = combineReducers( {CommentReducer , Sign , ShipmentReducer} )


export default rootReducers;