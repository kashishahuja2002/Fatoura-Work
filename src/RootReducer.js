import authReducer from "./components/auth/Redux/authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authReducer
});

export default rootReducer;