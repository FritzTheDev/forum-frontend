import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/user_constants';

let userData = JSON.parse(localStorage.getItem('user'));
const initialState = userData ? { loggedIn: true, userData }  : {};

export default function AuthReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case LOGIN_REQUEST: {
        return {
            loggingIn: true,
            userData: action.user
        };
    }
    case LOGIN_SUCCESS: {
        return {
            loggingIn: false,
            loggedIn: true,
            userData: action.user
        };
    }
    case LOGIN_FAILURE:
        return {};
    case LOGOUT:
        return {};
    default:
        return state;
    }
}