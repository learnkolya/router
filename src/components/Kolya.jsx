import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Kolya extends Component {
    render() {
        return(
            <div>
                <p>Hellow! My name is Kolya</p><br/><hr/>

                <Link to="/users">Back to users</Link>
            </div>
        );
    }
}
