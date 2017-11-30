import React, { Component } from 'react'; 
import '../App.css';
import Searchresult from './Searchresult.js'; 

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
        this.setState( { searchValue : e.target.value});
    }

    determineResults(){
        var results = []; 
        console.log("in here"); 
        console.log(this.state.allBathrooms); 
        for (var i = 0; i < this.state.allBathrooms.length; i++ ){
            let searchText = this.state.allBathrooms[i].building; 
            if(searchText.substring(0, this.state.searchValue.length).toLowerCase() !== this.state.searchValue.toLowerCase() && this.state.searchValue.trim() !== ""){
                continue; 
            }
            else{
                results.push(this.state.allBathrooms[i]); 
            }
            
        }
        console.log("results", results); 
        return(results);  
    }


    renderSearchResults(results) {
        console.log("rendering results"); 
        if (results === [] || this.state.searchValue == ""){
            return(null); 
        }
        else{
            let elements = [];  
            for(let i = 0; i < results.length; i ++){
                let entry = <ul className = "resultListContainer"><Searchresult value={results[i]} click = {this.props.click}></Searchresult></ul>; 
                elements.push(entry); 
            }
            return(<div className = "searchResults"> {elements} </div>); 
        }
    }


    render(){
        console.log("rendering"); 
        var results = this.determineResults(); 
        return (
            <div> 
                <div className="searchBox">
                    <input
                    value = {this.state.searchValue}
                    className="search_field" 
                    type="text"
                    placeholder="Enter a Building..."
                    onChange = {this.handleChange.bind(this)}
                    />
                </div> 
                
                {this.renderSearchResults(results)}
                
            </div>  
            
        );
     }
}

export default Searchbar; 