import http from '../../../Services/_httpServices';
import authKeyActionTypes from './authActionTypes';

export const AuthApi = (url, body, setAuthenticated) => {
    return (dispatch) => {
        http.HttpCall(url, "post", body)
            .then((response) => {
                if(response.data.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    dispatch(auth(response.data.message, body));
                    setAuthenticated(response.data.token);
                }
                else 
                    dispatch(auth(response.data.message, ''));
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const auth = (msg, body) => {
    return {
        type: authKeyActionTypes.AUTH,
        message: msg,
        user: body
    }
}