import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css'; 
import Header from './components/Header.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header> 
      </div>
    );
  }
}

export default App;
