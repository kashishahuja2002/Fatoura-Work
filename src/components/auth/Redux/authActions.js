import http from '../../../Services/_httpServices';
import authKeyActionTypes from './authActionTypes';

export const AuthApi = (url, body, setAuthenticated) => {
    return (dispatch) => {
        http.HttpCall(url, "post", body)
            .then((response) => {
                if(response.data.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    dispatch(auth(''));
                    setAuthenticated(response.data.token);
                }
                else 
                    dispatch(auth(response.data.message));
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const subscribePlan = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", body)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log("First time login: ",response.data);
                    dispatch(auth(response.data.message));
                }
                else 
                    console.log("Response: ",response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const auth = (msg) => {
    return {
        type: authKeyActionTypes.AUTH,
        payload: msg,
    }
}