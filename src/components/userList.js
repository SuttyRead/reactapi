import React, {Component} from 'react';
import UserService from "../services/user-service";
import User from "./user";
import {Link} from "react-router-dom";

class UserList extends Component {


    state = {
        users: []
    };

    componentDidMount() {
        this.userService.getAllUsers().then(e => e.json()).then(value => {
            this.setState({
                users: value
            })
        })
    }

    userService = new UserService();

    render() {
        return (
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>Login</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map(user =>
                    <tr>
                        <td>{user.login}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.birthday}</td>
                        <td>{user.role.name}</td>
                        <td>
                            <Link role="button" className="btn btn-primary" to={`/edit/${user.id}`}>Edit</Link>
                            <button type="submit" onClick={() => this.deleteUser(user.id, user.login)}
                                    className="btn btn-primary">Delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

        );
    }

    deleteUser(id, login) {
        let users = [];
        if (window.confirm('Delete ' + login + '?')) {
            this.userService.delete(id).then(e => {
                if (e.status === 200) {
                    this.state.users.map(user => {
                        if (user.id !== id) {
                            users.push(user);
                        }
                        this.setState({
                            users: users
                        })
                    })
                }
            });
        }
    }

}

export default UserList;