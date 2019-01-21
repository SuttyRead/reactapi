import React, {Component} from 'react';
import UserList from "./userList";
import Link from "react-router-dom/es/Link";
import {Redirect} from "react-router-dom";

class AdminPage extends Component {

    render() {
        if (!sessionStorage.getItem('token') || sessionStorage.getItem('role') === 'USER') {
            return <Redirect to="/user" />
        }
        return (
            <div>
                <Link to="/add">Add User</Link>
                <UserList/>
            </div>
        );
    }
}

export default AdminPage;