import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CovidCases } from "./reducer/CovidCases";

const reducer = combineReducers({
  CovidCases,
});

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
