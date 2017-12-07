import React, { Component } from 'react'; 
import '../App.css';
import Searchbar from './Searchbar.js';
import Ratingblock from './Ratingblock.js';
import Newrating from './Newrating.js';
import Recentreviews from './Recentreviews.js'; 
import Newwashroom from './Newwashroom.js';
import Loginpage from './Loginpage.js';  

class Header extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            selectedId : -1, 
            currentWashroomView: null, 
            currentRatings : [], 
            ratingFlag: false, 
            rating: null, 
            user: "Guest", 
            loginSignupOpen: false
        }
        this.searchResultsClick = this.searchResultsClick.bind(this); 
        this.closeWashMenu = this.closeWashMenu.bind(this); 
        this.closeLoginMenu = this.closeLoginMenu.bind(this); 
        this.newRating = this.newRating.bind(this); 
        this.resetRatingFlag = this.resetRatingFlag.bind(this); 
        this.loginSignupRender = this.loginSignupRender.bind(this); 
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

    //find the averages for each category of the ratings 
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
        for (let i =0; i < 6; i++){
            ratingAverages[i] = Math.round((ratingAverages[i] / this.state.currentRatings.length)); 
            console.log(ratingAverages[i]);
        }
        console.log(ratingAverages, 'rating averages'); 
        return (ratingAverages); 
    }

    //called inside the showwashroom function to create the star icons for inside the div 
    createStars(averages, category){
        let stars =""; 
        for(let i = 0; i < averages[category]; i++){
        stars = stars.concat("<i class='fa fa-star yellowColor' aria-hidden='true'></i>"); 
            
        }
        console.log(stars);
        if(stars == ""){
            stars = "<p>No Ratings</p>"; 
        } 
        return (<div className="stars" dangerouslySetInnerHTML={{__html: stars}}></div>);  
    }
    
    renderAllRatings(averages){ 
        let ratingHTML = []; 
        for(let i = 0; i < this.state.currentRatings.length; i++){
            ratingHTML.push(<Ratingblock  starNums = {averages} rating = {this.state.currentRatings[i]} bathroom = {this.state.currentWashroomView}></Ratingblock>); 
        }
        return (ratingHTML); 
    }

    //render the washroom info 
    showWashroom() {
        if(this.state.currentWashroomView !== null){
            let ratingAverages = this.determineRatingAverages(); 
            let current = this.state.currentWashroomView[0];
            let title = (current.building + " " + current.room_num);  
            return( 
                <div className = "washroomInfoContainer" >
                    <div className = "infoRow close" onClick = {this.closeWashMenu}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className = "infoRow">
                        <h1 className = "title" >{title}</h1> 
                    </div>
                    <div className = "infoRow">
                        <div className = "category">
                            <p className = "subTitle">Location</p> 
                            {this.createStars(ratingAverages, 0)}
                        </div>
                        <div className = "category">
                            <p className = "subTitle">Smell</p>
                            {this.createStars(ratingAverages, 1)} 
                        </div> 
                        <div className = "category">
                            <p className = "subTitle">Cleanliness</p> 
                            {this.createStars(ratingAverages, 2)}
                        </div>  
                    </div>  
                    <div className = "infoRow">
                        <div className = "category">
                            <p className = "subTitle">Maintanence</p>
                            {this.createStars(ratingAverages, 3)} 
                        </div>
                        <div className = "category">
                            <p className = "subTitle">Wait time</p>
                            {this.createStars(ratingAverages, 4)} 
                        </div> 
                        <div className = "category">
                            <p className = "subTitle">Privacy</p> 
                            {this.createStars(ratingAverages, 5)}
                        </div> 
                    </div> 
                    <div className = "allRatingsContainer"> 
                        {this.renderAllRatings(ratingAverages)}
                    </div>  
                    <div classNae = "newRatingButtonContainer">
                        <button type="button" className = "newRatingButton" onClick={this.newRating}> New Rating </button>
                    </div>  
                </div>
            )
        }
    }

    resetRatingFlag(){
        this.setState({rating: null}); 
    }

    newRating(){
       this.setState({ rating : <Newrating bathroom = {this.state.currentWashroomView} close = {this.resetRatingFlag} ratingId = {this.state.currentRatings.length}></Newrating> }); 
       this.closeWashMenu();  
    }

    checkNewRating(){
        if(this.state.rating != null){
            return (this.state.rating);
        }
    //     let checkResult = null; 
    //     if(this.state.ratingFlag == true){ 
    //         checkResult = <Newrating bathroom = {this.state.currentWashroomView} close = {this.resetRatingFlag} ratingId = {this.state.currentRatings.length}></Newrating>;         
    //     }
    //    return(checkResult); 
    }

    
    loginSignup(){
        this.setState({loginSignupOpen : true}); 
    }

    loginSignupRender(){
        if(this.state.loginSignupOpen == true){
            return(
                <Loginpage close = {this.closeLoginMenu()} ></Loginpage>
            ); 
        }
       
    }

    closeLoginMenu(){
        this.setState({loginSignupOpen : false}); 
    }

    render(){
        return (
            <div> 
                <div className="header">
                    <Searchbar click = {((message) => this.searchResultsClick(message))}></Searchbar>
                    <div className="button_flex_container">
                        <button type="button" className = "newFacilityButton" onClick={this.buttonClick}> Add New Facility </button>
                        <button type="button" className = "viewBestButton" onClick={this.buttonClick}> View Best Facility's </button> 
                        <button type="button" className = "viewRecentButton" onClick={this.loginSignup}> Login/Signup </button> 
                    </div>
                    <img className = "header_image" src = {require("../images/header.jpg")} alt=""></img> 
                    <img className = "uni_logo" src = {require("../images/uc_logo.png")} alt=""></img>  
                </div>
                {this.showWashroom()}
                {this.checkNewRating()}
                {this.loginSignupRender()}
                
                <Recentreviews></Recentreviews>
              
            </div> 
        );
     }
}

export default Header; 