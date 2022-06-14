import http from '../../../Services/_httpServices';
import authKeyActionTypes from './authActionTypes';

export const SignupApi = (body, setAuthenticated) => {
    return (dispatch) => {
        http.HttpCall("users/signUp", "post", body)
            .then((response) => {
                console.log(response);
                if(response.data.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    dispatch(signup(response.data.message, body));
                    setAuthenticated(response.data.token);
                }
                else 
                    dispatch(signup(response.data.message, ''));
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const signup = (msg, body) => {
    return {
        type: authKeyActionTypes.SIGN_UP,
        message: msg,
        user: body
    }
}

const login = (data) => {
    return {
        type: authKeyActionTypes.LOGIN,
        payload: data
    }
}