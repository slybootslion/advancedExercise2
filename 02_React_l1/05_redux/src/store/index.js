import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer.js";
import generateSaga from "./saga";

// 应用中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sageMiddleware = createSagaMiddleware()
const storeEnhancer = applyMiddleware(thunkMiddleware, sageMiddleware)
const store = createStore(reducer, composeEnhancers(storeEnhancer))
sageMiddleware.run(generateSaga)

export default store
