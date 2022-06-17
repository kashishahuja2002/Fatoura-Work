const initialState = {
    message: ""
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "AUTH": 
            return {
                ...state,
                message: action.message
            };

        default:
            return state;
    }
}

export default authReducer;