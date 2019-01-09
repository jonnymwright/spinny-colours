import { combineReducers } from "redux";
import orientation from './orientationReducer';

let testApp = combineReducers({
    orientation
});
  
export default testApp;