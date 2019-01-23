import {Component} from 'react';
import {Redirect} from "react-router-dom";
import React from "react";
import Link from "react-router-dom/es/Link";
import UserList from "./userList";

class HomePage extends Component {
    render() {
        if (!sessionStorage.getItem('token')) {
            return <Redirect to="/login"/>
        }
        if (sessionStorage.getItem('role') === 'ADMIN') {
            return <div>
                <Link to="/add">Add User</Link>
                <UserList/>
            </div>;
        } else {
            return (
                `Hello, ${sessionStorage.getItem('login')}!`
            );
        }

    }
}

export default HomePage;