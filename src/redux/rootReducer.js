import { combineReducers } from "redux";
import scriptReducer from "./modules/scripts.module";

export default combineReducers({ scripts: scriptReducer });
