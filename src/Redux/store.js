import { createStore, applyMiddleware, compose } from "redux";
import { highLightsReducer } from "./reducer";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  highLightsReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
