import authReducer from "./components/auth/Redux/authReducer";
import profileReducer from "./components/Profile/Redux/profileReducer";
import pagesReducer from "./components/pages/Redux/pagesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    pages: pagesReducer
});

export default rootReducer;