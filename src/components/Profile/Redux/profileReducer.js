const initialState = {
    plans: {},
    upgrade: {},
    user: {},
    invoice: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case "PLANS":
            return {
                ...state,
                plans: action.payload
            };

        case "UPGRADE":
            return {
                ...state,
                upgrade: action.payload
            };

        case "USER":
            return {
                ...state,
                user: action.payload
            };

        case "INVOICE":
            return {
                ...state,
                invoice: action.payload
            };

        default:
            return state;
    }
}

export default profileReducer;