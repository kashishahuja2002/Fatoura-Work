import authReducer from "./components/auth/Redux/authReducer";
import profileReducer from "./components/profile/Redux/profileReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
});

export default rootReducer;