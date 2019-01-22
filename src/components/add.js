import React, {Component} from 'react';
import UserService from "../services/user-service";
import {Redirect} from "react-router-dom";

class Add extends Component {

    constructor(props) {
        super(props);
        this.OnSubmitAdd = this.OnSubmitAdd.bind(this);
        this.OnChangeEmailAdd = this.OnChangeEmailAdd.bind(this);
        this.OnChangeBirthdayAdd = this.OnChangeBirthdayAdd.bind(this);
        this.OnChangePasswordAdd = this.OnChangePasswordAdd.bind(this);
        this.OnChangeConfirmPasswordAdd = this.OnChangeConfirmPasswordAdd.bind(this);
        this.OnChangeLoginAdd = this.OnChangeLoginAdd.bind(this);
        this.OnChangeFirstNameAdd = this.OnChangeFirstNameAdd.bind(this);
        this.OnChangeLastNameAdd = this.OnChangeLastNameAdd.bind(this);
    }

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

    userService = new UserService();

    render() {

        if (!this.userService.loggedIn()) {
            return <Redirect to="/login"/>
        }
        if (!this.userService.isAdmin()) {
            return <Redirect to="/home"/>
        }

        return (
            <div className="col-md-2">
                <h2 className="text-center">Add User</h2>
                <form onSubmit={this.OnSubmitAdd}>

                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text" placeholder="Enter login" name="login" className="form-control" id="login"
                               onChange={this.OnChangeLoginAdd}
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
                               onChange={this.OnChangePasswordAdd}
                               className="form-control" id="password" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">Password must be have*/}
                    {/*lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm password:</label>
                        <input type="password" placeholder="Enter confirm password"
                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                               onChange={this.OnChangeConfirmPasswordAdd}
                               name="confirmPassword"
                               className="form-control" id="confirmPassword" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Password must be have lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control"
                               onChange={this.OnChangeEmailAdd}
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
                               onChange={this.OnChangeFirstNameAdd}
                               pattern="^[A-Z]{1}[a-z]{1,25}"
                               className="form-control"
                               id="firstName" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Only latin letter.*/}
                    {/*First letter must be uppercase. For example Sutty*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" placeholder="Enter Last name" name="lastName"
                               onChange={this.OnChangeLastNameAdd}
                               className="form-control"
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
                               onChange={this.OnChangeBirthdayAdd}
                               className="form-control"
                               id="birthday" required/>
                    </div>

                    <button className="btn btn-success">Save</button>
                    <button className="btn btn-success">Cancel</button>

                </form>

            </div>);
    }

    OnChangeLoginAdd(e) {
        const userForm = this.state.userForm;
        userForm.login = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangePasswordAdd(e) {
        const userForm = this.state.userForm;
        userForm.password = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeEmailAdd(e) {
        const userForm = this.state.userForm;
        userForm.email = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeFirstNameAdd(e) {
        const userForm = this.state.userForm;
        userForm.firstName = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeLastNameAdd(e) {
        const userForm = this.state.userForm;
        userForm.lastName = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnChangeBirthdayAdd(e) {
        const userForm = this.state.userForm;
        userForm.birthday = e.target.value;
        this.setState({
            userForm: userForm
        })
    }

    OnSubmitAdd(event) {
        this.userService.add(this.state.userForm);
        console.log(this.state.userForm);
        event.preventDefault();
    }

    OnChangeConfirmPasswordAdd(e) {
        const userForm = this.state.userForm;
        userForm.confirmPassword = e.target.value;
        this.setState({
            userForm: userForm
        })
    }
}

export default Add;