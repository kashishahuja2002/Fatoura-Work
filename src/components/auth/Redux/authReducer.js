const initialState = {
    message: "",
    userData: {}
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "AUTH": 
            return {
                ...state,
                message: action.message,
                userData: action.user,
            };

        default:
            return state;
    }
}

export default authReducer;