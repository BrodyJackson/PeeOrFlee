import React, { Component } from 'react'; 
import '../App.css';


class Filterpage extends Component {

    constructor(props){
        super(props); 
        this.state = {
            filtering : this.props.values, 
            // users : [], 
            // userName : "", 
            // user: true, 
            // admin: false, 
            // message: null
            //this is where you will add the state for the form data which updates when form is changed
            //when you submit you access these values 
            //the comment one below is an example 
        
        }
        this.handleChange = this.handleChange.bind(this); 
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.determineUrinals = this.determineUrinals.bind(this); 
        

    }

   
    
    handleSubmit(event) {
        event.preventDefault(); 
        console.log("filter value sent back to header" , this.state.filtering);
        this.props.filterUpdate(this.state.filtering); 
        this.props.close(); 
    }

    handleChange(index, event){
        let currentValue = this.state.filtering;
        let stringValue = index;
        
        currentValue[stringValue] = event.target.value;
        console.log('newvalue', currentValue)
        this.setState({
            filtering : currentValue
        }) 
             
    }
    
    handleChangeDependant(index, event){
        
        let currentValue = this.state.filtering;
        let stringValue = index;
        console.log(event.target.value); 
        if(event.target.value == "Any"){
            currentValue.urinals = "Any"; 
            currentValue.feminine = "Any"; 
            console.log(currentValue); 
        }
        currentValue[stringValue] = event.target.value; 
        console.log('newvalue', currentValue)
        this.setState({
            filtering : currentValue
        }) 
              
    }
    


    close(event) {
        console.log("test"); 
        //when you want this to be created when the button is clicked, then call the function in header which was passed in as a prop   
        this.props.close();  
    }

    determineUrinals(){
        var urinalsDiv = []; 
        if(this.state.filtering.gender == "Male"){
            urinalsDiv.push(
                <div className = "flexRow filterCriteria">
                    <p className = "subTitle">Urinals</p>
                    <select value={this.state.filtering.urinals} onChange={this.handleChange.bind(this, 'urinals')}>
                        <option value="Any">Any</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>     
                </div>
            ) 
        }
        else if (this.state.filtering.gender == "Female") {
            urinalsDiv.push(
                <div className = "flexRow filterCriteria">
                    <p className = "subTitle">Feminine Hygiene Products</p>
                    <select value={this.state.filtering.feminine} onChange={this.handleChange.bind(this, 'feminine')}>
                        <option value="Any">Any</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>     
                </div>); 
        }
        return(urinalsDiv); 
    }
    
    render(){  

        return (
        <div className = "newLoginContainer"> 
            <form>
                <div className = "infoRow close" onClick = {this.close}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className = "flexRow">
                    <h1 className = "title" >Filter Options</h1> 
                </div>
                <div className = "flexRow filterCriteria">
                    <p className = "loginText">Open/Closed</p> 
                    <select value={this.state.filtering.open} onChange={this.handleChange.bind(this, 'open')}>
                        <option value="Any">Any</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div> 
                <div className = "flexRow filterCriteria">
                <p className = "loginText">WheelChair Accessability</p> 
                <select value={this.state.filtering.wheelchair} onChange={this.handleChange.bind(this, 'wheelchair')}>
                    <option value="Any">Any</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                </div> 
                <div className = "flexRow filterCriteria">
                <p className = "loginText">Gender</p> 
                <select value={this.state.filtering.gender} onChange={this.handleChangeDependant.bind(this, 'gender')}>
                    <option value="Any">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </div> 
                {this.determineUrinals()}  
                <div className = "flexRow filterCriteria">
                    <button class="userButtons buttonContainer" onClick={this.handleSubmit}>Done</button>
                </div> 
               
            </form>
        </div> 
        );
     }
}

export default Filterpage; 