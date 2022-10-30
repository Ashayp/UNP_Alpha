import React, { useState } from 'react';
import './App.css';
import Searchpage from './searchpage';
import 'antd/dist/antd.css';
import Login from './Login';
import { BrowserRouter as Router, Switch,renderMatches, Route, Routes } from 'react-router-dom';



function App() {
  console.log("reached here1")
  render(){
    return (
      <Router>
      <Switch>
          {/* <Route path="/" exact >
          <div className="App">        
                  <Searchpage />
           </div>
          </Route> */}
          <Searchpage />
      
      </Switch>
      </Router>
            
        );
  }
 
}

export default App;
