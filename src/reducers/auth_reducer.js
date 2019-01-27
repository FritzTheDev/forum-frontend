import { userConstants } from '../constants/user_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user }  : {};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST: {
        console.log(action);
        return {
            loggingIn: true,
            user: action.user
        };
    }
    case userConstants.LOGIN_SUCCESS: {
        return {
            loggedIn: true,
            user: action.user
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