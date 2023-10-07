import { bookReducer } from "./books/bookReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
     books: bookReducer 
    });
