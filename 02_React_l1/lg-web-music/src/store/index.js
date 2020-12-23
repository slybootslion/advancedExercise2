import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer'

const isDev = process.env.NODE_ENV === 'development'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = isDev ? composeEnhancers(applyMiddleware(thunk)) : applyMiddleware(thunk)

export default createStore(reducer, middleware)
