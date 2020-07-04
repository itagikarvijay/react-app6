import { setError } from '../actions/errorActions';

class LoginService {

    async getUser(userName, password) {
        let isUserAuthenticated = false;

        await fetch('/api/users/authenticateUser', {
            headers: {
                'Authorization': 'Basic ' + btoa(userName + ':' + password)
            }
        })
            .then(response => response.json())
            .then(user => {
                if (user['username'] === userName && user['password'] === password) {
                    console.log('redirecting....')
                    isUserAuthenticated = true;
                    sessionStorage.setItem("currentUser", JSON.stringify(user));
                } else {
                    isUserAuthenticated = false;
                }
            });
        return isUserAuthenticated ? Promise.resolve(sessionStorage.getItem("currentUser")) : Promise.reject(isUserAuthenticated)
    }
}
export default LoginService;