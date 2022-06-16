import profileActionsTypes from "./profileActionsTypes";
import http from "../../../Services/_httpServices";

export const getPlans = (url) => {
    return (dispatch) => {
        http.HttpGet(url, "get")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const plans = (data) => {
    return {
        type: profileActionsTypes.PLANS,
        payload: data
    };
}