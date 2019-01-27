import { userConstants } from '../constants/user_constants';
import { userService } from '../services';
import { history } from '../helpers';

export const login = (username, password) => {
    return dispatch => {
        userService.login({ username, password })
            .then(user => {
                dispatch({ type: userConstants.LOGIN_SUCCESS, user });
            });
    }
}

// login Helpers

export const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

//skipping indexing unless I need it

// export const user_actions = {
//     login,
//     logout
// };