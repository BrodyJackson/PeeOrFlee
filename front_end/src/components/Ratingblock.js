import React, { Component } from 'react'; 
import '../App.css';


class Ratingblock extends Component {

    constructor(props){
        super(props); 
        this.state = {
            bathroom: this.props.bathroom, 
            rating: this.props.rating, 
            ratingAverages : this.props.starNums, 
            commentObject : [], 
            user : this.props.user
        }
        console.log("in block", this.state.bathroom[0].building);
        console.log(this.props.user);  
        this.deleteRatings = this.deleteRatings.bind(this);
    }
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

    componentWillMount(){
        let commentString = ("/comments/" + this.state.rating.id); 
        fetch(commentString)
        .then((response) => response.json())
        .then((data) => {
            console.log(data, "retrieved"); 
            this.setState({ commentObject : data });
            console.log("it worked"); 
            console.log(this.state.commentObject); 
        })
        .catch((error) => {
          console.error(error);
        });  
    }

    determineComment(){
        if (this.state.commentObject[0] != undefined){
            return(
                <p> {this.state.commentObject[0].comment} </p> 
            ); 
        }
    }
    determineDeleteShows(){
        
        let deleteDiv = []
        if(this.state.user.admin == 1){
        
            deleteDiv.push(<div className = "" onClick = {this.deleteRatings}><i class="fa fa-trash trashMargin" aria-hidden="true"></i></div>); 
        }  
        return(deleteDiv); 
    }

    deleteRatings(event){
        alert("rating deleted"); 
        let url = ("/ratings/" + this.state.rating.id); 

        return fetch(url, {
            method: 'delete'
        })
        .then(response => response.json())
        .then(this.props.deleteClick());         
    }
 
    
    render(){
        let value = (this.state.bathroom[0].building + " " + this.state.bathroom[0].room_num);
        console.log('value', value);   
        return (
            <div className = "ratingBox"> 
                <div className = "flexRow justify-around">
                    <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
                    <div class="flexColumn top_info marginToRight">
                        <p className= "top_value">{this.state.rating.user_approval}</p>
                        <p className= "top_value">{value}</p>
                    </div> 
                    {this.determineDeleteShows()}
                </div> 
                    {/* figure out how to get the stars in here conditionally */}
                <div className = "flexRow spaceAround">
                    <div className = "categoryContainer" class="category">
                        <p className = "smallRatingCategory">Location</p> 
                        {this.createStars(this.state.ratingAverages, 0)}
                    </div> 
                    <div className = "categoryContainer" class="category">
                        <p className = "smallRatingCategory">Smell</p> 
                        {this.createStars(this.state.ratingAverages, 1)}
                    </div> 
                    <div className = "categoryContainer" class="category">
                        <p className = "smallRatingCategory">Cleanliness</p> 
                        {this.createStars(this.state.ratingAverages, 2)}
                    </div> 
                </div>
                <div className = "flexRow spaceAround">
                    <div className = "categoryContainer" class="category">
                        <p className = "smallRatingCategory">Maintanence</p> 
                        {this.createStars(this.state.ratingAverages, 3)}
                    </div> 
                    <div className = "categoryContainer" class="category">
                        <p className = "smallRatingCategory">Wait Time</p> 
                        {this.createStars(this.state.ratingAverages, 4)}
                    </div> 
                    <div className = "categoryContainer" class="category">
                        <p className = "smallRatingCategory">Privacy</p> 
                        {this.createStars(this.state.ratingAverages, 5)}
                    </div> 
                </div>  
                <div className = "commentDiv">
                    {this.determineComment()} 
                </div> 
            </div> 
        );
     }
}

export default Ratingblock; 