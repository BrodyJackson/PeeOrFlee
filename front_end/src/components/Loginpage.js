import React, { Component } from 'react'; 
import '../App.css';


class Loginpage extends Component {

    constructor(props){
        super(props); 
        this.state = {
            users : [], 
            userName : "", 
            user: true, 
            admin: false, 
            message: null
            //this is where you will add the state for the form data which updates when form is changed
            //when you submit you access these values 
            //the comment one below is an example 
        
        }
        this.handleChange = this.handleChange.bind(this); 
        this.radioHandle = this.radioHandle.bind(this); 
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    componentWillMount(){
        fetch("/accounts")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            this.setState({ users: data });
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
    handleSubmit(event) {
        let foundResult = false; 
        event.preventDefault(); 
        for(let i = 0; i < this.state.users.length; i++){
            if(this.state.userName == this.state.users[i].name){ 
                this.props.userUpdate(this.state.users[i]); 
                foundResult = true; 
            }
        }
        if(foundResult === false){
            console.log("not found"); 
            this.setState({message: "User Not found"});                
        } 
        else if(foundResult === true){
            this.setState({message: "Logged In Successfully"}) ;            
        }
    }

    handleChange(event){
    
        this.setState({userName:event.target.value })  
    }
        
         
    radioHandle(index, event){
        if(index == 0){
            let value = event.target.value; 
            this.setState({user : true, admin: false}); 
        }
        else if(index == 1){
            let value = event.target.value; 
            this.setState({user : false, admin: true})
        }
    }

    newUser(event){
        event.preventDefault();
        let timestamp = new Date().getUTCMilliseconds();
        fetch("/accounts", {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: timestamp, 
              name: this.state.userName, 
              password: '123', 
              admin: this.state.admin          
            })
          });      
        this.setState({message: "User Created"}); 
        this.componentWillMount();                
    }


    close(event) {
        console.log("test"); 
        //when you want this to be created when the button is clicked, then call the function in header which was passed in as a prop   
        this.props.close();  
    }
    
    render(){  

        return (
        <div className = "newLoginContainer"> 
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className = "infoRow close" onClick = {this.close}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                </div>
               
                <div className = "flexRow">
                    <h1 className = "title" >Login</h1> 
                </div>
                <p className = "loginMessage">{this.state.message}</p> 
                <div className = "flexColumn">
                    <p className = "loginText">Username</p> 
                    <input type="text" class="usernameTextField" placeholder="Enter your username..." value={this.state.userName} onChange = {this.handleChange}></input> 
                </div> 
                <div className = "flexRow userAdminRow"> 
                    <div classname = "flexColumn userAdmin">
                        <p className = "loginText">User</p> 
                        <input type="radio" name="User" checked={this.state.user} onChange = {this.radioHandle.bind(this, 0)}></input>
                    </div> 
                    <div classname = "flexColumn userAdmin">
                        <p className = "loginText">Admin</p>
                        <input type="radio" name="Admin" checked={this.state.admin} onChange = {this.radioHandle.bind(this, 1)}></input>
                    </div>      
                </div> 
                <div className = "flexRow userButtons">
                    <button type="submit">Login</button>
                    <button onClick={this.newUser.bind(this)}>New User</button>
                </div> 
               
            </form>
        </div> 
        );
     }
}

export default Loginpage; 