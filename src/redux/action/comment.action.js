import axios from 'axios'
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const getDataRequest = () => {

    return{
        type: GET_DATA_REQUEST
    }
};


export const getDataFailed = (error) => {

    return{
        type: GET_DATA_FAILED,
        error
    }
};


export const getDataSuccsess = (result) => {

    return{
        type: GET_DATA_SUCCESS,
        result
    }   
};

export const addToCart = (val) => {

    let userID="";

    let data = {
        user: "" ,
        product: val.productID
    }


    return function (dispatch) {
    
        axios.get("https://server-app-myshop.herokuapp.com/auth/user")
        .then(result => {
            console.log("hasil fetch awal " ,result.data.data)
            userID = result.data.data.find((items) => items.name===val.user )._id
            console.log(userID)
            data.user = userID
            console.log("isi data " ,data)
                axios.post('https://server-app-myshop.herokuapp.com/cart',data)
                .then((result) => {console.log("post sukses " ,result.data.datawww)})
        })

       
    } 

};

export const getDataDelete = (id , user) => {

    return function (dispatch) {
        dispatch(getDataRequest());
    
        axios.delete(`https://server-app-myshop.herokuapp.com/cart/${id}`)
        .then(result =>   dispatch(getDataCart(user)) )
        .catch(error => dispatch(getDataFailed(error)))
        
        }
        
    };


export const getData = () => {

    return function (dispatch) {
    dispatch(getDataRequest());

    axios.get("https://server-app-myshop.herokuapp.com/product")
    .then(result => {
        console.log("dapat ",result.data.data)
        dispatch(getDataSuccsess(result.data.data))
    } )
    .catch(error => dispatch(getDataFailed(error)))
    
    }

};

export const getDataCart = (user) => {

    let userID="";
    return function (dispatch) {
    dispatch(getDataRequest());

    axios.get("https://server-app-myshop.herokuapp.com/auth/user")
    .then(result => {
        userID = result.data.data.find((items) => items.name===user )._id;
    })
    axios.get("https://server-app-myshop.herokuapp.com/cart")
    .then(result => {
        let userCart = result.data.data.filter((items)=> items.user===userID)
        console.log("user cart" ,userCart)
        dispatch(getDataSuccsess(userCart))
    } )
    .catch(error => dispatch(getDataFailed(error)))
    
    }
};
