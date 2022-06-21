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
                    var body = {"fromDate": response.data.data.createdAt}   // check date to be passed
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

export const updateAvatar = (id, body) => {
    var url ='';
    if(id === "profile-picture")
        url = "/users/uploadProfile";
    else if(id === "company-logo")
        url = "/users/uploadCompanyLogo";
    return (dispatch) => {
        http.HttpCall(url, "post", body) 
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(updateAv(id, body.data));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const removeAvatar = (id, body) => {
    var url = '';
    if(id === "profile-picture-remove") 
        url = "/users/removeImage";
    else if(id === "company-logo-remove")
        url = "/users/removeCompanyLogo";
    return (dispatch) => {
        http.HttpCall(url, "put", body) 
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(removeAv(id, null));
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

const updateAv = (id, data) => {
    if(id === "profile-picture")
        return {
            type: profileActionsTypes.PROFILE_AVATAR,
            payload: data
        };
    else if(id === "company-logo")
        return {
            type: profileActionsTypes.COMPANY_LOGO,
            payload: data
        };
}

const removeAv = (id, data) => {
    if(id === "profile-picture-remove")
        return {
            type: profileActionsTypes.PROFILE_AVATAR,
            payload: data
        };
    else if(id === "company-logo-remove")
        return {
            type: profileActionsTypes.COMPANY_LOGO,
            payload: data
        };
}