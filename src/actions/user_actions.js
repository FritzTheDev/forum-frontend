import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/user_constants';
import { userService } from '../services';
import { history } from '../helpers';

export function login(email, password) {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:3000/user/authenticate', { email, password });

            dispatch({ type: LOGIN_SUCCESS, user: res.data.user });
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res.data));
        } catch (error) {
            dispatch({ type: LOGIN_FAILURE });
        }
        // userService.login(email, password)
        //     .then(user => {
        //         dispatch({ type: LOGIN_SUCCESS, user });
        //         history.push('/');
        //     }, error =>{
        //         dispatch({ type: LOGIN_FAILURE, error });
        //     });
    }
}

export const logout = () => {
    userService.logout();
    return { type: LOGOUT };
}
