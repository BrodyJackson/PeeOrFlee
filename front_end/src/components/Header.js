import React, { Component } from 'react'; 
import '../App.css';
import Searchbar from './Searchbar.js';

class Header extends Component {

    buttonClick(){

    }
    render(){
        return (
            <div> 
                <div className="header">
                    <Searchbar></Searchbar>
                    <div className="button_flex_container">
                        <button type="button" className = "newFacilityButton" onClick={this.buttonClick}> Add New Facility </button>
                        <button type="button" className = "viewBestButton" onClick={this.buttonClick}> View Best Facility's </button> 
                        <button type="button" className = "viewRecentButton" onClick={this.buttonClick}> View Recent Ratings </button> 
                    </div>
                    <img className = "header_image" src = {require("../images/header.jpg")} alt=""></img> 
                    <img className = "uni_logo" src = {require("../images/uc_logo.png")} alt=""></img>  
                </div>
                
            </div> 
        );
     }
}

export default Header; 