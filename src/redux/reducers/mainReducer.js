import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import userReducer from "./userReducer";

const mainReducer = combineReducers(
    {
        gamesReducer,
        userReducer
    }
)

export default mainReducer