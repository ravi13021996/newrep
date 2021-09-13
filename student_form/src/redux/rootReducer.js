import { combineReducers } from "redux";

import allReducer from "./allReducer.js";
import productReducer from "./productReducer.js"


const rootReducer =combineReducers({allReducer,productReducer})

export default rootReducer;
