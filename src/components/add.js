import React, {Component} from 'react';

class Add extends Component {
    render() {
        return (<div>
            <div className="col-md-2">
                <h2 className="text-center">Add User</h2>
                <form>

                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text" placeholder="Enter login" name="login" className="form-control" id="login"
                               pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20} $" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                        {/*Uppercase and lowercase letter.*/}
                        {/*Must be 2-20 characters. Without specifically characters #,$,% and so on. For example SuttyRead*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="Enter password" name="password"
                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                               className="form-control" id="password" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">Password must be have*/}
                        {/*lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm password:</label>
                        <input type="password" placeholder="Enter confirm password"
                               pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                               name="confirmPassword"
                               className="form-control" id="confirmPassword" required/>
                    </div>
                    {/*<div className="alert alert-danger" role="alert">*/}
                        {/*Password must be have lowercase and uppercase Latin letters, number. Minimum 8 characters*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control"
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
                               id="birthday" required/>
                    </div>

                    <button className="btn btn-success">Save</button>
                    <button className="btn btn-success">Cancel</button>

                </form>

            </div>
        </div>);
    }
}

export default Add;