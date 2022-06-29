const initialState = {
    documentNumber: '',
    invoices: {},
    deletedInvoices: {},
    totalByCurrency: {},
    totalByCurrencyStatus: {
        paid:{},
        unpaid:{},
        overdue:{}
    },
    singleInvoice: {}
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
                invoices: action.payload
            };

        case "GET_DELETED_INVOICES": 
            return {
                ...state,
                deletedInvoices: action.payload
            };

        case "GET_TOTAL_BY_CURRENCY": 
            return {
                ...state,
                totalByCurrency: action.payload
            };

        case "GET_TOTAL_BY_CURRENCY_STATUS":
            var tbcs = {...state.totalByCurrencyStatus};
            if(action.status=='paid')
                tbcs.paid = action.payload;
            else if(action.status=='unpaid')
                tbcs.unpaid = action.payload;
            else if(action.status=='overdue')
                tbcs.overdue = action.payload;
            return {
                ...state,
                totalByCurrencyStatus: tbcs
            };

        case "DELETE_INVOICE": 
            var updInvoices = {...state.invoices};
            updInvoices.data = updInvoices.data.filter((inv) => inv._id != action.payload);
            return {
                ...state,
                invoices: updInvoices
            };

        case "GET_INVOICE_DATA":
            return {
                ...state,
                singleInvoice: action.payload
            }

        default:
            return state;
    }
}

export default pagesReducer;