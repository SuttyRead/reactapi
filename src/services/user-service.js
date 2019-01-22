import history from "../utils/history";

export default class UserService {

    header = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Basic ${sessionStorage.getItem('token')}`
        }
    };

    getAllUsers() {
        return fetch('http://10.10.103.100:8050/users', this.header);
    }

    getUserById(id) {
        return fetch('http://10.10.103.100:8050/users/' + id, this.header);
    }

    getUserByLogin(login) {
        return fetch('http://10.10.103.100:8050/checkLogin/' + login, this.header);
    }

    login(loginForm) {
        return fetch('http://10.10.103.100:8050/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginForm)
        });
    }

    add(userForm) {
        return fetch('http://10.10.103.100:8050/users', {
            headers: this.header.headers,
            method: 'POST',
            body: JSON.stringify(userForm)
        });

    }

    registration(userForm) {
        return fetch('http://10.10.103.100:8050/registration', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userForm)
        });

    }

    edit(user) {
        return fetch('http://10.10.103.100:8050/users/' + user.id, {
            method: 'PUT',
            headers: this.header.headers,
            body: JSON.stringify(user)
        });
    }

    delete(id) {
        return fetch('http://10.10.103.100:8050/users/' + id, {
            method: 'DELETE',
            headers: this.header.headers
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