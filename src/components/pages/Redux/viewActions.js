import pagesActionTypes from "./pagesActionTypes";
import http from "../../../Services/_httpServices";

export const getInvoiceData = (id) => {
    var url = '/invoice/getInvoiceById/'+id;
    return (dispatch) => {
        http.HttpGet(url, "get")
            .then((response) => {
                if(response.data.status == 200) {
                    dispatch(invoiceData(response.data));
                }
                else 
                    console.log("Response: ", response.data);
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
} 


const invoiceData = (data) => {
    return {
        type: pagesActionTypes.GET_INVOICE_DATA,
        payload: data
    }
}