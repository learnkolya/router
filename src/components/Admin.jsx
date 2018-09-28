import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Admin extends Component {
    render() {
        return(
            <div>
                <p>Hellow! I'm admin on this site</p> <br/> <hr/>

                <Link to="/users">Back to users</Link>
               
            </div>
        );
    }
}