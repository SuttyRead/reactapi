import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import UserService from "../services/user-service";

class Registration extends Component {

    state = {
        userForm: {
            login: '',
            password: '',
            confirmPassword: '',
            email: '',
            firstName: '',
            lastName: '',
            birthday: ''
        }
    };

    constructor(props) {
        super(props);
        this.OnSubmitRegistration = this.OnSubmitRegistration.bind(this);
        this.OnChangeEmailRegistration = this.OnChangeEmailRegistration.bind(this);
        this.OnChangeBirthdayRegistration = this.OnChangeBirthdayRegistration.bind(this);
        this.OnChangePasswordRegistration = this.OnChangePasswordRegistration.bind(this);
        this.OnChangeConfirmPasswordRegistration = this.OnChangeConfirmPasswordRegistration.bind(this);
        this.OnChangeLoginRegistration = this.OnChangeLoginRegistration.bind(this);
        this.OnChangeFirstNameRegistration = this.OnChangeFirstNameRegistration.bind(this);
        this.OnChangeLastNameRegistration = this.OnChangeLastNameRegistration.bind(this);
    }


    userService = new UserService();

    render() {

        if (this.userService.loggedIn()) {
            return <Redirect to="/home"/>
        }

        return (<div>
            <div className="col-md-2">
                <h2 className="text-center">Registration</h2>
                <form onSubmit={this.OnSubmitRegistration}>

                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text" placeholder="Enter login" name="login" className="form-control" id="login"
                               onChange={this.OnChangeLoginRegistration}
                                required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Uppercase and lowercase letter.*/}
                    {/*Must be 2-20 characters. Without specifically characters #,$,% and so on. For example SuttyRead*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="Enter password" name="password"
                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                               onChange={this.OnChangePasswordRegistration}
                               className="form-control" id="password" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">Password must be have*/}
                    {/*lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm password:</label>
                        <input type="password" placeholder="Enter confirm password"
                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                               onChange={this.OnChangeConfirmPasswordRegistration}
                               name="confirmPassword"
                               className="form-control" id="confirmPassword" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Password must be have lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control"
                               onChange={this.OnChangeEmailRegistration}
                               pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,4}"
                               id="email" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Enter correct email. Email*/}
                    {/*must be have @. For example SuttyRead@gmail.com*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" placeholder="Enter First Name" name="firstName"
                               pattern="^[A-Z]{1}[a-z]{1,25}"
                               className="form-control"
                               onChange={this.OnChangeFirstNameRegistration}
                               id="firstName" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Only latin letter.*/}
                    {/*First letter must be uppercase. For example Sutty*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" placeholder="Enter Last name" name="lastName"
                               className="form-control"
                               onChange={this.OnChangeLastNameRegistration}
                               pattern="^[A-Z]{1}[a-z]{1,25}"
                               id="lastName" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Only latin letter. First letter must be uppercase.*/}
                    {/*For example Sutty*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="birthday">Birthday:</label>
                        <input type="date" placeholder="Enter birthday" name="birthday"
                               className="form-control"
                               onChange={this.OnChangeBirthdayRegistration}
                               id="birthday" required/>
                    </div>

                    <button className="btn btn-success">Save</button>
                    <button className="btn btn-success">Cancel</button>

                </form>

            </div>
        </div>);
    }

    OnChangeLoginRegistration(e) {
        const userForm = this.state.userForm;
        userForm.login = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangePasswordRegistration(e) {
        const userForm = this.state.userForm;
        userForm.password = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeEmailRegistration(e) {
        const userForm = this.state.userForm;
        userForm.email = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeFirstNameRegistration(e) {
        const userForm = this.state.userForm;
        userForm.firstName = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeLastNameRegistration(e) {
        const userForm = this.state.userForm;
        userForm.lastName = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeBirthdayRegistration(e) {
        const userForm = this.state.userForm;
        userForm.birthday = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnSubmitRegistration(event) {
        this.userService.registration(this.state.userForm);
        console.log(this.state.userForm);
        event.preventDefault();
    }

    OnChangeConfirmPasswordRegistration(e) {
        const userForm = this.state.userForm;
        userForm.confirmPassword = e.target.value;
        this.setState({
            userForm: userForm
        })
    }
}

export default Registration;