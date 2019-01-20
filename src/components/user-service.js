export default class UserService {
    static async getResource(url) {
        const res = await fetch(url);
        return await res.json();
    }

    static getAllUsers() {
        return UserService.getResource('http://localhost:9000/users')
    }
}