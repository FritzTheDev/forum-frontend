import { userConstants } from '../constants/user_constants';
import { userService } from '../services';
import { history } from '../helpers';

export function login(email, password) {
    return dispatch => {
        dispatch({ type: userConstants.LOGIN_REQUEST, email });

        userService.login(email, password)
            .then(user => {
                dispatch({ type: userConstants.LOGIN_SUCCESS, user });
                history.push('/');
            }, error =>{
                dispatch({ type: userConstants.LOGIN_FAILURE, error });
            });
    }
}

export const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
