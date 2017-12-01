import React, { Component } from 'react'; 
import '../App.css';


class Ratingblock extends Component {

    constructor(props){
        super(props); 
        this.state = {
            bathroom: this.props.bathroom, 
            rating: this.props.rating, 
            ratingAverages : this.props.starNums
        }
        // this.resultClicked = this.resultClicked.bind(this); 
    }
    createStars(averages, category){
        let stars =""; 
        for(let i = 0; i < averages[category]; i++){
        stars = stars.concat("<i class='fa fa-star' aria-hidden='true'></i>"); 
            
        }
        console.log(stars);
        if(stars == ""){
            stars = "<p>No Ratings</p>"; 
        } 
        return (<div className="stars" dangerouslySetInnerHTML={{__html: stars}}></div>);  
    }
    
    
    render(){
        
        return (
            <div className = "ratingBox"> 
                <div className = "infoRow">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    <div>
                        <h1>user #</h1>
                        <h1>{this.state.bathroom.building}</h1>
                    </div> 
                    {/* figure out how to get the stars in here conditionally */}
                    <div>
                        <p className = "subTitle">Location</p> 
                        {this.createStars(this.state.ratingAverages, 0)}
                    </div> 
                    <div>
                        <p> comment that will actually be taken from the database value once I add it </p> 
                    </div> 
                </div> 
                <div className = "infoRow"></div>
                <div className = "infoRow"></div>
                <div className = "infoRow"></div>
            </div> 
        );
     }
}

export default Ratingblock; 