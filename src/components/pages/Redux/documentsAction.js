import pagesActionTypes from "./pagesActionTypes";
import http from "../../../Services/_httpServices";

export const getInvoices = () => {
    var url = '/invoice/getInvoices';
    return (dispatch) => {
        http.HttpGet(url, "get")
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(invoices(response.data));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const getDeletedInvoices = () => {
    var url = '/invoice/getDeletedInvoice';
    return (dispatch) => {
        http.HttpGet(url, "get")
            .then((response) => {
                if(response.data.status == 200) {           // Need == as API is returning string
                    dispatch(deletedInvoices(response.data));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const getTotalByCurrency = () => {
    var url = '/invoice/getTotalByCurrency';
    return (dispatch) => {
        http.HttpGet(url, "get")
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(totalByCurrency(response.data));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}   

export const getTotalByCurrencyStatus = (status) => {
    var url = '/invoice/getTotalByCurrency?status='+status;

    return (dispatch) => {
        http.HttpGet(url, "get")
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(totalByCurrencyStatus(status, response.data));
                }
                else 
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const invoices = (data) => {
    return {
        type: pagesActionTypes.GET_INVOICES,
        payload: data
    }
}

const deletedInvoices = (data) => {
    return {
        type: pagesActionTypes.GET_DELETED_INVOICES,
        payload: data
    }
}

const totalByCurrency = (data) => {
    return {
        type: pagesActionTypes.GET_TOTAL_BY_CURRENCY,
        payload: data
    }
}

const totalByCurrencyStatus = (stat, data) => {
    return {
        type: pagesActionTypes.GET_TOTAL_BY_CURRENCY_STATUS,
        status: stat,
        payload: data
    }
}