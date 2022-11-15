import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";


const persistedReducer = (rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store
  