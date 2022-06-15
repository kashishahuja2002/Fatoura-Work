import profileActionsTypes from "./profileActionsTypes";

const getPlans = (data) => {
    return {
        type: profileActionsTypes.PLANS,
        payload: data
    };
}