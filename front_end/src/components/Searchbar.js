import React, { Component } from 'react'; 
import '../App.css';
import Searchresult from './Searchresult.js'; 

class Searchbar extends Component {
    constructor(props){
        super(props); 
        this.state = {
            allBathrooms: [], 
            inCurrentSearch: [], 
            searchValue : "", 
            filtering : this.props.filtering, 
            males : [], 
            females : []
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

        
        fetch("/males")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            this.setState({ males : data });
        })
        .catch((error) => {
          console.error(error);
        });
 
        fetch("/females")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            this.setState({ females: data });
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
        let filtering = this.state.filtering; 
        var results = []; 
        console.log("in here"); 
        console.log(this.state.allBathrooms); 
        for (var i = 0; i < this.state.allBathrooms.length; i++ ){
            let searchText = this.state.allBathrooms[i].building; 
            if(searchText.substring(0, this.state.searchValue.length).toLowerCase() !== this.state.searchValue.toLowerCase() && this.state.searchValue.trim() !== ""){
                continue; 
            }
            if((filtering.open == "Open" && this.state.allBathrooms[i].open == 0) || (filtering.open == "Closed" && this.state.allBathrooms[i].open == 1)){
                continue;
            }
            if((filtering.wheelchair == "Yes" && this.state.allBathrooms[i].wheelchair == 0) || (filtering.wheelchair == "No" && this.state.allBathrooms[i].wheelchair == 1)){
                continue;
            }
            let maleMatch = false; 
            let femaleMatch = false;
            let urinals = 0; 
            let feminine = 0; 
            console.log(this.state.allBathrooms[i].id, "bathroom id"); 
            console.log(this.state.males); 
            for(let j = 0; j < this.state.males.length; j ++){
                if(this.state.males[j].id == this.state.allBathrooms[i].id){
                    maleMatch = true;
                    urinals = this.state.males[j].urinals
                    console.log(urinals, "urinals"); 
                }
            }
            for(let j = 0; j < this.state.females.length; j ++){
                if(this.state.females[j].id == this.state.allBathrooms[i].id){
                    femaleMatch = true;
                    feminine = this.state.females[j].feminine
                    console.log(feminine, "feminine"); 
                }
            }
            if((filtering.gender == "Male" && maleMatch == false) || (filtering.gender == "Female" && femaleMatch == false)){
                continue; 
            }
            if((filtering.urinals == "Yes" && urinals == 0) || filtering.feminine == "Yes" && feminine == 0){
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