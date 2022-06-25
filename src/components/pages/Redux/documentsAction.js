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

const invoices = (data) => {
    return {
        type: pagesActionTypes.GET_INVOICES,
        payload: data
    }
}