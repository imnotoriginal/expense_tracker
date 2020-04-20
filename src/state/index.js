import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import * as redusers from "./reducers"

export default createStore(
    combineReducers(redusers),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)