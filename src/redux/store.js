import thunk from "redux-thunk";
import logger from "redux-logger";
import base_reducer from "./base_reducer";
import { createStore, applyMiddleware } from "redux";

const middleware = [thunk, logger];

export const store = createStore(base_reducer, applyMiddleware(...middleware));
