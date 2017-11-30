import React, { Component } from 'react'; 
import '../App.css';


class Searchresult extends Component {

    constructor(props){
        super(props); 
        this.state = {
            currentBathroom: this.props.value
        }
        this.resultClicked = this.resultClicked.bind(this); 
    }

    resultClicked(event) {
        console.log("test"); 
        event.preventDefault(); 
        var id = this.state.currentBathroom.id; 
        this.props.click(id);  
        console.log("test2"); 
    }
    
    render(){
        console.log("inside search result componenet", this.state.currentBathroom); 
        return (
            <div className = "resultListItem" onClick = {this.resultClicked}> 
               <div className = "item">
                <p className = "resultHeader">Building</p> 
                <p className = "resultValue">{this.state.currentBathroom.building}</p>
               </div> 
               <div className = "item"> 
                <p className = "resultHeader">Room #</p> 
                <p className = "resultValue">{this.state.currentBathroom.room_num}</p>
               </div> 
               <div className = "item">
                <p className = "resultHeader">Stall</p> 
                <p className = "resultValue">{this.state.currentBathroom.stall_num}</p>
               </div>     
            </div> 
        );
     }
}

export default Searchresult; 