import { combineReducers } from "redux";
/*Reducers*/
import gamesReducer from "./gamesReducer";
import userReducer from "./userReducer";
import phrasesReducer from "./phrasesReducer";

const mainReducer = combineReducers(
    {
        gamesReducer,
        userReducer,
        phrasesReducer
    }
)

export default mainReducer