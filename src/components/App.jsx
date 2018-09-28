import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Users from "./Users";

export default class App extends Component {
    render() {
        return(
            <div>
                <Link to="/">Home</Link> <br/>
                <Link to="/users">Users</Link> <hr/>


                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={Users} />
                </Switch>
            </div>
        );
    };
}
