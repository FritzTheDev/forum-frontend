import { userConstants } from '../constants/user_constants';
import { userService } from '../services';
import { history } from '../helpers';

export const login = (email, password) => {
    return dispatch => {
        userService.login(email, password)
            .then(user => {
                dispatch({ type: userConstants.LOGIN_SUCCESS, user });
                history.push('/');
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