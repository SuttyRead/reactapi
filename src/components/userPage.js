import {Component} from 'react';
import {Redirect} from "react-router-dom";
import React from "react";

class UserPage extends Component {
    render() {
        if (!sessionStorage.getItem('token')) {
            return <Redirect to="/login" />
        }
        if (sessionStorage.getItem('role') === 'ADMIN') {
            return <Redirect to="/admin"/>
        }
        return (
            `Hello, ${sessionStorage.getItem('login')}!`
        );
    }
}

export default UserPage;