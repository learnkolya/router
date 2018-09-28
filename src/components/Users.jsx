import { Link, Switch, Route, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import Admin from './Admin';
import Kolya from './Kolya';
import Errors from './Errors'

export default class Users extends Component {
    render() {
        return(
            <div>
                <Link to="/users/1">Admin</Link> <br/>
                <Link to="/users/2">Kolya</Link>

                <Switch>
                    <Route path="/users/1" component={Admin} exact/>
                    <Route path="/users/2" component={Kolya} exact/>
                    <Redirect from="/users/:id" to="/errors"/>
                    <Route path="/errors" component={Errors}/> 
                </Switch>
            </div>
        );
    }
}