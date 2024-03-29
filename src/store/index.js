import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import rootReducer from './reducers'

// for TESTING
export const middlewares = [reduxThunk]

// redux devtools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares ),
  // other store enhancers if any
);


export const store = createStore(
  rootReducer,
  enhancer
)