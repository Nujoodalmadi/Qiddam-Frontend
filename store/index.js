// Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Reducer
import rootReducer from "./reducers";
// Actions
import * as actionCreators from "./actions";

// Creating the store
const middlewares = [thunk];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

store.dispatch(actionCreators.checkForExpiredToken());

export default store;
