import React, { Component } from 'react'; 
import '../App.css';


class Recentreviews extends Component {

    constructor(props){
        super(props); 
        this.state = {
           allRatings : [], 
           allComments: []
        }
        console.log("in recentReviews"); 
    }
    

    componentDidMount(){
        // console.log("ratings recieved"); 
        // fetch("/ratings")
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log(data); 
        //     this.setState({ allRatings : data });
        // })
        // .catch((error) => {
        //   console.error(error);
        // });

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
    
    
    render(){
        let recentValues = this.determineNewestDate();
        return (
            <div>
            </div> 
        );
     }
}

export default Recentreviews; 