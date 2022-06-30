import pagesActionTypes from "./pagesActionTypes";
import http from "../../../Services/_httpServices";

export const getFilterData = (body) => {
    var url = '/report/filterData';
    return (dispatch) => {
        http.HttpCall(url, "post", body)
            .then((response) => {
                if(response.data.status === 200) {
                    dispatch(filterData(response.data));
                }
                else {
                    console.log("Response: ", response.data);
                    dispatch(filterData(response.data));
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

const filterData = (data) => {
    return {
        type: pagesActionTypes.GET_FILTERED_DATA,
        payload: data
    }
}