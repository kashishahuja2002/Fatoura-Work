const initialState = {}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN_UP": 
            return {
                ...action.data
            };

        default:
            return state;
    }
}

export default authReducer;