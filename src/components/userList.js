import React, {Component} from 'react';
import UserService from "../services/user-service";
import User from "./user";

class UserList extends Component {


    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        this.userService.getAllUsers().then(value => {
            this.setState({
                users: value
            })
        })
    }

    userService = new UserService();

    render() {
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
                {this.state.users.map(user =>
                    <User user={user} key={user.id}/>
                )}
                </tbody>
            </table>

        );
    }
}

export default UserList;