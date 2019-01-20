import {Component} from 'react';
import React from "react";

class User extends Component {

    render() {
        const {user} = this.props;
        return (
            <tr>
                    <td>{user.login}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.birthday}</td>
                    <td>{user.role}</td>
                    <td>
                        <button type="submit" className="btn btn-primary">Edit</button>
                        <button type="submit" className="btn btn-primary">Delete</button>
                    </td>
            </tr>
        );
    }
}

export default User;