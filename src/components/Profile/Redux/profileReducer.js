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

        case "PROFILE_AVATAR":
            var userData = {...state.user}
            userData.data.profileImageName = action.payload;
            return {
                ...state, 
                user: userData
            };

        case "COMPANY_LOGO":
            var userData = {...state.user}
            userData.data.companyDetails.companyLogo = action.payload;
            return {
                ...state, 
                user: userData
            };

        default:
            return state;
    }
}

export default profileReducer;