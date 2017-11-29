import React, { Component } from 'react'; 
import '../App.css';


class Searchbar extends Component {
    render(){
        return (
            <div className="searchBox">
                <input
                className="search_field" 
                type="text"
                placeholder="Enter a Building..."
                onChange = {this.handleChange}
                />
            </div>
        );
     }
}

export default Searchbar; 