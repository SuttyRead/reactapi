import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="col-md-2">

                    {/*<div className="alert alert-danger" role="alert">Login or password incorrect</div>*/}

                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="login">Login:</label>
                            <input type="text" placeholder="Login" name="login" className="form-control" id="login"
                                   pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder="Password" name="password" className="form-control"
                                   pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                   id="password" required/>
                        </div>
                        <button className="btn btn-success">Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;