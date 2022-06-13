import http from '../../../Services/_httpServices';
import authKeyActionTypes from './authActionTypes';

export const signupApi = () => {
    return (dispatch) => {
        var body = {
            "email": "demoacassdfcount@gmail.com",
            "firstName": "demoaccount",
            "lastName": "lastname",
            "password": "India@123",
            "phoneNumber": 1123412342133,
            "referallCode": ""
        };

        http.HttpCall("users/signUp", "post", body)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const signup = (data) => {
    return {
        type: authKeyActionTypes.SIGN_UP,
        payload: data
    }
}

const login = (data) => {
    return {
        type: authKeyActionTypes.LOGIN,
        payload: data
    }
}