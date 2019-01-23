export default class UserService {

    headerForGuest = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        }
    };

    headerForLoggedInUser = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Basic ${sessionStorage.getItem('token')}`
        }
    };

    getAllUsers() {
        return fetch('http://10.10.103.100:8050/users', this.headerForLoggedInUser);
    }

    getUserById(id) {
        return fetch('http://10.10.103.100:8050/users/' + id, this.headerForLoggedInUser);
    }

    getUserByLogin(login) {
        return fetch('http://10.10.103.100:8050/checkLogin/' + login, this.headerForGuest);
    }

    login(loginForm) {
        return fetch('http://10.10.103.100:8050/login', {
            method: 'POST',
            headers: this.headerForGuest.headers,
            body: JSON.stringify(loginForm)
        });
    }

    add(userForm) {
        return fetch('http://10.10.103.100:8050/users', {
            headers: this.headerForLoggedInUser.headers,
            method: 'POST',
            body: JSON.stringify(userForm)
        });

    }

    registration(userForm) {
        return fetch('http://10.10.103.100:8050/registration', {
            method: 'POST',
            headers: this.headerForGuest.headers,
            body: JSON.stringify(userForm)
        });
    }

    edit(user) {
        return fetch('http://10.10.103.100:8050/users/' + user.id, {
            method: 'PUT',
            headers: this.headerForLoggedInUser.headers,
            body: JSON.stringify(user)
        });
    }

    delete(id) {
        return fetch('http://10.10.103.100:8050/users/' + id, {
            method: 'DELETE',
            headers: this.headerForLoggedInUser.headers
        });
    }

    logout() {
        sessionStorage.clear();
    }

    loggedIn() {
        return sessionStorage.getItem('token');
    }

    isAdmin() {
        return sessionStorage.getItem('role') === "ADMIN";
    }

}