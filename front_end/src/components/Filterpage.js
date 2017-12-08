import React, { Component } from 'react'; 
import '../App.css';


class Filterpage extends Component {

    constructor(props){
        super(props); 
        this.state = {
            filtering : this.props.values
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
        
        currentValue[stringValue] = event.target.value
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
                <div className = "flexRow">
                    <p className = "loginText">Open/Closed</p> 
                    <select value={this.state.filtering.open} onChange={this.handleChange.bind(this, 'open')}>
                        <option value="Any">Any</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div> 
                <div className = "flexRow">
                <p className = "loginText">WheelChair Accessability</p> 
                <select value={this.state.filtering.wheelchair} onChange={this.handleChange.bind(this, 'wheelchair')}>
                    <option value="Any">Any</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                </div> 
                <div className = "flexRow">
                <p className = "loginText">Gender</p> 
                <select value={this.state.filtering.gender} onChange={this.handleChange.bind(this, 'gender')}>
                    <option value="Any">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </div>   
                <div className = "flexRow">
                    <button onClick={this.handleSubmit}>Done</button>
                </div> 
               
            </form>
        </div> 
        );
     }
}

export default Filterpage; 