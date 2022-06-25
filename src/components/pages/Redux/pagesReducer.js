const initialState = {
    documentNumber: '',
    invoices: {}
};

const pagesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "GENERATE_NUMBER": 
            return {
                ...state,
                documentNumber: action.payload
            };

        case "GET_INVOICES": 
        return {
            ...state,
            invoices : action.payload
        };

        default:
            return state;
    }
}

export default pagesReducer;