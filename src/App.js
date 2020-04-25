import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./pages/home/home"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={["/", "/home", "/landing"]} component={Home}/>
      </Router>
    </div>
  );
}

export default App;
