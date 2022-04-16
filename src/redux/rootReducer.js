import { combineReducers } from "redux";

// reducer
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
    todoState : todoReducer ,
});

export default rootReducer ;