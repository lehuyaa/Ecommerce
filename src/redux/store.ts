import { createStore, combineReducers } from 'redux'
import userInfoReducer from './reducer/userInfoReducer';
import rootReducer from './reducer'


const store = createStore(rootReducer)

export default store
