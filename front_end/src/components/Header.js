import React, { Component } from 'react'; 
import '../App.css';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <img className = "header_image" src = {require("../images/header.jpg")} alt=""></img> 
            </div>
        );
     }
}

export default Header; 