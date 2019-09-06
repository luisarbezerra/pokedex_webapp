import { combineReducers } from 'redux'
import { modal } from './Modal'
import { pokemon } from './Pokemon'

export default combineReducers({
    modal,
    pokemon,
})