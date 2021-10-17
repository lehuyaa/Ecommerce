import currentUser from '../reducer/userInfoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currentUser,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer