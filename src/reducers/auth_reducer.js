import { userConstants } from '../constants/user_constants';

let userData = JSON.parse(localStorage.getItem('user'));
const initialState = userData ? { loggedIn: true, userData }  : {};

export default function AuthReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case userConstants.LOGIN_REQUEST: {
        return {
            loggingIn: true,
            userData: action.user
        };
    }
    case userConstants.LOGIN_SUCCESS: {
        return {
            loggedIn: true,
            userData: action.user
        };
    }
    case userConstants.LOGIN_FAILURE:
        return {};
    case userConstants.LOGOUT:
        return {};
    default:
        return state;
    }
}