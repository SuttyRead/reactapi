import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import {BrowserRouter, Route} from "react-router-dom"
import Edit from "./components/edit";
import Add from "./components/add";
import UserPage from "./components/userPage";
import Registration from "./components/registration";
import AdminPage from "./components/adminPage";
import Login from "./components/login";
import Main from "./components/main";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/edit/:id" component={Edit}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/user" component={UserPage}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/admin" component={AdminPage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Main} exact />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
