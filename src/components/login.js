import React, {Component} from 'react';
import UserService from "./user-service";
import {Redirect} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginForm: {
                login: '',
                password: ''
            },
            role: sessionStorage.getItem('role')
        };

        this.OnChangeLoginLogIn = this.OnChangeLoginLogIn.bind(this);
        this.OnChangePasswordLogIn = this.OnChangePasswordLogIn.bind(this);
        this.OnSubmitLogin = this.OnSubmitLogin.bind(this);
    }

    userService = new UserService();


    render() {
        if (this.state.role === "ADMIN") {
            return (
                <Redirect to="/admin"/>
            )
        } else if (this.state.role === "USER") {
            return (
                <Redirect to="/user"/>
            )
        }
        return (
            <div>
                <div className="col-md-2">

                    {/*<div className="alert alert-danger" role="alert">Login or password incorrect</div>*/}

                    <form className="form" onSubmit={this.OnSubmitLogin}>
                        <div className="form-group">
                            <label htmlFor="login">Login:</label>
                            <input type="text" placeholder="Login" name="login" className="form-control" id="login"
                                   onChange={this.OnChangeLoginLogIn}
                                   required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder="Password" name="password" className="form-control"
                                   onChange={this.OnChangePasswordLogIn}
                                   id="password" required/>
                        </div>
                        <button className="btn btn-success">Log in</button>
                    </form>
                </div>
            </div>
        );
    }

    OnSubmitLogin(event) {
        this.userService.login(this.state.loginForm).then(e => e.json()).then(data => {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('login', data.login);
            sessionStorage.setItem('role', data.role.name);
        });
        event.preventDefault();
        this.props.history.push("/admin");
        // this.props.history.reload("/admin");
    }

    OnChangePasswordLogIn(e) {
        const loginForm = this.state.loginForm;
        loginForm.password = e.target.value;
        this.setState({
            loginForm: loginForm
        })
    }

    OnChangeLoginLogIn(e) {
        const loginForm = this.state.loginForm;
        loginForm.login = e.target.value;
        this.setState({
            loginForm: loginForm
        })
    }
}

export default Login;