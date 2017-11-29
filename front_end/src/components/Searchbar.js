import React, { Component } from 'react'; 
import '../App.css';


class Searchbar extends Component {
    constructor(props){
        super(props); 
        this.state = {
            allBathrooms: [], 
            inCurrentSearch: [], 
            searchValue : ""
        }; 
    }

    componentDidMount(){
        console.log("hello"); 
        fetch("/bathrooms")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            this.setState({ allBathrooms : data });
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
    handleChange(e){
        e.preventDefault(); 
        console.log(e.target.value); 
        this.setState( { searchValue : e.target.value})
    }


    render(){
        return (
            <div className="searchBox">
                <input
                value = {this.state.searchValue}
                className="search_field" 
                type="text"
                placeholder="Enter a Building..."
                onChange = {this.handleChange.bind(this)}
                />
            </div>
        );
     }
}

export default Searchbar; 