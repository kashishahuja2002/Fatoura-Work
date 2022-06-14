const initialState = {
    message: "",
    userData: {}
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN_UP": 
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