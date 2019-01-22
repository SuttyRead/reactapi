import history from "../utils/history";

export default class UserService {

    static async getResource(url) {
        const res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            }
        });
        return await res.json();
    }

    getAllUsers() {
        return UserService.getResource('http://10.10.103.100:8050/users')
    }

    getUserById(id) {
        return UserService.getResource('http://10.10.103.100:8050/users/' + id, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    login(loginForm) {
        return fetch('http://10.10.103.100:8050/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS, PUT"
            },
            body: JSON.stringify(loginForm)
        });
    }

    add(userForm) {
        return fetch('http://10.10.103.100:8050/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            },
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
        return fetch('http://10.10.103.100:8050/users/' + user.id, user, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS, PUT",
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            },
            body: JSON.stringify(user)
        });
    }

    delete(id) {
        return fetch('http://10.10.103.100:8050/users/' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
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