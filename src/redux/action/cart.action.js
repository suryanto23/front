import axios from 'axios'
export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_FAILED = "GET_CART_FAILED";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";

export const getCartRequest = () => {

    return{
        type: GET_CART_REQUEST
    }
};


export const getCartFailed = (error) => {

    return{
        type: GET_CART_FAILED,
        error
    }
};


export const getCartSuccsess = (result) => {

    return{
        type: GET_CART_SUCCESS,
        result
    }   
};

export const getDataCart = (user) => {

    let userID="";
    return function (dispatch) {
    dispatch(getCartRequest());

    axios.get("https://server-app-myshop.herokuapp.com/auth/user")
    .then(result => {
        userID = result.data.data.find((items) => items.name===user )._id;
        axios.get("https://server-app-myshop.herokuapp.com/cart")
        .then(result => {
            let userCart = result.data.data.filter((items)=> items.user===userID)
            console.log("user cart filtered" ,userCart)
            dispatch(getCartSuccsess(userCart))
        })
        .catch(error => dispatch(getCartFailed(error)))
    })
   
    .catch(error => dispatch(getCartFailed(error)))
    
    }
};