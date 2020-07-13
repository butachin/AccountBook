import { combineReducers } from "redux";
import items from "./Items";

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
