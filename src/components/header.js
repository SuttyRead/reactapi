import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserService from "./user-service";

class Header extends Component {

    state = {
        login: sessionStorage.getItem('login')
    };

    userService = new UserService();

    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">React</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Main</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/registration">Registration</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                </ul>
                {this.state.login},
                <Link onClick={() => this.userService.logout()} to="/login"> Logout</Link>

            </div>
        </nav>);
    }
}

export default Header;