import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;