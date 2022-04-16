import { createStore , applyMiddleware } from "redux";

// redux
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


// rootReducer
import rootReducer from "./rootReducer";

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));

export default store ;