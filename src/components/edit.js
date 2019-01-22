import {Component} from 'react';
import React from "react";
import UserService from "../services/user-service";
import {Link, Redirect} from "react-router-dom";

class Edit extends Component {

    constructor(props) {
        super(props);
        this.OnSubmitEdit = this.OnSubmitEdit.bind(this);
        this.OnChangeEmailEdit = this.OnChangeEmailEdit.bind(this);
        this.OnChangeBirthdayEdit = this.OnChangeBirthdayEdit.bind(this);
        this.OnChangePasswordEdit = this.OnChangePasswordEdit.bind(this);
        this.OnChangeLoginEdit = this.OnChangeLoginEdit.bind(this);
        this.OnChangeFirstNameEdit = this.OnChangeFirstNameEdit.bind(this);
        this.OnChangeLastNameEdit = this.OnChangeLastNameEdit.bind(this);

    }

    state = {
        user: {
            login: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            birthday: '',
            role: {
                id: '',
                name: ''
            },
        }
    };

    userService = new UserService();

    componentDidMount(): void {
        const id = this.props.match.params.id;
        this.userService.getUserById(id).then(e => e.json()).then(value => {
            console.log(value);
            this.setState({
                user: value
            })
        });

    }

    render() {

        if (!this.userService.loggedIn()) {
            return <Redirect to="/login"/>
        }
        if (!this.userService.isAdmin()) {
            return <Redirect to="/home"/>
        }

        return (
            <div className="col-md-2">
                <h2 className="text-center">Edit User</h2>
                <form onSubmit={this.OnSubmitEdit}>

                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text" placeholder="Enter login" name="login" className="form-control" id="login"
                               defaultValue={this.state.user.login}
                               onChange={this.OnChangeLoginEdit}
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" readOnly required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Uppercase and lowercase letter.*/}
                    {/*Must be 2-20 characters. Without specifically characters #,$,% and so on. For example SuttyRead*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="Enter password" name="password"
                               defaultValue={this.state.user.password} value={this.state.user.password}
                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                               onChange={this.OnChangePasswordEdit}
                               className="form-control" id="password" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">Password must be have*/}
                    {/*lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    {/*<div className="alert alert-danger" role="alert">*/}
                    {/*Password must be have lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control"
                               defaultValue={this.state.user.email} value={this.state.user.email}
                               onChange={this.OnChangeEmailEdit}
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
                               defaultValue={this.state.user.firstName}
                               onChange={this.OnChangeFirstNameEdit}
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
                               defaultValue={this.state.user.lastName}
                               onChange={this.OnChangeLastNameEdit}
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
                               defaultValue={this.state.user.birthday}
                               onChange={this.OnChangeBirthdayEdit}
                               className="form-control"
                               id="birthday" required/>
                    </div>
                    <div className='form-group'>
                        <select className="form-control">
                            <option value="ADMIN">Admin</option>
                            <option value="USER">User</option>
                        </select>
                    </div>

                    <button className="btn btn-success">Save</button>
                    <Link role="button" className="btn btn-success" to="/home">Cancel</Link>
                    {/*<button onClick= className="btn btn-success">Cancel</button>*/}

                </form>

            </div>
        );
    }

    OnChangeLoginEdit(e) {
        const user = this.state.user;
        user.login = e.target.value;
        this.setState({
            user: user
        })
    }

    OnChangePasswordEdit(e) {
        const user = this.state.user;
        user.password = e.target.value;
        this.setState({
            user: user
        })
    }

    OnChangeEmailEdit(e) {
        const user = this.state.user;
        user.email = e.target.value;
        this.setState({
            user: user
        })
    }

    OnChangeFirstNameEdit(e) {
        const user = this.state.user;
        user.firstName = e.target.value;
        this.setState({
            user: user
        })
    }

    OnChangeLastNameEdit(e) {
        const user = this.state.user;
        user.lastName = e.target.value;
        this.setState({
            user: user
        })
    }

    OnChangeBirthdayEdit(e) {
        const user = this.state.user;
        user.birthday = e.target.value;
        this.setState({
            user: user
        })
    }

    OnSubmitEdit(event) {
        this.userService.edit(this.state.user);
        console.log(this.state.user);
        event.preventDefault();
    }
}

export default Edit;