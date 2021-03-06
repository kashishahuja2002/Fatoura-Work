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

export const updateAvatar = (id, type, body) => {
    var url ='';
    id = id.split('-')[0];
    if(type === "post") {
        if(id === "profile")
            url = "/users/uploadProfile";
        else if(id === "company")
            url = "/users/uploadCompanyLogo";
    }
    else {
        if(id === "profile")
            url = "/users/removeImage";
        else if(id === "company")
            url = "/users/removeCompanyLogo";
    }
    
    return (dispatch) => {
        http.HttpCall(url, type, body) 
            .then((response) => {
                if(response.data.status === 200) {
                    if(type === "post")
                        dispatch(avatar(id, body.data));
                    else
                        dispatch(avatar(id, null));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const updateUser = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "put", body)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(updateUserData(response.data));
                }
                else 
                    console.log("Response: ", response);
            }) 
            .catch((error) => {
                console.log("Error: ", error);
            })
    }
}

export const updatePassword = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "put", body)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log(response.data);
                    dispatch(updatePasswordData(body.newPassword, response.data.message));
                    dispatch(apiSuccess(true));
                }
                else 
                    dispatch(updatePasswordData(body.oldPassword, response.data.message));
            }) 
            .catch((error) => {
                console.log("Error: ", error);
            })
    }
}

export const updateCompany = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "put", body)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(updateCompanyData(response.data));
                }
                else 
                    console.log("Response: ", response);
            }) 
            .catch((error) => {
                console.log("Error: ", error);
            })
    }
}

export const updateCompanyImage = (type, body) => {
    var url ='/users/uploadCompanyLogo';
    
    return (dispatch) => {
        http.HttpCall(url, type, body) 
            .then((response) => {
                if(response.data.status === 200) {
                    if(type === "post")
                        console.log(response.data);
                        // dispatch(avatar(id, body.data));
                    else
                        console.log(response.data);
                        // dispatch(avatar(id, null));
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

const avatar = (id, data) => {
    if(id === "profile")
        return {
            type: profileActionsTypes.PROFILE_AVATAR,
            payload: data
        };
    else if(id === "company")
        return {
            type: profileActionsTypes.COMPANY_LOGO,
            payload: data
        };
}

const updateUserData = (data) => {
    return {
        type: profileActionsTypes.UPDATE_USER,
        payload: data
    };
}

const updatePasswordData = (data, msg) => {
    return {
        type: profileActionsTypes.UPDATE_PASSWORD,
        payload: {
            body: data,
            message: msg
        }
    };
}

const updateCompanyData = (data) => {
    return {
        type: profileActionsTypes.UPDATE_COMPANY,
        payload: data
    };
}

const apiSuccess = (data) => {
    return {
        type: profileActionsTypes.API_SUCCESS,
        payload: data
    };
}