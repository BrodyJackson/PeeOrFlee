import React, { Component } from 'react'; 
import '../App.css';


class Newrating extends Component {

    constructor(props){
        super(props); 
        this.state = {
            bathroom: this.props.bathroom,
            value: {
                location: 1, 
                smell: 1, 
                cleanliness: 1, 
                maintanence: 1, 
                wait_time: 1, 
                privacy: 1
            }, 
            comment : "", 
            ratingId : this.props.ratingId, 
            user: this.props.user
        }
        this.handleChange = this.handleChange.bind(this); 
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
        console.log("in newRating", this.state.bathroom[0].id); 
        console.log(this.state.ratingId); 
        // this.resultClicked = this.resultClicked.bind(this); 
    }
    
    handleSubmit(event) {
        event.preventDefault(); 
        let timestamp = new Date().getUTCMilliseconds();
        console.log(this.state.bathroom[0].id); 
        fetch("/ratings", {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
              id: timestamp,
              bthrm_id: this.state.bathroom[0].id, 
              cleanliness: this.state.value.cleanliness,
              wait_time: this.state.value.wait_time,
              user_approval: this.state.user.name, //value is hardcoded, we aren't doing anything with this
              overall: 5, //value is hardcoded, we aren't doing anything with this
              smell: this.state.value.smell,
              privacy: this.state.value.privacy,
              location: this.state.value.location,
              maintanence: this.state.value.maintanence
            })
          });

          let commentText = this.state.comment; 
          console.log(commentText, 'commenttext'); 
          let dateString = new Date().toLocaleString(); 
          let test = Date.now(); 
          fetch("/comments", {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: timestamp, 
              comment: commentText, 
              date: dateString, 
              ordering: test           
            })
          });

          this.close();  
        //post the new review and exit 
    }

    handleChange(index, event){
        let currentValue = this.state.value;
        let stringValue = index;
        if(stringValue != 'comment'){
            currentValue[stringValue] = event.target.value
            console.log('newvalue', currentValue)
            this.setState({
                value : currentValue
            })  
        } 
        else if(stringValue == 'comment'){
            this.setState({
                comment: event.target.value
            })
        }
         
    }


    close(event) {
        console.log("test");   
        this.props.close();  
    }
    
    render(){  
        let current = this.state.bathroom[0];
        let title = (current.building + " " + current.room_num);
        return (

             <div className = "newRatingContainer"> 
                <div className = "infoRow close" onClick = {this.close}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                </div> 
                <div className = "infoRow">
                    <h1 className = "title" >{title}</h1>    
                </div>
                 
                <form onSubmit = {this.handleSubmit}>
                    <div className = "infoRow">
                        <div className = "category">
                            <p className = "subTitle">Location</p>
                            <select name = "location" value={this.state.value.location} onChange={this.handleChange.bind(this, 'location')} class="styled-select teal rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> 
                            
                        </div>
                        <div className = "category">
                            <p className = "subTitle">Smell</p>
                            <select value={this.state.value.smell} onChange={this.handleChange.bind(this, 'smell')} class="styled-select teal rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> 
                            
                        </div> 
                        <div className = "category">
                            <p className = "subTitle">Cleanliness</p>
                            <select value={this.state.value.cleanliness} onChange={this.handleChange.bind(this, 'cleanliness')} class="styled-select teal rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>  
                            
                        </div>  
                    </div>  
                    <div className = "infoRow">
                        <div className = "category">
                            <p className = "subTitle">Maintanence</p>
                            <select value={this.state.value.maintanence} onChange={this.handleChange.bind(this, 'maintanence')} class="styled-select teal rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> 
                            
                        </div>
                        <div className = "category">
                            <p className = "subTitle">Wait time</p>
                            <select value={this.state.value.time} onChange={this.handleChange.bind(this, 'wait_time')} class="styled-select teal rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> 
                            
                        </div> 
                        <div className = "category">
                            <p className = "subTitle">Privacy</p> 
                            <select value={this.state.value.privacy} onChange={this.handleChange.bind(this, 'privacy')} class="styled-select teal rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> 
                        
                        </div> 
                    </div>
                    <div class="commentBox"><textarea class="commentField" value = {this.state.comment} placeholder="Enter an optional..." onChange = {this.handleChange.bind(this, 'comment')}> 
                    </textarea> </div>
                    <div><input type="submit" value="Submit" class="userButtons buttonContainer" /></div>
                </form>
            </div> 
        );
     }
}

export default Newrating; 