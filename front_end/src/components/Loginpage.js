import React, { Component } from 'react'; 
import '../App.css';


class Loginpage extends Component {

    constructor(props){
        super(props); 
        this.state = {
            
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
        //form has been submitted, add the code which sends the values from the form that you have been saving in state to the put request for washroom
        //follow the way that newRating does it

        //call the close function once you submit the review, in order to close the page
        this.close();  
        //post the new review and exit 
    }

    handleChange(event){
    
        this.setState({ })  
    }
        
         
    


    close(event) {
        console.log("test"); 
        //when you want this to be created when the button is clicked, then call the function in header which was passed in as a prop   
        this.props.close();  
    }
    
    render(){  

        return (
            //I just added a stubbed out form, you will add your own html structure to this, with varius fields for the new washroom 
            //the input type submit is the submit button, and the button with classname cancel button will close the menu 
             <div> 
                
            </div> 
        );
     }
}

export default Loginpage; 