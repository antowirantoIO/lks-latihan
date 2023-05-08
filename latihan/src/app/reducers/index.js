import { reducerAuth } from './auth'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    auth: reducerAuth
})

export default allReducers