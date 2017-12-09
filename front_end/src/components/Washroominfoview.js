import React, { Component } from 'react'; 
import '../App.css';


class Washroominfoview extends Component {

    constructor(props){
        super(props); 
        this.state = {
            currentWashroomView: this.props.currentWashroomView,
            males: this.props.males, 
            females: this.props.females, 
            allBathrooms: []
            //this is where you will add the state for the form data which updates when form is changed
            //when you submit you access these values 
            //the comment one below is an example 
        
        }
        this.determineStats = this.determineStats.bind(this);  
    }
   
    
    determineStats(){
        let maleMatch = false; 
        let femaleMatch = false;
        let urinals = 0; 
        let feminine = 0; 
        let returnValue = []; 
       
        for(let j = 0; j < this.state.males.length; j ++){
            if(this.state.males[j].id == this.state.currentWashroomView[0].id){
                maleMatch = true;
                urinals = this.state.males[j].urinals
                console.log(urinals, "urinals"); 
            }
        }
        for(let j = 0; j < this.state.females.length; j ++){
            if(this.state.females[j].id == this.state.currentWashroomView[0].id){
                femaleMatch = true;
                feminine = this.state.females[j].feminine
                console.log(feminine, "feminine"); 
            }
        }
        
        if(this.state.currentWashroomView[0].open == 1){
            returnValue.push(<div className = "category">
                <p className = "subTitle">Status</p> 
                <i class="fa fa-check-square" aria-hidden="true"></i>
                </div>); 
        }
        else{
            returnValue.push(<div className = "category">
                <p className = "subTitle">Status</p> 
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </div>); 
        }
        if(this.state.currentWashroomView[0].wheelchair == 1){
            returnValue.push(<div className = "category">
                <p className = "subTitle">Wheelchair</p> 
                <i class="fa fa-check-square" aria-hidden="true"></i>
                </div>); 
        }
        else{
            returnValue.push(<div className = "category">
                <p className = "subTitle">Wheelchair</p> 
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </div>); 
        }
        if((maleMatch == true) && (femaleMatch == true)){
            returnValue.push(<div className = "category">
            <p className = "subTitle">Gender</p> 
            <i class="fa fa-male" aria-hidden="true"></i>
            <i class="fa fa-female" aria-hidden="true"></i>
            </div>); 
            if((feminine == 1) || (urinals == 1)){
                returnValue.push(<div className = "category">
                <p className = "subTitle">Amenities</p> 
                <i class="fa fa-check-square" aria-hidden="true"></i>
                </div>); 
            }
            else{
                returnValue.push(<div className = "category">
                <p className = "subTitle">Amenities</p> 
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </div>); 
            }
        }
        else if(femaleMatch == true){
            returnValue.push(<div className = "category">
            <p className = "subTitle">Gender</p> 
            <i class="fa fa-female" aria-hidden="true"></i>
            </div>); 
            if(feminine == 1){
                returnValue.push(<div className = "category">
                <p className = "subTitle">Amenities</p> 
                <i class="fa fa-check-square" aria-hidden="true"></i>
                </div>); 
            }
            else{
                returnValue.push(<div className = "category">
                <p className = "subTitle">Amenities</p> 
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </div>); 
            }
        }
        else if(maleMatch == true){
            returnValue.push(<div className = "category">
            <p className = "subTitle">Gender</p> 
            <i class="fa fa-male" aria-hidden="true"></i>
            </div>); 
            if(urinals == 1){
                returnValue.push(<div className = "category">
                <p className = "subTitle">Amenities</p> 
                <i class="fa fa-check-square" aria-hidden="true"></i>
                </div>); 
            }
            else{
                returnValue.push(<div className = "category">
                <p className = "subTitle">Amenities</p> 
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </div>); 
            }
        }
        return(returnValue); 

    }


    render(){  

        return (
            <div className = "infoRow">
                {this.determineStats()}
            </div> 
        );
     }
}

export default Washroominfoview; 