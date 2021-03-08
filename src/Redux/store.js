import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
