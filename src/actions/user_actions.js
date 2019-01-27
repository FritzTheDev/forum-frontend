import { userConstants } from '../constants/user_constants';
import { userService } from '../services';
import { history } from '../helpers';

const login = (username, password) => {
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export const user_actions = {
    login,
    logout
};