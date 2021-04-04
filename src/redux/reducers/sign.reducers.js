import { REGISTER , LOGIN } from '../action/sign.action';

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const startState = 
    token !== undefined && token !=null ? {
        Log : true,
        username: username,
        data: []
    } : {
        Log : false,
        data: []
    };


const Sign = (state=startState , action) => {

    switch(action.type){
        case REGISTER:
            console.log("Trigger REGISTER");
            return {
                registerData: action.data
            };
        case LOGIN:
            console.log("Trigger LOGIN");
            return {
                ...state,
                Log : true,
            };       
        default:
            return state;
    };

};

export default Sign;