import React, { Component } from 'react'; 
import '../App.css';


class Recentreviews extends Component {

    constructor(props){
        super(props); 
        this.state = {
           allRatings : [], 
           allComments: [],
           allBathrooms: []
        }
        console.log("in recentReviews"); 
    }
    

    componentDidMount(){
    
        console.log("comments recieved"); 
        fetch("/comments")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            this.setState({ allComments : data });
        })
        .catch((error) => {
          console.error(error);
        });
        
        console.log("ratings recieved"); 
        fetch("/ratings")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            this.setState({ allRatings : data });
        })
        .catch((error) => {
          console.error(error);
        });

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

    

    determineNewestDate(){
        let object = this.state.allComments; 
        console.log(object, 'object');
        var sorted = object.sort(function(a, b) {
            return a.ordering < b.ordering;
          });
        console.log(object); 
        console.log(sorted, "sorted"); 
        let newest = []; 
        for (let i = 0; i < 4 ; i ++){
            newest.push(sorted[i]); 
        }
        console.log(newest); 
        return(newest); 
    }

    //could be some problems here with the null values
    getRatings(rating){ 
        for(let i = 0; i < this.state.allRatings.length; i++){
            if(rating.id == this.state.allRatings[i].id){
                return(this.state.allRatings[i]); 
            }
        }
        return(null); 
    }

    getBathroomName(rating){
        // console.log(rating.bthrm_id); 
        for(let i = 0; i < this.state.allBathrooms.length; i++){
            if(rating.bthrm_id == this.state.allBathrooms[i].id){
                return((this.state.allBathrooms[i].building + this.state.allBathrooms[i].room_num)); 
            }
        }
        return(null); 
    }

    createStars(rating){
        if (rating == undefined){
            return(null); 
        }
        let stars =""; 
        let average = rating.cleanliness + rating.wait_time + rating.smell + rating.privacy + rating.location + rating.maintanence;
        average = Math.round((average / 6)); 
        console.log(average);
        for(let i = 0; i < average; i++){
            stars = stars.concat("<i class='fa fa-star' aria-hidden='true'></i>");         
        }
        console.log(stars);
        if(stars == ""){
            stars = "<p>No Ratings</p>"; 
        } 
        return (<div className="stars" dangerouslySetInnerHTML={{__html: stars}}></div>);  
    }

    renderRecents(rating){
        let renderValue = 
            <div className = "recentRatingBlock"> 
                <div className = "flexRow">
                    <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
                <div class="flexColumn top_info">
                    <p className= "top_value">user #</p>
                    <p className= "top_value">{this.getBathroomName(rating)}</p>
                </div> 
                </div>
                <div className = "categoryContainer"> 
                    {this.createStars(rating)}
                </div>
                <div className = "commentDiv">
                    {this.determineComment(rating)} 
                </div>  
            </div>; 
        return(renderValue); 
    }

    determineComment(rating){
        if(rating == undefined){
            return(null); 
        }
        console.log(rating); 
        for(let i =0; i<this.state.allComments.length; i++){
           if(rating.id == this.state.allComments[i].id){
               return(<p>{this.state.allComments[i].comment}</p>); 
           }
       }
       return(null);  
    }
    
    makeReturn(recentValues, currentRatings){
        if(currentRatings == null){
           return(null); 
        }
        else{
            return(
                <div className = "recentReviewsContainer flexColumn">
                    <div className = "recentSubContainer" > 
                        {this.renderRecents(currentRatings[0])}
                        {this.renderRecents(currentRatings[1])}
                    </div> 
                        
                        <div className = "recentSubContainer"> 
                        {this.renderRecents(currentRatings[2])}
                        {this.renderRecents(currentRatings[3])}
                    </div>   
                </div> 
                );
        }     
    }
    
    render(){
        let recentValues = this.determineNewestDate();
        console.log(recentValues, "recentValues");
        let currentRatings = [];  
        for(let i = 0; i < recentValues.length; i++){
            currentRatings.push(this.getRatings(recentValues[i]))
        }
    

        
        return (
            <div className = "recentReviewsContainer flexColumn">
                <p className = "recent_reviews">Recent Reviews</p>
                {this.makeReturn(recentValues, currentRatings)} 
            </div>
        );
     }
}

export default Recentreviews; 