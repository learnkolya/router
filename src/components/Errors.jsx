import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Errors extends Component {
    render() {
        return(
            <div>
                <p>User not found!</p> <br/> <hr/>

                {/* <Link to="/users">Back to users</Link>             */}
            </div>
        );
    }
}