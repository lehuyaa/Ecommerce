import { UPDATE_USER_INFO, LOG_OUT } from '../type';

const initialState = {
    token: '',
    loggedIn: false,
};
const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return {
                ...state,
                token: action.payload.token,
                loggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                token: '',
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUser;