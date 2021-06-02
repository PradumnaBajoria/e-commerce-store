import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from "./RootReducer"

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
//const store = createStore(rootReducer, applyMiddleware(logger))

export default store