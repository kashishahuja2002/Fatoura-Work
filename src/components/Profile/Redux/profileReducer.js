const initialState = {
    plans: {},
    upgrade: {},
    user: {},
    invoice: null,
    passwordFailMessage: '',
    apiSuccess: false
}

const profileReducer = (state = initialState, action) => {
    var userData = {};
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

        case "PROFILE_AVATAR":
            userData = {...state.user}
            userData.data.profileImageName = action.payload;
            return {
                ...state, 
                user: userData
            };

        case "UPDATE_USER":
            userData = {...state.user}
            userData.data.firstName = action.payload.data.firstName;
            userData.data.lastName = action.payload.data.lastName;
            userData.data.phoneNumber = action.payload.data.phoneNumber;
            userData.data.taxNumber = action.payload.data.taxNumber;
            userData.data.currencyType = action.payload.data.currencyType;
            return {
                ...state, 
                user: userData
            };

        case "UPDATE_PASSWORD":
            userData = {...state.user}
            userData.data.hash = action.payload.data;
            var msg = action.payload.message;
            return {
                ...state, 
                user: userData,
                passwordFailMessage: msg,

            };

        case "COMPANY_LOGO":
            userData = {...state.user}
            userData.data.companyDetails.companyLogo = action.payload;
            return {
                ...state, 
                user: userData
            };

        case "UPDATE_COMPANY":
            userData = {...state.user}
            userData.data.companyDetails.companyName = action.payload.data.companyDetails.companyName;
            userData.data.companyDetails.entityID = action.payload.data.companyDetails.entityID;
            userData.data.companyDetails.companyAddress = action.payload.data.companyDetails.companyAddress;
            userData.data.companyDetails.decimalSize = action.payload.data.companyDetails.decimalSize;
            userData.data.companyDetails.qrHeading = action.payload.data.companyDetails.qrHeading;
            userData.data.companyDetails.qrCode = action.payload.data.companyDetails.qrCode;
            userData.data.companyDetails.eSign = action.payload.data.companyDetails.eSign;
            return {
                ...state, 
                user: userData
            };

        case "API_SUCCESS":
            var success = action.paylod;
            return {
                ...state, 
                apiSuccess: success
            };

        default:
            return state;
    }
}

export default profileReducer;