import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [thunk]

let middleware = applyMiddleware(...middlewares)

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  middleware
)
export default store;