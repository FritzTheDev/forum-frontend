import { userConstants } from '../constants/user_constants';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} = userConstants;

export const attemptLogin = () => {
    return {
        type: LOGIN_REQUEST
    }
}