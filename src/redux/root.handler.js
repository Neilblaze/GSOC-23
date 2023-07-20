import { combineReducers } from "redux";
import gestureHandler from "./gesture/gesture.handler";

export default combineReducers({
  hand: gestureHandler,
});
