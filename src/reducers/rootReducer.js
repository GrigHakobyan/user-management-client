import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension'

import { authReducer } from "./authReducer";
import { usersReducer } from "./usersReducer";
import { carReducer } from "./carReducer";

const rootReducer = combineReducers({
    authReducer,
    usersReducer,
    carReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
