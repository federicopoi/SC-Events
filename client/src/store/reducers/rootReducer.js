import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eventsReducer from "./eventsReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  events: eventsReducer,
});
