import profileActionsTypes from "./profileActionsTypes";
import http from "../../../Services/_httpServices";
import axios from "axios";

export const getPlans = () => {
    return (dispatch) => {
        axios.get("https://api.fatoura.work/subscription/getPlans")
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(plans(response.data));
                }
                else {
                    console.log("Response: ", response);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const getUser = (url) => {
    return (dispatch) => {
        http.HttpGet(url, "get")
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(user(response.data));
                    var body = {"fromDate": response.data.data.createdAt}
                    dispatch(getInvoiceCount("/invoice/getInvoiceCount", body));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const getInvoiceCount = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", body)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(invoiceCount(response.data));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const upgradePlan = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", body)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(upgrade(response.data));
                    window.location.href = response.data.data.links[0].href;
                }
                else 
                    console.log("Response: ", response);
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

const upgrade = (data) => {
    return {
        type: profileActionsTypes.UPGRADE,
        payload: data
    };
}

const user = (data) => {
    return {
        type: profileActionsTypes.USER,
        payload: data
    };
}

const invoiceCount = (data) => {
    return {
        type: profileActionsTypes.INVOICE,
        payload: data
    };
}