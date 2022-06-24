import pagesActionTypes from "./pagesActionTypes";
import http from "../../../Services/_httpServices";

export const generateNumber = (body) => {
    var url = '/invoice/generateInvoiceNumber';
    return (dispatch) => {
        http.HttpCall(url, "post", body) 
            .then((response) => {
                if(response.data.status === 200)
                    dispatch(generate(response.data.data));
                else
                    console.log("Response: ", response);
            })
            .catch((error) => {
                console.log("ERROR: ",error);
            })
    }
}


const generate = (data) => {
    return {
        type: pagesActionTypes.GENERATE_NUMBER,
        payload: data
    }
}