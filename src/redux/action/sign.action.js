import axios from 'axios';

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

export const setRegister = (param) => {
    return{
        type : REGISTER,
        data : param
    };
};

export const setLogin = (param) => {
    return{
        type : REGISTER,
        data : param
    };
};

export const registerAction = (val , history) => {
    console.log("register actions values", val);
    console.log("register actions history", history);

    return function (dispatch) {

        axios.post(`https://server-app-myshop.herokuapp.com/auth/register` , val)
        .then((res) => {
            console.log("response adalah " ,res);
            console.log("response adalah lagi " ,res.data.data);
            dispatch(setRegister(res.data.data))
            history.push("/login")
        })

    }

}

export const loginAction = (val , history) => {
    console.log("register actions values", val);
    console.log("register actions history", history);

    return function (dispatch) {

        axios.post(`https://server-app-myshop.herokuapp.com/auth/login` , val)
        .then((res) => {
            console.log("response adalah " ,res);
            console.log("response adalah lagi " ,res.data);
            
            if(res.data.token !== undefined){
                localStorage.setItem("token" , res.data.token)
                localStorage.setItem("username" , val.name)
                dispatch(setLogin(res.data.token))
                history.push("/")
                window.location.reload()
            } else {
                alert("invalid Name or Password")
            }
        })
        .catch((e)=>console.log(e))

    }

}

