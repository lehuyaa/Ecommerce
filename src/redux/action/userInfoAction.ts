import { UPDATE_USER_INFO, LOG_OUT } from '../type'

const setUser = (payload: any) => {
    return {
        type: UPDATE_USER_INFO,
        payload: {
            token: payload.token,
        }
    }
}
const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export {
    setUser,
    logOut
}