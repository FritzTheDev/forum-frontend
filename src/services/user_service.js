import config from 'config';
import axios from 'axios';

export const userService = {
    login,
    logout
}

const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify({ username, password })
    };
    return axios.get('localhost:3000/user/authenticate', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

const logout = () => {
    localStorage.removeItem('user');
}


const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
    
    return data;
    });
}