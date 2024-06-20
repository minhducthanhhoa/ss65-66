import { combineReducers, createStore } from "redux"
import countReducer from "./reducers/countReducer"
import jobReducer from "./reducers/todolistReducer";
import userReducer from "./reducers/Bai1/useReducer";
import usersReducer from "./reducers/Bai2/usersReducer";
import productReducer from "./reducers/Bai3/productReducer";
import counterReducer from "./reducers/Bai4/counterReducer";
import randomNumberReducer from "./reducers/Bai5/randomReducer";
import companyReducer from "./reducers/Bai6/companyReducer";

const rootReducer = combineReducers([
    countReducer,
    jobReducer,
    userReducer,
    usersReducer,
    productReducer,
    counterReducer,
    randomNumberReducer,
    companyReducer
])
const store = createStore(rootReducer);
export default store;