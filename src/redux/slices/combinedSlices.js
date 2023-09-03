import { combineReducers } from "redux";
import authSlice from "./authSlice";




const combinedSlices = combineReducers({
  auth: authSlice,
});

export default combinedSlices;
