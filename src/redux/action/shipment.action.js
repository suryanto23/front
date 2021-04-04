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


export const getDataShipment = () => {

    return function (dispatch) {
    dispatch(getDataRequest());

    axios.get("https://server-app-myshop.herokuapp.com/shipment")
    .then(result => {
        console.log("dapat shipment" ,result.data.data)
        dispatch(getDataSuccsess(result.data.data))
    } )
    .catch(error => dispatch(getDataFailed(error)))
    
    }

};