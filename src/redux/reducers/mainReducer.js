import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const mainReducer = combineReducers(
    {
        gamesReducer
    }
)

export default mainReducer