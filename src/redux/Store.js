import { createStore, applyMiddleware } from 'redux'
import { persistStore } from "redux-persist"

import logger from 'redux-logger'
import rootReducer from "./RootReducer"

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//const store = createStore(rootReducer, applyMiddleware(logger))

export const persistor = persistStore(store)

export default ({store, persistor})
