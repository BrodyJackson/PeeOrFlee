import React, { Component } from 'react'; 
import '../App.css';
import Searchbar from './Searchbar.js';

class Header extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            selectedId : -1, 
            currentWashroomView: null, 
            currentRatings : []
        }
        this.searchResultsClick = this.searchResultsClick.bind(this); 
        this.closeWashMenu = this.closeWashMenu.bind(this); 
    }

    buttonClick(){
        //add code here for when the buttons are clicked, probably want to add a name to each button, so can differentiate between
    }

    searchResultsClick(washroom) {
        
        this.setState({selectedId : washroom}); //changed the selected id to the one we want 
        let fetchBathroomString = ("/bathrooms/" + washroom); 
        let fetchRatingString = ("/ratings/bathroomrating/" + washroom);
        //if we have selected a washroom, then get back the washroom with that id from the database
        if(this.state.selectedId !== -1){
            fetch(fetchBathroomString)
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "retrieved"); 
                this.setState({ currentWashroomView : data });
            })
            .catch((error) => {
              console.error(error);
            });
            //fetch all the ratings for that specific washroom
            fetch(fetchRatingString)
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "rating retrieved"); 
                this.setState({ currentRatings : data });
            })
            .catch((error) => {
              console.error(error);
            });

            //add function to calculate the averages for the ratings, then these are added to the ratings
        }
    }

    closeWashMenu(){
        this.setState({currentWashroomView : null, currentRatings : []}); 
    }

    determineRatingAverages(){
        //array which holds the rating averages, the order goes like this
        // location, smell, cleanliness, maintanence, wait-time, privacy
        var ratingAverages = [0,0,0,0,0,0]; 
        for(let i = 0; i< this.state.currentRatings.length; i++){
            ratingAverages[0] = ratingAverages[0] + this.state.currentRatings[i].location; 
            ratingAverages[1] = ratingAverages[1] + this.state.currentRatings[i].smell; 
            ratingAverages[2] = ratingAverages[2] + this.state.currentRatings[i].cleanliness; 
            ratingAverages[3] = ratingAverages[3] + this.state.currentRatings[i].maintanence;
            ratingAverages[4] = ratingAverages[4] + this.state.currentRatings[i].wait_time;
            ratingAverages[5] = ratingAverages[5] + this.state.currentRatings[i].privacy; 
        }
        for (let i =0; i < this.state.currentRatings.length; i++){
            ratingAverages[i] = Math.round((ratingAverages[i] / this.state.currentRatings.length)); 
        }
        console.log(ratingAverages, 'rating averages'); 
    }

    showWashroom() {
        if(this.state.currentWashroomView !== null){
            this.determineRatingAverages(); 
            let current = this.state.currentWashroomView[0];
            let title = (current.building + " " + current.room_num);  
            return( 
                <div className = "washroomInfoContainer" onClick = {this.closeWashMenu}>
                    <div className = "infoRow close">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className = "infoRow">
                        <h1 className = "title" >{title}</h1> 
                    </div>
                    <div className = "infoRow">
                        <div className = "category">
                            <p className = "subTitle">Location</p> 
                            {/* add value */}
                        </div>
                        <div className = "category">
                            <p className = "subTitle">Smell</p> 
                        </div> 
                        <div className = "category">
                            <p className = "subTitle">Cleanliness</p> 
                        </div>  
                    </div>  
                    <div className = "infoRow">
                        <div className = "category">
                            <p className = "subTitle">Maintanence</p> 
                        </div>
                        <div className = "category">
                            <p className = "subTitle">Wait time</p> 
                        </div> 
                        <div className = "category">
                            <p className = "subTitle">Privacy</p> 
                        </div> 
                    </div>  

                </div>
            )
        }
    }
    

    render(){
        return (
            <div> 
                <div className="header">
                    <Searchbar click = {((message) => this.searchResultsClick(message))}></Searchbar>
                    <div className="button_flex_container">
                        <button type="button" className = "newFacilityButton" onClick={this.buttonClick}> Add New Facility </button>
                        <button type="button" className = "viewBestButton" onClick={this.buttonClick}> View Best Facility's </button> 
                        <button type="button" className = "viewRecentButton" onClick={this.buttonClick}> View Recent Ratings </button> 
                    </div>
                    <img className = "header_image" src = {require("../images/header.jpg")} alt=""></img> 
                    <img className = "uni_logo" src = {require("../images/uc_logo.png")} alt=""></img>  
                </div>
                {this.showWashroom()}
                
            </div> 
        );
     }
}

export default Header; 