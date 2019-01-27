import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/user_constants';

export const attemptLogin = () => {
    return {
        type: LOGIN_REQUEST
    }
}