import { GET_CART_REQUEST, GET_CART_FAILED, GET_CART_SUCCESS } from './../action/cart.action';


const startState = {
    data : [],
    error: null,
    isLoading : false
};

const CartReducer = (state = startState , action) => {

    switch(action.type){

        case GET_CART_REQUEST:
                console.log("Cart on Request")
                return{
                    ...state,
                    isLoading : true
                };

        case GET_CART_FAILED:
                console.log("Cart Failed")
                return{
                    ...state,
                    isLoading : false,
                    error : action.error
                };

        case GET_CART_SUCCESS:
            console.log("Get Cart Succsessfully")
            console.log("ini action result" ,action )
                return{
                    ...state,
                    isLoading : false,
                    data : action.result
                };
        
        default:
            return state;

    }


};

export default CartReducer;