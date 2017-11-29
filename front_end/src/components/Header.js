import React, { Component } from 'react'; 
import '../App.css';
import Searchbar from './Searchbar.js';

class Header extends Component {
    render(){
        return (
            <div> 
                <div className="header">
                    <Searchbar></Searchbar>
                    <img className = "header_image" src = {require("../images/header.jpg")} alt=""></img>   
                </div>
                
            </div> 
        );
     }
}

export default Header; 