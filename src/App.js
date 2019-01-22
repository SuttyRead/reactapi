import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Edit from "./components/edit";
import Add from "./components/add";
import Registration from "./components/registration";
import AdminPage from "./components/adminPage";
import Login from "./components/login";
import Main from "./components/main";
import UserService from "./services/user-service";
import UserPage from "./components/userPage";

class App extends Component {

    userService = new UserService();

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/edit/:id" component={Edit}/>
                        <Route path="/add" component={Add}/>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/home"
                               render={() => (this.userService.isAdmin() ? (<AdminPage/>) : (<UserPage/>))}/>
                        <Route path="/" component={Main} exact/>
                        <Route render={() => <h2>Page not found</h2>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
