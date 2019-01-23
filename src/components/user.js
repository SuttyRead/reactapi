import React, {Component} from 'react';
import UserService from "../services/user-service";
import {Link} from "react-router-dom";
import history from '../utils/history';

class User extends Component {

    userService = new UserService();

    render() {
        return (
            <tr>
                <td>{this.props.user.login}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.birthday}</td>
                <td>{this.props.user.role.name}</td>
                <td>
                    <Link role="button" className="btn btn-primary" to={`/edit/${this.props.user.id}`}>Edit</Link>
                    <button type="submit" onClick={() => this.deleteUser()} className="btn btn-primary">Delete</button>
                </td>
            </tr>
        );
    }

    deleteUser() {
        if (window.confirm('Delete ' + this.props.user.login + '?')) {
            this.userService.delete(this.props.user.id);
        }
    }

}


export default User;

