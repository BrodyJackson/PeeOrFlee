import React, { Component } from 'react'; 
import '../App.css';


class Newwashroom extends Component {

    constructor(props){
        super(props); 
        this.state = {
            
            //this is where you will add the state for the form data which updates when form is changed
            //when you submit you access these values 
            //the comment one below is an example 
            values : {
                building : "MSC", 
                rooomNum : "123", 
                stallNum : "0", 
                open: "1", 
                wheelchair : "0", 
                gender : "0", 
                urinals : "0", 
                comments : "", 
                feminine : "1"
            } 
            
        }
        this.handleChange = this.handleChange.bind(this); 
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.determineUrinals = this.determineUrinals.bind(this); 
    }
    

    handleSubmit(event) {
        event.preventDefault(); 
        alert('submit'); 
        let timestamp = new Date().getUTCMilliseconds();
        fetch("/bathrooms", {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                id: timestamp,
                stall_num : this.state.values.stallNum,  
                description: this.state.values.comments,
                open: this.state.values.open,
                wheelchair: this.state.values.wheelchair, //value is hardcoded, we aren't doing anything with this
                building: this.state.values.building, //value is hardcoded, we aren't doing anything with this
                room_num: this.state.values.rooomNum, 
            })
            });

            
            if(this.state.values.gender == "1")
            {
                fetch("/males", {
                    method: "POST",
                    headers: {'Accept': 'application/json',
                    'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: timestamp, 
                        urinals : this.state.values.urinals          
                    })
                });
            }
            else if(this.state.values.gender == "0")
            {
                fetch("/females", {
                    method: "POST",
                    headers: {'Accept': 'application/json',
                    'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: timestamp, 
                        feminine: parseInt(this.state.values.feminine)         
                    })
                });
            }
        
            this.close();  
        //post the new review and exit 
    } 
    

    handleChange(event){
    
        this.setState({comment : event.target.value })  
    }
        
         
    


    close(event) {
        console.log("test"); 
        //when you want this to be created when the button is clicked, then call the function in header which was passed in as a prop   
        this.props.close();  
    }

    handleChange(index, event){
        let currentValue = this.state.values;
        let stringValue = index;
       
        currentValue[stringValue] = event.target.value
        console.log('newvalue', currentValue)
        this.setState({
            values : currentValue
        })      
    }

    determineUrinals(){
        var urinalsDiv = []; 
        if(this.state.values.gender == 1){
            urinalsDiv.push(
                <div className = "category">
                    <p className = "subTitle">Urinals</p>
                    <select value={this.state.values.urinals} onChange={this.handleChange.bind(this, 'urinals')}>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>     
                </div>
            ) 
        }
        else{
            urinalsDiv.push(
                <div className = "category">
                    <p className = "subTitle">Feminine Hygiene Products</p>
                    <select value={this.state.values.feminine} onChange={this.handleChange.bind(this, 'feminine')}>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>     
                </div>); 
        }
        return(urinalsDiv); 
    }
    
    render(){  
        return (
        <div className = "newWashContainer"> 
            <div className = "infoRow close" onClick = {this.close}>
                        <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className = "infoRow">
                <h1 className = "title" >New Washroom</h1> 
            </div>
            <form onSubmit = {this.handleSubmit}>
                <div className = "infoRow">
                    <div className = "category">
                        <p className = "subTitle">Location</p>
                        <input type="text" value={this.state.values.building} onChange = {this.handleChange.bind(this, 'building')}></input>  
                    </div>
                    <div className = "category">
                        <p className = "subTitle">Room Number</p>
                        <input type="text" value={this.state.values.roomNum} onChange = {this.handleChange.bind(this, 'roomNum')}></input>   
                    </div> 
                    <div className = "category">
                        <p className = "subTitle">Stall Number</p>
                        <input type="text" value={this.state.values.stallNum} onChange = {this.handleChange.bind(this, 'stallNum')}></input>   
                    </div>
                </div>
                <div className = "infoRow">  
                    <div className = "category">
                        <p className = "subTitle">Open</p>
                        <select value={this.state.values.open} onChange={this.handleChange.bind(this, 'open')}>
                            <option value="1">Open</option>
                            <option value="0">Closed</option>
                        </select>     
                    </div> 
                    <div className = "category">
                        <p className = "subTitle">WheelChair Accessible</p>
                        <select value={this.state.values.wheelchair} onChange={this.handleChange.bind(this, 'wheelchair')}>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>     
                    </div> 
                </div> 
                <div className = "infoRow"> 
                    <div className = "category">
                        <p className = "subTitle">Gender</p>
                        <select value={this.state.values.gender} onChange={this.handleChange.bind(this, 'gender')}>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>     
                    </div>
                    {this.determineUrinals()}
                </div>  
                <div className = "infoRow">
                    <div className = "category">
                        <p className = "subTitle">Comments</p>
                        <textarea value = {this.state.comment} onChange = {this.handleChange.bind(this, 'comment')}> </textarea> 
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div> 
        );
     }
}

export default Newwashroom; 