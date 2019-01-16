import { combineReducers } from "redux";
import orientation from './orientationReducer';
import rgb from './rgbReducer'

let testApp = combineReducers({
    orientation,
    rgb
});
  
export default testApp;