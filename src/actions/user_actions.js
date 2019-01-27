import { userConstants } from '../constants/user_constants';
import { userService } from '../services';
import { history } from '../helpers';

export const user_actions = {
    login,
    logout
};

const login = (username, password) => {
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
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}