const initialState = {
    documentNumber: ''
};

const pagesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "GENERATE_NUMBER": 
            return {
                ...state,
                documentNumber: action.payload
            };

        default:
            return state;
    }
}

export default pagesReducer;