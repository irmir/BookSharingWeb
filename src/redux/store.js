import { createStore, combineReducers, applyMiddleware } from  'redux'
import thunk from 'redux-thunk'

import { authReducer } from './authReducer'
import { siteReducer } from './siteReducer'
import { queryReducer } from './queryReducer'
import { sliderReducer } from './sliderReducer'

const reducers = combineReducers({
    auth: authReducer,
    site: siteReducer,
    query: queryReducer,
    slider: sliderReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))