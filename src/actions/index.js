import { userConstants } from '../constants/user_constants';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} = userConstants;

export const attemptLogin = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        

    }
}