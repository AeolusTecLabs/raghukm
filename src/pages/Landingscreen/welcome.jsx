import React, { Component } from 'react';
import './welcome.css';

class welcome extends Component {
    render() {
        return (
            <div>
            <header id="showcase">
            <h1>Aeolus Tech labs</h1>
        </header>
        <div id="content" className="container">
            <h3>React Development...</h3>
        </div>
        <a href="https://raghuproject.herokuapp.com/" className="btn" >
           <span>Welcome</span>
        </a>
        </div>
        );
    
    }
}

export default welcome;

