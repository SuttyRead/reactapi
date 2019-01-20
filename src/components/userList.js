import {Component} from 'react';
import User from "./user";
import React from "react";
import {AxiosInstance as axios} from "axios";
import UserService from "./user-service";

class UserList extends Component {

    // userService = new UserService();

    state = {
        users: '',

    };

    constructor() {
        super();
        UserService.getAllUsers().then((value => {
            this.setState({
                users: value
            })
        }));
    }

    // componentDidMount() {
    //
    // }

    render() {

        // const {users} = this.state;
        // console.log(users);
        return (

            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>Login</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
                {/*{this.users}*/}
                {/*{users.map((user) =>*/}
                    {/*<tr>*/}
                        {/*<td>*/}
                            {/*{user.login}*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*{user.email}*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*{user.firstName}*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*{user.lastName}*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*/!*{this.calculateAge(user.birthday)}*!/*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*/!*{user.role.name == 'ROLE_ADMIN' ? "admin" : "user"}*!/*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*/!*<Button onClick={() => this.handleDelete(user.id)}>Delete</Button>*!/*/}
                            {/*/!*<Button onClick={() => this.handleEdit(user.id)}>Edit</Button>*!/*/}
                        {/*</td>*/}
                    {/*</tr>*/}
                {/*)}*/}


                {/*{this.users.map((user: User) =>*/}
                {/*<User  user={user}/>)}*/}

                {/*<User user={this.users[0]} />*/}
                {/*<UserElement/>*/}
                {/*<User user={this.users}/>*/}
                {/*<User user={this.users}/>*/}
                {/*<User user={{*/}
                {/*login: 'login',*/}
                {/*firstName: 'firstName',*/}
                {/*lastName: 'lastName',*/}
                {/*birthday: 'birthday',*/}
                {/*age: 'age',*/}
                {/*role: 'role'*/}
                {/*}}/>*/}

            </table>

        );
    }
}

export default UserList;